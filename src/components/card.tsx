"use client"

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";



export const Card = () => {

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
    
    <motion.div className="card my-52"
                ref={ref}
                initial={{ opacity: 0, y: 50 }} 
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}>
        <Image
                                    src="/trial.png"
                                    alt="portada mbo motorsport"
                                    width={600}
                                    height={150}
                                    priority={true}
                                    className="shadow-2xl shadow-gray-500/50 rounded-lg transition-all duration-500 
                                    hover:shadow-gray-700/50 hover:scale-105 hover:opacity-90"
                                    />
        <div className="card__content opacity-80">
          <p className="card__title">TRIAL</p>
          <p className="card__description">Disfruto de mi pasión y la comparto por este canal.🛵💨
                Comunicador y loco del motor, en mi canal te mostraré mis experiencias, aprendizajes, proyectos, viajes, curiosidades... Todo sobre las dos ruedas contado al detalle y sin filtros.🔥
                ¿Me acompañas en esta aventura? 🌍🏍️
                - Montesa 4RT
                -Aprilia RS 125🐝
                -Kawasaki ZX6R</p>
        </div>
    </motion.div>

    <motion.div className="card my-52"
                ref={ref}
                initial={{ opacity: 0, y: 50 }} 
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}>
        <Image
                                    src="/trial.png"
                                    alt="portada mbo motorsport"
                                    width={600}
                                    height={150}
                                    priority={true}
                                    className="shadow-2xl shadow-gray-500/50 rounded-lg transition-all duration-500 
                                    hover:shadow-gray-700/50 hover:scale-105 hover:opacity-90"
                                    />
        <div className="card__content opacity-80">
          <p className="card__title">Bienvenidos</p>
          <p className="card__description">Disfruto de mi pasión y la comparto por este canal.🛵💨
                Comunicador y loco del motor, en mi canal te mostraré mis experiencias, aprendizajes, proyectos, viajes, curiosidades... Todo sobre las dos ruedas contado al detalle y sin filtros.🔥
                ¿Me acompañas en esta aventura? 🌍🏍️
                - Montesa 4RT
                -Aprilia RS 125🐝
                -Kawasaki ZX6R</p>
        </div>
    </motion.div>

    {/*<motion.div className="card my-52"
                ref={ref}
                initial={{ opacity: 0, y: 50 }} 
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}>
        <Image
                                    src="/racing-photo-particles.jpeg"
                                    alt="portada mbo motorsport"
                                    width={400}
                                    height={100}
                                    priority={true}
                                    className="shadow-2xl shadow-gray-500/50 rounded-lg transition-all duration-500 
                                    hover:shadow-gray-700/50 hover:scale-105 hover:opacity-90"
                                    />
        <div className="card__content opacity-80">
          <p className="card__title">Bienvenidos</p>
          <p className="card__description">Disfruto de mi pasión y la comparto por este canal.🛵💨
                Comunicador y loco del motor, en mi canal te mostraré mis experiencias, aprendizajes, proyectos, viajes, curiosidades... Todo sobre las dos ruedas contado al detalle y sin filtros.🔥
                ¿Me acompañas en esta aventura? 🌍🏍️
                - Montesa 4RT
                -Aprilia RS 125🐝
                -Kawasaki ZX6R</p>
        </div>
    </motion.div>*/}
    
    </>
    
  )
}
