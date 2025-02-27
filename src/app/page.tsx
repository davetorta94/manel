"use client"


import Image from "next/image";
import Link from "next/link";
import {Cellphone} from "../components/cellphone";
import { useState } from "react";
import { categories } from "@/libs/data";
import { Card } from "@/components/card";
import { montserrat } from "@/fonts/fonts";
import { Videos } from "@/components/videos";




export default function Home() {

  const [moused, setMoused] = useState(false);

  


    return (
        <>
            

            <section className="flex justify-center">
                  
                  <div className="relative flex justify-center max-w-full h-auto py-100 animate-fade-up animate-duration-[2000ms] animate-delay-1000">
                    <div className="relative group">
                          {/* Imagen */}
                          <Image
                            src="/header-1.jpeg"
                            alt="portada mbo motorsport"
                            width={1000}
                            height={400}
                            priority={true}
                            className="shadow-2xl shadow-gray-500/50 rounded-lg transition-all duration-500 
                                       hover:shadow-gray-700/50 hover:scale-105 hover:opacity-50"
                          />
        
                         {/* Texto que aparece en hover */}
                         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white 
                                         text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg">
                           MBO MOTORSPORT
                         </div>

                         {/*<div className="absolute inset-0 flex items-center justify-center text-white 
                                         text-2xl font-bold rounded-lg top-50 opacity-0 hover:opacity-100 transition-opacity duration-500">
                            <Image
                                src="/mbo-motorsport.png"
                                alt="logo para el header"
                                width={500}
                                height={200} />
                         </div>*/}

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
                {/*<Cellphone/>*/}
                <Link href={`/template?videoId=${categories[0].example}&link=${encodeURIComponent(categories[0].link)}`}>
                  <Cellphone name={ categories[0].name }/>
                </Link>
                <Link href={`/template?videoId=${categories[1].example}&link=${encodeURIComponent(categories[1].link)}`}>
                  <Cellphone name={ categories[1].name}/>
                </Link>
              </div>
            </section>
        </>
    )
}

//export default function Home() {
//  return (
//    <>
//    <div className="flex justify-center">
//      
//        <Button />
//      
//    </div>
//    </>
//  )
//}



