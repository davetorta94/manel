import Link from "next/link"
import Image from "next/image"
import { MiniYoutbeButton } from "./mini-youtube-button"
import { Video } from "@/libs/definitions";

type VideosProps = {
  videos: Video[];
};

  export const Videos = ({ videos }: VideosProps) => {
    
  return (
    <>
      {
        videos.length === 0 ? (
          <section className="mt-12 mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">No hay videos disponibles</h3>
          </section>
        ) : (
          <section className="mt-12 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Últimos Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {videos.map((video) => (
              <div key={video.id} className="bg-gray-800 p-4 pb-16 shadow-md rounded-lg relative">
                <div className="rounded-md"></div>
                <h4 className="text-lg text-blue-300 font-bold mt-2">{video.name}</h4>

                
                  <Image src={video.thumb} width={400} height={250} alt="foto" className="rounded-xl w-full h-full object-cover hover:opacity-80 transition-transform"/>
                    <Link href={video.url} target="_blank">
                      <MiniYoutbeButton/>
                    </Link>
                

              </div>
            ))}
          </div>
        </section>
      )}
        
    </>
  )
}


