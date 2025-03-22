"use client";

import Image from "next/image";
import { motion } from "motion/react"; 
import { cards } from "@/libs/data";



export const Card = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 my-20">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className="relative overflow-hidden rounded-xl shadow-lg group hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: card.id * 0.2 }}
        >
          <Image
            src={card.image}
            alt={card.alt}
            width={700}
            height={150}
            className="rounded-xl object-cover w-full h-full group-hover:opacity-80 transition-opacity duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {card.title}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

