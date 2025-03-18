import Image from "next/image";


export const CoverImage = () => {
  return (
   <>
        <div className="relative flex justify-center max-w-full h-auto py-100 animate-fade-up animate-duration-[2000ms] animate-delay-1000">
                            <div className="relative group">
                                  {/* Imagen */}
                                  <Image
                                    src="/header-1.jpeg"
                                    alt="portada mbo motorsport"
                                    width={2000}
                                    height={800}
                                    priority={true}
                                    className="shadow-2xl shadow-gray-500/50 rounded-lg transition-all duration-500 
                                    hover:shadow-gray-700/50 hover:scale-105 hover:opacity-50"
                                    />
                
                                 {/* Texto que aparece en hover */}
                                 <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white 
                                                 text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg">
                                   MBO MOTORSPORT
                                 </div>
        
                               </div>
                          </div>
                           
   </>
  )
}
