import React, { useEffect, useRef, PropsWithChildren } from 'react';

// Type definitions
type Pointer = {
  x: number;
  y: number;
  tX: number;
  tY: number;
};

type Uniforms = {
  [key: string]: WebGLUniformLocation;
};

interface WebGLContext extends WebGLRenderingContext {
  getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation;
  getProgramParameter(program: WebGLProgram, pname: number): number;
  getActiveUniform(program: WebGLProgram, index: number): WebGLActiveInfo;
}

const vertexShaderSource = `
    precision mediump float;
    varying vec2 vUv;
    attribute vec2 a_position;
    void main() {
        vUv = .5 * (a_position + 1.);
        gl_Position = vec4(a_position, 0.0, 1.0);
    }
`;

const fragmentShaderSource = `
    precision mediump float;
    varying vec2 vUv;
    uniform float u_time;
    uniform float u_ratio;
    uniform vec2 u_pointer_position;
    uniform float u_scroll_progress;
    vec2 rotate(vec2 uv, float th) {
        return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
    }
    float neuro_shape(vec2 uv, float t, float p) {
        vec2 sine_acc = vec2(0.);
        vec2 res = vec2(0.);
        float scale = 8.;
        for (int j = 0; j < 15; j++) {
            uv = rotate(uv, 1.);
            sine_acc = rotate(sine_acc, 1.);
            vec2 layer = uv * scale + float(j) + sine_acc - t;
            sine_acc += sin(layer);
            res += (.5 + .5 * cos(layer)) / scale;
            scale *= (1.2 - .07 * p);
        }
        return res.x + res.y;
    }
void main() {
    vec2 uv = .5 * vUv;
    uv.x *= u_ratio;
    vec2 pointer = vUv - u_pointer_position;
    pointer.x *= u_ratio;
    float p = clamp(length(pointer), 0., 1.);
    p = .5 * pow(1. - p, 2.);
    float t = .001 * u_time;
    vec3 color = vec3(0.);
    float noise = neuro_shape(uv, t, p);
    noise = 1.2 * pow(noise, 3.);
    noise += pow(noise, 10.);
    noise = max(.0, noise - .5);
    noise *= (1. - length(vUv - .5));
    // Use #f52239 as the base color
    color = vec3(0.9608, 0.1333, 0.2235);
    color = color * noise;
    gl_FragColor = vec4(color, noise);
}

`;

const NeuralBackground: React.FC<PropsWithChildren> = ({ children }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const glRef = useRef<WebGLContext | null>(null);
  const uniformsRef = useRef<Uniforms | null>(null);
  const pointerRef = useRef<Pointer>({ x: 0, y: 0, tX: 0, tY: 0 });
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
    const canvas = canvasRef.current;
    
    if (!canvas) return;
    
    const initShader = () => {
      const ctx = (canvas.getContext('webgl') || 
                 canvas.getContext('experimental-webgl')) as WebGLContext | null;
      
      if (!ctx) {
        console.error('WebGL is not supported by your browser.');
        return null;
      }
      
      const gl = ctx;
      
      function createShader(gl: WebGLContext, sourceCode: string, type: number): WebGLShader | null {
        const shader = gl.createShader(type);
        if (!shader) return null;
        
        gl.shaderSource(shader, sourceCode);
        gl.compileShader(shader);
        
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
          console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader));
          gl.deleteShader(shader);
          return null;
        }
        return shader;
      }
      
      const vertexShader = createShader(gl, vertexShaderSource, gl.VERTEX_SHADER);
      const fragmentShader = createShader(gl, fragmentShaderSource, gl.FRAGMENT_SHADER);
      
      if (!vertexShader || !fragmentShader) return null;
      
      const program = gl.createProgram();
      if (!program) return null;
      
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(program));
        return null;
      }
      
      const uniforms: Uniforms = {};
      const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
      for (let i = 0; i < uniformCount; i++) {
        const uniformName = gl.getActiveUniform(program, i)?.name;
        if (uniformName) {
          const location = gl.getUniformLocation(program, uniformName);
          if (location) {
            uniforms[uniformName] = location;
          }
        }
      }
      
      const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
      const vertexBuffer = gl.createBuffer();
      if (!vertexBuffer) return null;
      
      gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
      gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
      
      gl.useProgram(program);
      
      const positionLocation = gl.getAttribLocation(program, 'a_position');
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      uniformsRef.current = uniforms;
      return gl;
    };

    const render = () => {
      const gl = glRef.current;
      const uniforms = uniformsRef.current;
      const pointer = pointerRef.current;
      
      if (!gl || !uniforms) return;
      
      const currentTime = performance.now();
      
      pointer.x += (pointer.tX - pointer.x) * 0.5;
      pointer.y += (pointer.tY - pointer.y) * 0.5;
      
      if (uniforms.u_time) gl.uniform1f(uniforms.u_time, currentTime);
      if (uniforms.u_pointer_position) {
        gl.uniform2f(
          uniforms.u_pointer_position,
          pointer.x / window.innerWidth,
          1 - pointer.y / window.innerHeight
        );
      }
      if (uniforms.u_scroll_progress) {
        gl.uniform1f(
          uniforms.u_scroll_progress,
          window.pageYOffset / (2 * window.innerHeight)
        );
      }
      
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameRef.current = requestAnimationFrame(render);
    };

    const resizeCanvas = () => {
      if (!canvas || !glRef.current || !uniformsRef.current) return;
      
      canvas.width = window.innerWidth * devicePixelRatio;
      canvas.height = window.innerHeight * devicePixelRatio;
      
      const gl = glRef.current;
      const uniforms = uniformsRef.current;
      
      if (uniforms.u_ratio) {
        gl.uniform1f(uniforms.u_ratio, canvas.width / canvas.height);
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const updateMousePosition = (eX: number, eY: number) => {
      pointerRef.current.tX = eX;
      pointerRef.current.tY = eY;
    };

    // Initialize
    const gl = initShader();
    if (gl) {
      glRef.current = gl;
      resizeCanvas();
      
      // Event listeners
      window.addEventListener('resize', resizeCanvas);
      window.addEventListener('pointermove', (e) => updateMousePosition(e.clientX, e.clientY));
      window.addEventListener('touchmove', (e) => {
        updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
      });
      window.addEventListener('click', (e) => updateMousePosition(e.clientX, e.clientY));

      // Start render loop
      render();
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('pointermove', (e) => updateMousePosition(e.clientX, e.clientY));
      window.removeEventListener('touchmove', (e) => updateMousePosition(e.targetTouches[0].clientX, e.targetTouches[0].clientY));
      window.removeEventListener('click', (e) => updateMousePosition(e.clientX, e.clientY));
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className=" inset-0 bg-[#151912]">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full pointer-events-none opacity-95"
      />
      <div className="absolute w-screen h-screen">
        {children}
      </div>
    </div>
  );
};

export default NeuralBackground;