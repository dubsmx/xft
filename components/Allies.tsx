"use client";
import { motion } from "framer-motion";

export default function Allies() {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 text-center">
        <h3 className="text-xl font-medium text-gray-500 mb-10">
          Nuestros Aliados — Trabajamos con los mejores
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            {/* LOGO DHL (Simulado con texto - Reemplazar con <Image src="/dhl.svg" ... />) */}
            <motion.div 
                whileHover={{ scale: 1.1 }}
                className="text-4xl font-black italic text-[#D40511] tracking-tighter"
            >
                DHL
            </motion.div>

            {/* LOGO FEDEX (Simulado con texto) */}
            <motion.div 
                whileHover={{ scale: 1.1 }}
                className="text-4xl font-bold tracking-tight flex"
            >
                <span className="text-[#4D148C]">Fed</span><span className="text-[#FF6600]">Ex</span>
            </motion.div>

            {/* LOGO ESTAFETA (Simulado con texto) */}
            <motion.div 
                whileHover={{ scale: 1.1 }}
                className="text-4xl font-bold text-[#C60C30] tracking-wide uppercase"
            >
                estafeta
            </motion.div>
        </div>
      </div>
    </section>
  );
}