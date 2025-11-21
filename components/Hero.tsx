"use client";

import { MapPin, Calculator, Package } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  // Estilos unificados para las tarjetas
  const cardStyle = "bg-white border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md hover:border-[#8E1979] transition-all group flex flex-col items-center justify-center gap-2 text-center h-full cursor-pointer";
  const iconContainerStyle = "bg-purple-50 p-3 rounded-full group-hover:bg-[#8E1979] transition-colors duration-300";
  const iconStyle = "text-[#46075E] group-hover:text-white transition-colors duration-300";
  const textStyle = "font-bold text-[#46075E] text-xs md:text-sm group-hover:text-[#8E1979] transition-colors";

  return (
    // AJUSTE 1: Reduje el padding vertical (pt-28 / pb-16) para que no sea tan alto
    <section className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-white">
      
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-50/30 to-transparent -z-10" />

      {/* AJUSTE 2: max-w-[1200px] para compactar el ancho */}
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        
        {/* --- COLUMNA TEXTO Y CARDS --- */}
        {/* Orden: Abajo en móvil, Izquierda en Desktop */}
        <div className="z-10 flex flex-col justify-center order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* AJUSTE 3: Texto más pequeño (text-6xl máx en vez de 7xl) y menos margen inferior (mb-4) */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-[#46075E] leading-[1.1] mb-4 text-center lg:text-left">
              ENVÍOS ECONÓMICOS <br/>
              <span className="text-[#8E1979]">A TODO MÉXICO</span>
            </h1>
            
            <p className="text-base md:text-lg text-gray-600 font-medium mb-8 max-w-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
              ¡Ahorra tiempo y dinero con nuestras guías prepagadas! La solución logística inteligente para tu negocio.
            </p>
          </motion.div>

          {/* GRID DE TARJETAS DE ACCIÓN */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-lg mx-auto lg:mx-0">
            
            {/* Card 1: Rastrea */}
            <motion.div whileHover={{ y: -3 }} className={cardStyle}>
                <div className={iconContainerStyle}>
                    <MapPin size={24} className={iconStyle} strokeWidth={2} />
                </div>
                <span className={textStyle}>Rastrea<br/>tu envío</span>
            </motion.div>

            {/* Card 2: Cotiza */}
            <motion.div whileHover={{ y: -3 }} className={cardStyle}>
                <div className={iconContainerStyle}>
                    <Calculator size={24} className={iconStyle} strokeWidth={2} />
                </div>
                <span className={textStyle}>Cotiza<br/>ahora</span>
            </motion.div>

            {/* Card 3: Paqueterías */}
            <motion.div whileHover={{ y: -3 }} className={cardStyle}>
                <div className={iconContainerStyle}>
                    <Package size={24} className={iconStyle} strokeWidth={2} />
                </div>
                <span className={textStyle}>Nuestras<br/>Paqueterías</span>
            </motion.div>

          </div>
        </div>

        {/* --- COLUMNA ILUSTRACIÓN SVG --- */}
        {/* Orden: Arriba en móvil, Derecha en Desktop */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            // AJUSTE 4: Altura máxima reducida (md:h-[450px]) para que no ocupe toda la pantalla vertical
            className="relative h-[250px] md:h-[450px] w-full flex items-center justify-center lg:justify-end order-1 lg:order-2"
        >
            <Image 
                src="/airplane.svg"
                alt="Ilustración Avión Logística" 
                width={500} // Reduje un poco el ancho base
                height={500}
                className="w-full h-full object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                priority
            />
        </motion.div>

      </div>
    </section>
  );
}