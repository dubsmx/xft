"use client";

import { motion } from "framer-motion";
import { PackageSearch, Newspaper, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function InfoCards() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-[1100px] mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12">
          
          {/* --- TARJETA 1: RASTREO --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mt-12"
          >
            {/* ICONO FLOTANTE SUPERIOR */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#8E1979] to-[#46075E] rounded-full flex items-center justify-center shadow-xl border-4 border-white z-20">
                <PackageSearch size={40} className="text-white" strokeWidth={1.5} />
            </div>

            {/* CUERPO DE LA TARJETA */}
            <div className="bg-[#F9F5FA] rounded-[2.5rem] pt-20 pb-10 px-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-50 h-full flex flex-col justify-between">
                
                <div>
                    <h3 className="text-2xl font-bold text-[#46075E] mb-4">
                        ¿Ya enviaste tu paquete?
                    </h3>
                    <p className="text-gray-500 font-medium leading-relaxed mb-8">
                        Dale seguimiento en tiempo real, cuantas veces quieras, desde cualquier dispositivo.
                    </p>
                </div>

                {/* BOTÓN */}
                <div className="flex justify-center">
                    <Link 
                        href="#" 
                        className="group inline-flex items-center gap-2 bg-[#8E1979] text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-[#46075E] transition-all transform hover:-translate-y-1"
                    >
                        Rastrea tu envío
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
          </motion.div>

          {/* --- TARJETA 2: BLOG --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mt-12"
          >
            {/* ICONO FLOTANTE SUPERIOR */}
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#46075E] to-[#2A0342] rounded-full flex items-center justify-center shadow-xl border-4 border-white z-20">
                <Newspaper size={40} className="text-white" strokeWidth={1.5} />
            </div>

            {/* CUERPO DE LA TARJETA */}
            <div className="bg-[#F9F5FA] rounded-[2.5rem] pt-20 pb-10 px-8 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-50 h-full flex flex-col justify-between">
                
                <div>
                    <h3 className="text-2xl font-bold text-[#46075E] mb-4">
                        Mantente informado
                    </h3>
                    <p className="text-gray-500 font-medium leading-relaxed mb-8">
                        Visita nuestro blog para más información, consejos de logística y noticias del sector.
                    </p>
                </div>

                {/* BOTÓN (Color secundario para variar o mismo magenta) */}
                {/* Usaré el mismo magenta para consistencia visual */}
                <div className="flex justify-center">
                    <Link 
                        href="#" 
                        className="group inline-flex items-center gap-2 bg-[#8E1979] text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-[#46075E] transition-all transform hover:-translate-y-1"
                    >
                        Ver blog
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}