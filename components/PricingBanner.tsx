"use client";

import { motion } from "framer-motion";
import { ArrowRight, Package, Truck, MapPin, Tag, Sparkles } from "lucide-react";
import Link from "next/link";

export default function PricingBanner() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* --- BANNER PRINCIPAL --- */}
        <div className="relative bg-gradient-to-r from-[#46075E] to-[#8E1979] rounded-[2.5rem] shadow-2xl overflow-hidden min-h-[400px] flex flex-col md:flex-row items-center">
            
            {/* Fondo decorativo (Patrón de puntos) */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
            </div>

            {/* --- COLUMNA IZQUIERDA: ICONOS ANIMADOS --- */}
            <div className="w-full md:w-1/2 h-[350px] relative flex items-center justify-center">
                
                {/* Círculo de luz de fondo para resaltar los iconos */}
                <div className="absolute w-64 h-64 bg-white/20 rounded-full blur-[80px]"></div>

                {/* ICONO CENTRAL: PAQUETE (Flota suavemente) */}
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

                {/* ICONO SATÉLITE 1: CAMIÓN (Flota a destiempo) */}
                <motion.div 
                    animate={{ y: [0, 10, 0], x: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute top-10 right-10 md:right-20 bg-[#8E1979] p-4 rounded-2xl shadow-xl border border-white/20 transform rotate-12"
                >
                    <Truck size={32} className="text-white" />
                </motion.div>

                {/* ICONO SATÉLITE 2: PIN DE MAPA (Flota y rota un poco) */}
                <motion.div 
                    animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-16 left-10 md:left-20 bg-white text-[#46075E] p-4 rounded-full shadow-xl border-4 border-[#fce7f6]"
                >
                    <MapPin size={32} fill="currentColor" />
                </motion.div>

                 {/* ICONO SATÉLITE 3: PRECIO (Pequeño detalle) */}
                 <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-16 md:left-24 bg-[#25D366] p-3 rounded-xl shadow-lg transform -rotate-6"
                >
                    <Tag size={20} className="text-white" fill="currentColor" />
                </motion.div>

            </div>

            {/* --- COLUMNA DERECHA: TEXTO --- */}
            <div className="w-full md:w-1/2 p-8 md:p-12 text-center md:text-left text-white relative z-10 md:pl-4">
                
                <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block bg-white/20 backdrop-blur-md border border-white/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                        Tarifas Nacionales
                    </span>
                    
                    <p className="text-xl font-medium opacity-90 mb-1">
                        Envía hoy tu paquete
                    </p>
                    
                    <h2 className="text-6xl md:text-7xl font-black tracking-tighter leading-none mb-4 drop-shadow-lg">
                        DESDE <span className="text-white">$80</span>
                    </h2>
                    
                    <p className="text-sm md:text-base text-purple-100 max-w-sm mx-auto md:mx-0 mb-8 font-medium leading-relaxed">
                        Aprovecha nuestras tarifas preferenciales en guías nacionales de hasta 1kg. Entrega segura y rápida.
                    </p>

                    {/* Botón */}
                    <Link 
                        href="#"
                        className="inline-flex items-center gap-2 bg-white text-[#46075E] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg transform hover:-translate-y-1"
                    >
                        Cotizar Ahora
                    </Link>
                </motion.div>

            </div>

        </div>

        {/* --- LINK INFERIOR --- */}
        <div className="text-center mt-8">
            <Link href="#" className="inline-flex items-center gap-1 text-[#8E1979] hover:text-[#46075E] font-bold text-sm md:text-base hover:underline decoration-2 underline-offset-4 transition-colors">
                No esperes más, consulta las paqueterías que tenemos para ti
                <ArrowRight size={16} />
            </Link>
        </div>

      </div>
    </section>
  );
}