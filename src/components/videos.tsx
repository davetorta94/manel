"use client"

import Link from "next/link"
import Image from "next/image"
import { MiniYoutbeButton } from "./mini-youtube-button"
import { Video } from "@/libs/definitions";
import { motion } from "motion/react"

type VideosProps = {
  videos: Video[];
};

  export const Videos = ({ videos }: VideosProps) => {

   
    
  return (
    <>
      {
        videos.length === 0 ? (
          <section className="mt-12 mb-16">
            <h3 className="text-2xl font-bold text-white mb-4">No hay videos disponibles</h3>
          </section>
        ) : (
          <section className="mt-12 mb-16 overflow-x-hidden">
          <h3 className="text-2xl font-bold text-white mb-4">Últimos Videos</h3>
          <motion.div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  {videos.map((video, index) => (
    <motion.div
      key={video.id}
      className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.6 }}
    >
      <Image
        src={video.thumb}
        width={400}
        height={250}
        alt={`Miniatura de ${video.name}`}
        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h4 className="text-lg font-bold text-white">{video.name}</h4>
      </div>
      <Link
        href={video.url}
        target="_blank"
        aria-label={`Ver video ${video.name}`}
        className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <MiniYoutbeButton />
      </Link>
    </motion.div>
  ))}
</motion.div>

        </section>
      )}
        
    </>
  )
}






/* Scroll side animation
export const Videos = ({ videos }: VideosProps) => {

    const ref = useRef(null);
    const isInView = useInView(ref)

   


   
    
  return (
    <>
      {
        videos.length === 0 ? (
          <section className="mt-12 mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">No hay videos disponibles</h3>
          </section>
        ) : (
          <section className="mt-12 mb-16 overflow-x-hidden">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Últimos Videos</h3>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 "
              >
            {videos.map((video) => (
              <motion.div key={video.id} className="bg-gray-800 p-4 pb-16 shadow-md rounded-lg relative"
              ref={ref}
              initial={{ x: -200 }}
              animate={ isInView ? { x: 200 } : {} }
              transition={ {ease: "easeIn", duration: 15, repeat: Infinity} }>
                <div className="rounded-md"></div>
                <h4 className="text-lg text-blue-300 font-bold mt-2">{video.name}</h4>

                  <Image src={video.thumb} width={400} height={250} alt="foto" className="rounded-xl w-full h-full object-cover hover:opacity-80 transition-transform"/>
                    <Link href={video.url} target="_blank" aria-label={`Ver video ${video.name}`}>
                      <MiniYoutbeButton/>
                    </Link>
                

              </motion.div>
            ))}
          </motion.div>
        </section>
      )}
        
    </>
  )
}
*/


