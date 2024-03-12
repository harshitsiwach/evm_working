import { cn } from "@/Utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/Components/ui/bento-grid";
import { Tweet } from "react-tweet";

import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

function page() {
  interface InstagramEmbedProps {
    url: string,
    clientAccessToken: string,
    maxWidth: number,
    hideCaption: boolean,
    containerTagName: string,
    protocol: string,
  }
  return (
    <div className="mt-[80px] ">
       <BentoGrid className="w-auto max-w-4xl mx-auto h-auto flex flex-row gap-10">
       <div>
       <Tweet  id="1763074266294337614" />
       </div>
       <iframe src="https://discord.com/widget?id=1088556262511349801&theme=dark" width="350" height="500" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
    </BentoGrid> 
    <BentoGrid className="w-[300px] max-w-4xl mx-auto h-auto">
       
   
       
    </BentoGrid>
       
    
    
   
    </div>
    
  )
}
const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
 

export default page