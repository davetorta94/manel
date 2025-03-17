"use client"


import Image from "next/image";
import {Cellphone} from "../components/cellphone";
import { Card } from "@/components/card";
import { montserrat } from "@/fonts/fonts";
import { Videos } from "@/components/videos";
import { MenuButton } from "@/components/menu-button";




export default function Home() {
  
    

    return (
        <>
              <div className="absolute z-10">
                <MenuButton  />
              </div>
             
                  <div className="col-span-3 row-span-3">
            <section className="flex justify-center">
                  
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
                   
            </section>

            {/* OJO */}

            <section className="flex flex-row text-5xl justify-center items-center pt-24">
                  <h2 className={`${montserrat.className}`}>CATEGORIAS</h2>
              </section>

            {/* Tarjeta con Texto */}

            <section className="flex flex-col justify-around md:flex-row">

                <Card />
               
            </section>

            {/* ULTIMOS VIDEOS */}

            <Videos />

            {/* Enlaces a Categorias*/}

            <section className="flex justify-center pt-100">
              <div className="flex justify-center w-full h-full py-100 animate-fade-up animate-duration-[2000ms] animate-delay-1000">            
                <Cellphone/>
                
              </div>
            </section>
            </div>

        
                      
        </>
    )
}





    