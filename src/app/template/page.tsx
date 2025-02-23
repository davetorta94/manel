"use client"


import VideoPlayer from "./videoplayer";
import { YoutubeButton } from "./youtubebutton";
import { useSearchParams } from "next/navigation";


export default function TemplatePage() {

    const searchParams = useSearchParams();
    const videoId = searchParams.get("videoId") || "CMa1I6dn_UA";
    const link = searchParams.get("link") || "https://www.youtube.com/@MBO_Motorsport/videos";

    return (
        <>

        {/*<div className="flex flex-col w-100 h-100">*/}
          

<div className="flex flex-col">

            <div className="text-2xl font-bold justify-center pt-28 mx-auto text-center ">

                  Bienvenidos a MBO Motorsport

            </div>

             <div className="justify-center pt-28 mx-auto aspect-video">


                  <VideoPlayer videoId={videoId} />

            </div>

            <div className="justify-center pt-28 mx-auto">

                    <YoutubeButton href={link} />
                  

            </div>

            
</div>

        {/*</div>*/}
            

        </>
    )
}