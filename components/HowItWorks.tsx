"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, UserPlus, Search, CreditCard, Truck, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"; 
import Link from "next/link";

// DATOS DE LOS PASOS (CORREGIDO: Tamaño de iconos reducido a 48)
const steps = [
  {
    id: 1,
    title: "Únete",
    description: "Crea tu cuenta gratis en segundos. Solo necesitas tu correo para acceder a nuestro panel de control.",
    buttonText: "Registrarme",
    // Cambio: size={48}
    icon: <UserPlus size={48} className="text-white" strokeWidth={1.5} />
  },
  {
    id: 2,
    title: "Cotiza",
    description: "Ingresa origen, destino y medidas. Nuestra plataforma comparará precios de las mejores paqueterías al instante.",
    buttonText: "Cotizar ahora",
    // Cambio: size={48}
    icon: <Search size={48} className="text-white" strokeWidth={1.5} />
  },
  {
    id: 3,
    title: "Elige y Paga",
    description: "Selecciona la opción que mejor se ajuste a tu presupuesto o tiempo de entrega y paga de forma segura.",
    buttonText: "Ver opciones",
    // Cambio: size={48}
    icon: <CreditCard size={48} className="text-white" strokeWidth={1.5} />
  },
  {
    id: 4,
    title: "Genera y Envía",
    description: "Imprime tu guía, pégala en el paquete y solicita la recolección o entrégalo en la sucursal más cercana.",
    buttonText: "Crear envío",
    // Cambio: size={48}
    icon: <Truck size={48} className="text-white" strokeWidth={1.5} />
  }
];

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length);
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    // CORREGIDO: Se eliminó 'overflow-hidden' de la sección para que el aura no se recorte
    <section className="py-20 bg-white relative">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* --- CABECERA --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-[#46075E] mb-6 tracking-tight uppercase">
            ¿Cómo Funciona?
          </h2>
          <p className="text-gray-500 text-lg font-medium">
            Sigue estos 4 pasos sencillos para comenzar a enviar.
          </p>
        </div>

        {/* --- CONTENEDOR PRINCIPAL --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LADO IZQUIERDO: VISUAL AURORA */}
          <div className="relative flex justify-center items-center h-[400px]">
            <AnimatePresence mode="wait">
                <motion.div 
                    key={currentStep}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 flex items-center justify-center"
                >
                    {/* --- EFECTO AURORA RÁPIDA --- */}
                    <motion.div 
                        className="absolute w-80 h-80 rounded-full opacity-70 blur-[50px]"
                        style={{
                            background: "conic-gradient(from 0deg, #ff00ff, #00ffff, #ffff00, #ff00ff)"
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    
                    <motion.div 
                        className="absolute w-72 h-72 rounded-full opacity-60 blur-[60px]"
                        style={{
                            background: "conic-gradient(from 180deg, #46075E, #8E1979, #46075E)"
                        }}
                        animate={{ rotate: -360, scale: [0.9, 1.1, 0.9] }}
                        transition={{ 
                            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
                        }}
                    />
                    
                    {/* CONTENEDOR DEL ICONO */}
                    <div className="relative w-56 h-56 bg-[#2A0342] rounded-[3rem] shadow-2xl flex items-center justify-center border-2 border-white/20 z-20 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                        
                        <motion.div 
                            animate={{ y: [0, -5, 0] }} 
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            {steps[currentStep].icon}
                        </motion.div>

                        <div className="absolute top-4 right-4 text-white/50">
                            <Sparkles size={24} />
                        </div>
                    </div>

                </motion.div>
            </AnimatePresence>
          </div>

          {/* LADO DERECHO: CONTENIDO Y BOTONES */}
          <div className="relative flex flex-col justify-center pl-0 md:pl-8">
            
            {/* BOTONES DE CONTROL */}
            <div className="flex items-center gap-4 mb-8 z-30">
                <button 
                    onClick={prevStep} 
                    className="w-14 h-14 rounded-full bg-white border-2 border-gray-100 text-[#46075E] shadow-lg flex items-center justify-center hover:bg-[#46075E] hover:text-white hover:border-[#46075E] hover:scale-110 transition-all duration-200 active:scale-95"
                    aria-label="Anterior"
                >
                    <ChevronLeft size={32} strokeWidth={2.5} />
                </button>
                <button 
                    onClick={nextStep} 
                    className="w-14 h-14 rounded-full bg-[#46075E] text-white shadow-lg flex items-center justify-center hover:bg-[#8E1979] hover:scale-110 transition-all duration-200 active:scale-95"
                    aria-label="Siguiente"
                >
                    <ChevronRight size={32} strokeWidth={2.5} />
                </button>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10 min-h-[200px]"
                >
                    <span className="text-[#8E1979] font-bold tracking-widest uppercase text-sm mb-2 block">
                        Paso 0{steps[currentStep].id}
                    </span>

                    <h3 className="text-4xl font-bold text-[#46075E] mb-4">
                        {steps[currentStep].title}
                    </h3>
                    
                    <p className="text-gray-600 text-lg leading-relaxed mb-8 font-medium">
                        {steps[currentStep].description}
                    </p>

                    <Link 
                        href="#"
                        className="inline-flex items-center gap-3 text-[#46075E] font-bold text-lg hover:text-[#8E1979] transition-colors group"
                    >
                        {steps[currentStep].buttonText}
                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                </motion.div>
            </AnimatePresence>

            {/* Indicadores de Progreso */}
            <div className="flex gap-2 mt-8">
                {steps.map((step, index) => (
                    <div 
                        key={step.id}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            index === currentStep ? "w-10 bg-[#8E1979]" : "w-2 bg-gray-300"
                        }`}
                    />
                ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}