"use client";

import { motion } from "framer-motion";
import { ArrowRight, Package, Box } from "lucide-react";
import Link from "next/link";

export default function StartToday() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* --- BANNER --- */}
        <div className="relative bg-gradient-to-r from-[#8E1979] to-[#46075E] rounded-[3rem] shadow-2xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between overflow-visible">
            
            {/* Fondo Decorativo (Patrón) */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)', backgroundSize: '24px 24px' }}>
            </div>

            {/* --- LADO IZQUIERDO: CAJAS FLOTANTES (Vectores) --- */}
            <div className="relative w-full md:w-1/3 h-[200px] md:h-auto flex justify-center md:justify-start mb-8 md:mb-0">
                
                {/* Caja 1 (Base) */}
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-4 md:left-0 bg-white/10 backdrop-blur-sm border border-white/30 p-6 rounded-2xl shadow-xl transform -rotate-6 z-10"
                >
                    <Box size={60} className="text-white opacity-80" strokeWidth={1} />
                </motion.div>

                {/* Caja 2 (Medio) */}
                <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-12 left-16 md:left-12 bg-white/20 backdrop-blur-md border border-white/40 p-8 rounded-3xl shadow-2xl z-20"
                >
                    <Package size={80} className="text-white" strokeWidth={1.5} />
                </motion.div>

                {/* Caja 3 (Top - Sale del banner) */}
                <motion.div 
                    animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-28 left-8 md:left-4 bg-[#8E1979] p-5 rounded-2xl shadow-lg border border-white/20 z-30 transform rotate-12"
                >
                    <Package size={40} className="text-white" />
                </motion.div>

                {/* Brillo de fondo detrás de las cajas */}
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[60px] pointer-events-none"></div>
            </div>

            {/* --- CENTRO: TEXTO --- */}
            <div className="relative z-10 text-center md:text-left w-full md:w-1/2 pl-0 md:pl-10">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-md">
                    Comienza hoy
                </h2>
                <p className="text-purple-100 text-lg md:text-xl font-medium">
                    Envía a cualquier lugar de México con la mejor tecnología.
                </p>
            </div>

            {/* --- DERECHA: BOTÓN ACCIÓN --- */}
            <div className="relative z-10 mt-8 md:mt-0">
                <Link 
                    href="#" 
                    className="group w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                    <ArrowRight size={32} className="text-[#46075E] group-hover:text-[#8E1979] transition-colors" strokeWidth={2.5} />
                </Link>
            </div>

        </div>

      </div>
    </section>
  );
}