"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// AGREGADO: Importamos 'Percent' y 'Container' (o usamos Package)
import { ChevronLeft, ChevronRight, Zap, CheckCircle2, ArrowRight, Truck, Package, Percent, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  // --- SLIDE 1: SHOPIFY (Iconos originales + Logo) ---
  {
    id: "shopify",
    badge: "Nueva Funcionalidad",
    title: (
      <>
        CONECTA TU <br />TIENDA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e898d4] to-white">SHOPIFY</span>
      </>
    ),
    description: "Gestiona guías y envíos directamente desde tu panel de ventas sin procesos manuales.",
    bottomContent: (
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5 w-fit">
            <CheckCircle2 className="text-[#8E1979]" size={16} />
            <span className="text-xs md:text-sm font-medium">Sincronización automática</span>
        </div>
        <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5 w-fit">
            <CheckCircle2 className="text-[#8E1979]" size={16} />
            <span className="text-xs md:text-sm font-medium">Generación de guías en 1 clic</span>
        </div>
      </div>
    ),
    imageComponent: (
      <div className="relative bg-white rounded-2xl shadow-xl p-6 transform hover:scale-[1.02] transition-transform duration-500 border border-white/50 max-w-[280px] mx-auto lg:mx-0">
        <div className="absolute -top-3 -right-3 bg-[#96bf48] text-white p-1.5 rounded-lg shadow-lg animate-bounce">
          <Zap fill="currentColor" size={18} />
        </div>
        <div className="flex flex-col items-center gap-3">
          <Image src="/shopify.svg" alt="Integración Shopify" width={160} height={50} className="object-contain drop-shadow-sm" />
          <div className="w-full h-px bg-gray-100"></div>
          <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full border border-green-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-bold text-green-700 uppercase tracking-wider">Conectado</span>
          </div>
        </div>
      </div>
    ),
  },

  // --- SLIDE 2: DESCUENTO 40% (AHORA CON ICONOS ANIMADOS) ---
  {
    id: "discount",
    badge: "Oferta Limitada",
    title: (
      <>
        <span className="text-[#e898d4] text-4xl md:text-5xl lg:text-6xl font-black">40% OFF</span> <br />
        EN SERVICIOS DE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e898d4] to-white">CARGA</span>
      </>
    ),
    description: "Aprovecha nuestros precios especiales en envíos nacionales y optimiza tus costos.",
    bottomContent: (
      <div className="mt-4">
        <Link 
            href="#" 
            className="inline-flex items-center gap-2 bg-[#8E1979] text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-xl hover:bg-[#7A1568] transition-all transform hover:-translate-y-1"
        >
            Más información
            <ArrowRight size={16} />
        </Link>
      </div>
    ),
    // NUEVA COMPOSICIÓN DE ICONOS (Reemplazando la imagen)
    imageComponent: (
      <div className="relative flex justify-center items-center h-full w-full min-h-[220px]">
        
        {/* Luz de fondo */}
        <div className="absolute bg-[#8E1979]/40 w-56 h-56 rounded-full blur-3xl" />
        
        {/* ICONO CENTRAL: CAJA DE CARGA (Glassmorphism) */}
        <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl"
        >
            <Package size={70} className="text-white" strokeWidth={1.5} />
            {/* Brillo pequeño */}
            <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-4 right-4 text-yellow-300"
            >
                <Sparkles size={20} fill="currentColor"/>
            </motion.div>
        </motion.div>

        {/* SATÉLITE 1: ETIQUETA DE DESCUENTO (%) */}
        <motion.div 
            animate={{ x: [0, 10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-4 md:right-12 bg-[#8E1979] text-white p-4 rounded-full shadow-lg border border-white/20 z-20"
        >
            <Percent size={28} />
        </motion.div>

        {/* SATÉLITE 2: CAMIÓN */}
        <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-0 left-4 md:left-12 bg-white text-[#46075E] p-3 rounded-2xl shadow-lg z-20 transform -rotate-6"
        >
            <Truck size={24} />
        </motion.div>

      </div>
    ),
  },
];

export default function PromoSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* --- CONTENEDOR DEL BANNER --- */}
        <div className="relative bg-gradient-to-br from-[#2A0342] via-[#46075E] to-[#2A0342] rounded-3xl overflow-hidden shadow-2xl min-h-[360px] flex items-center border border-white/10">
          
          {/* EFECTOS DE FONDO */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
             <div className="absolute top-[-20%] left-[-10%] w-80 h-80 bg-[#8E1979] rounded-full blur-[100px] opacity-40 mix-blend-screen"></div>
             <div className="absolute bottom-[-20%] right-[-10%] w-80 h-80 bg-blue-600 rounded-full blur-[100px] opacity-20 mix-blend-screen"></div>
             <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
          </div>

          {/* Botones */}
          <button onClick={prevSlide} className="absolute left-4 z-20 text-white/30 hover:text-white transition-colors hidden lg:block p-2 bg-black/10 hover:bg-black/30 rounded-full">
            <ChevronLeft size={24} strokeWidth={2} />
          </button>
          <button onClick={nextSlide} className="absolute right-4 z-20 text-white/30 hover:text-white transition-colors hidden lg:block p-2 bg-black/10 hover:bg-black/30 rounded-full">
            <ChevronRight size={24} strokeWidth={2} />
          </button>

          {/* --- AREA DE CONTENIDO --- */}
          <div className="w-full px-6 md:px-12 py-8 relative z-10 h-full flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 md:gap-12 w-full"
              >
                
                {/* COLUMNA IMAGEN (Izquierda en Desktop) */}
                <div className={`flex justify-center lg:justify-${slides[currentSlide].id === 'shopify' ? 'end' : 'center'} items-center order-2 lg:order-1 h-[220px]`}>
                  {slides[currentSlide].imageComponent}
                </div>

                {/* COLUMNA TEXTO (Derecha en Desktop) */}
                <div className="text-center lg:text-left text-white order-1 lg:order-2 flex flex-col justify-center">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest shadow-sm">
                        <span className="w-1.5 h-1.5 bg-[#8E1979] rounded-full"></span>
                        {slides[currentSlide].badge}
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter mb-3 leading-none">
                        {slides[currentSlide].title}
                    </h2>
                    
                    <p className="text-sm md:text-base text-purple-100 mb-2 font-medium leading-relaxed max-w-md mx-auto lg:mx-0 min-h-[3rem]">
                        {slides[currentSlide].description}
                    </p>

                    <div className="flex justify-center lg:justify-start">
                        {slides[currentSlide].bottomContent}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- CTA INFERIOR --- */}
        <div className="mt-10 flex flex-col items-center text-center">
          <p className="text-gray-500 text-base md:text-lg max-w-xl mb-6 font-medium">
            Genera tus guías con la confianza de que llegarán seguras a su destino.
          </p>
          
          <Link 
              href="#" 
              className="group flex items-center gap-2 bg-[#46075E] text-white px-8 py-3 rounded-full text-base font-bold shadow-md hover:shadow-xl hover:bg-[#350546] transition-all transform hover:-translate-y-1"
          >
              Cotiza tu Envío
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}