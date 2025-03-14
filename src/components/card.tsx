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
            width={700}
            height={150}
            priority={true}
            className="shadow-2xl shadow-gray-500/50 rounded-lg transition-all duration-500 
            hover:shadow-gray-700/50 hover:scale-105 hover:opacity-90"
            />

        <div className="card__content opacity-80">
          <p className="card__title">TRIAL</p>
          <p className="card__description"></p>
        </div>
    </motion.div>

    <motion.div className="card my-52"
                ref={ref}
                initial={{ opacity: 0, y: 50 }} 
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: "easeOut" }}>
        <Image
                                    src="/racing-photo-particles.jpeg"
                                    alt="portada mbo motorsport"
                                    width={620}
                                    height={150}
                                    priority={true}
                                    className="shadow-2xl shadow-gray-500/50 rounded-lg transition-all duration-500 
                                    hover:shadow-gray-700/50 hover:scale-105 hover:opacity-90"
                                    />
        <div className="card__content opacity-80">
          <p className="card__title">EVENTOS</p>
          <p className="card__description"></p>
        </div>
    </motion.div>

  
    
    </>
    
  )
}
