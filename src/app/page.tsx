import {Cellphone} from "../components/cellphone";
import { Card } from "@/components/card";
import { montserrat } from "@/fonts/fonts";
import { MenuButton } from "@/components/menu-button";
import { Videos } from "@/components/videos";
import { CoverImage } from "@/components/cover";
import { videos } from "@/libs/data";
import { SocialMedia } from "@/components/social-media";




export default function Home() {
  
    

    return (
        <>
        
              <div className="absolute z-10">

                <MenuButton  />

              </div>
             
                  <div className="col-span-3 row-span-3">
            <section className="flex justify-center">
                  
                  <CoverImage />

            </section>

            

            <section className="flex flex-row text-5xl justify-center items-center pt-24">
                  <h2 className={`${montserrat.className}`}>CATEGORIAS</h2>
              </section>

            {/* Tarjeta con Texto */}

            <section className="flex flex-col justify-around md:flex-row">

                <Card />
               
            </section>

            {/* ULTIMOS VIDEOS */}

                <Videos videos={ videos } />

                <section className="flex flex-col justify-around md:flex-row">
                    <SocialMedia />
                </section>

            {/* Enlaces a Categorias*/}

            <section className="flex justify-center pt-100">
                          
                <Cellphone/>
                
              
            </section>
            </div>

        
                      
        </>
    )
}





    