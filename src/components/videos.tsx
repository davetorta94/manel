import { videos } from "@/libs/data"
import Link from "next/link"
import Image from "next/image"

export const Videos = () => {
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
              <div key={video.id} className="bg-white p-4 shadow-md rounded-lg">
                <div className="rounded-md"></div>
                <h4 className="text-lg font-bold mt-2">{video.nombre}</h4>
                <Link href={video.url} target="_blank">
                  <Image src={video.thumb} width={400} height={100} alt="foto" className="rounded-xl hover:opacity-80 hover:scale-105"/>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
        
    </>
  )
}
