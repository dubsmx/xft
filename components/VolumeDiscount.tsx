"use client";

import { motion } from "framer-motion";
import { MessageCircle, UserPlus, Package, Percent, Tags, Sparkles } from "lucide-react";
import Link from "next/link";

export default function VolumeDiscount() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* TITULO DE LA SECCIÓN */}
        <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-[#46075E] tracking-tight uppercase">
                ¿Necesitas Múltiples Guías?
            </h2>
        </div>

        {/* --- BANNER PRINCIPAL --- */}
        <div className="relative bg-gradient-to-r from-[#8E1979] to-[#b92b9c] rounded-[2.5rem] shadow-2xl overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 border-4 border-white ring-1 ring-gray-100">
            
            {/* Decoración de fondo (Círculos sutiles) */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-900/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            {/* --- LADO IZQUIERDO: ICONOS ANIMADOS (NUEVO) --- */}
            <div className="relative w-full md:w-1/2 flex justify-center items-center h-[280px]">
                
                {/* Luz de fondo */}
                <div className="absolute w-64 h-64 bg-white/20 rounded-full blur-[80px]"></div>

                {/* ICONO CENTRAL: PAQUETE DE GUÍAS (Glassmorphism) */}
                <motion.div 
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 bg-white/10 backdrop-blur-md border border-white/30 p-8 rounded-3xl shadow-2xl"
                >
                    <Package size={80} className="text-white drop-shadow-lg" strokeWidth={1.5} />
                    {/* Brillo decorativo */}
                    <motion.div 
                        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute -top-2 -right-2 text-yellow-300"
                    >
                        <Sparkles size={24} fill="currentColor" />
                    </motion.div>
                </motion.div>

                {/* ICONO SATÉLITE 1: DESCUENTO % (Flota y rota) */}
                <motion.div 
                    animate={{ y: [0, 10, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-10 right-10 md:right-20 bg-white text-[#8E1979] p-4 rounded-full shadow-xl border-4 border-[#fce7f6] transform rotate-12"
                >
                    <Percent size={32} fill="currentColor" />
                </motion.div>

                {/* ICONO SATÉLITE 2: ETIQUETAS MÚLTIPLES (Flota) */}
                <motion.div 
                    animate={{ y: [0, -10, 0], x: [0, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-16 left-10 md:left-20 bg-[#46075E] p-4 rounded-2xl shadow-xl border border-white/20"
                >
                    <Tags size={32} className="text-white" />
                </motion.div>

                 {/* ETIQUETA DE PRECIO FLOTANTE (Más pequeña, como detalle) */}
                 <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-16 md:left-24 bg-[#25D366] px-3 py-1 rounded-full shadow-lg transform -rotate-6 border-2 border-white/50"
                >
                    <span className="text-white font-bold text-sm">-15%</span>
                </motion.div>

            </div>

            {/* --- LADO DERECHO: TEXTO --- */}
            <div className="w-full md:w-1/2 text-center md:text-left text-white z-20 pl-0 md:pl-10">
                <h3 className="text-4xl md:text-6xl font-black mb-4 tracking-tight leading-none drop-shadow-md">
                    15% DE <br/>DESCUENTO
                </h3>
                <p className="text-lg md:text-xl font-medium text-purple-100 leading-relaxed max-w-md mx-auto md:mx-0">
                    Regístrate hoy y obtén un descuento especial en tu próxima compra mayor a <strong>2,000 guías</strong>.
                </p>
            </div>

        </div>

        {/* DISCLAIMER */}
        <p className="text-center text-xs text-gray-400 mt-6 mb-10">
            *Promoción válida hasta el 31 de Diciembre de 2025. Aplican términos y condiciones.
        </p>

        {/* --- BOTONES INFERIORES --- */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            
            {/* Botón 1: Más información */}
            <Link 
                href="#" 
                className="group flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:bg-[#20bd5a] transition-all transform hover:-translate-y-1 min-w-[240px] justify-center"
            >
                <MessageCircle size={24} />
                Más información
            </Link>

            {/* Botón 2: Registrarme */}
            <Link 
                href="#" 
                className="group flex items-center gap-3 bg-[#2A0342] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl hover:bg-black transition-all transform hover:-translate-y-1 min-w-[240px] justify-center"
            >
                <UserPlus size={24} />
                Registrarme
            </Link>

        </div>

      </div>
    </section>
  );
}