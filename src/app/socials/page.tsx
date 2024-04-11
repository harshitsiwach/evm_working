
import React from 'react'
import { Tweet } from 'react-tweet'

export default function page() {
  return (
    <div className=' w-screen h-auto mt-[80px] overflow-hidden gap-3 flex justify-center items-start'>
      <div className='mt-3'>
     <iframe className='mt-3' src="https://discord.com/widget?id=1088556262511349801&theme=dark" width="400" height="780" frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
     </div>

     <div className='flex flex-col items-center justify-start'>
     <div className='h-[260px] w-[540px] flex justify-start items-start'>
    <Tweet  id="1707418634849861856" />
    </div>
    <div>
    <iframe frameBorder="0" src="https://itch.io/embed/2570965?bg_color=222222&amp;fg_color=eeeeee&amp;link_color=be2424&amp;border_color=363636" width="552" height="167"><a href="https://evmwarfare.itch.io/evmwarfare">EVM Warfare by evmwarfare</a></iframe>

    </div>
    <div className='mt-5'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/IRSmYXty8z0?si=A9Y7V8qNBF9nGDPB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    
    </div>
    
    
     
    
    </div>
  )
}
