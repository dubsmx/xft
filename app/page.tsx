"use client";

import Navbar from "@/components/Navbar";
import TrackingWidget from "@/components/TrackingWidget";
import Services from "@/components/Services";
import Allies from "@/components/Allies";
import PlatformFeatures from "@/components/PlatformFeatures";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center px-4 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/40 z-10" /> 
            <img 
              src="https://i.imgur.com/hYpMoUR.jpeg" 
              alt="Flota de camiones" 
              className="w-full h-full object-cover"
            />
        </div>

        <div className="relative z-20 text-center max-w-5xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-4 leading-none shadow-sm"
          >
            LOGÍSTICA<br />SIN LÍMITES
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8 font-light"
          >
            Soluciones de transporte terrestre FTL y LTL con tecnología de rastreo en tiempo real.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full flex justify-center"
          >
             <TrackingWidget />
          </motion.div>
        </div>

        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
        >
            <span className="text-xs uppercase tracking-widest">Descubre más</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent"></div>
        </motion.div>
      </section>

      {/* 1. SECCIÓN DE SERVICIOS (Lo que hacemos) */}
      <Services />

      {/* 2. SECCIÓN DE ALIADOS (DHL, FedEx...) */}
      <Allies />

      {/* 3. SECCIÓN DE PLATAFORMA (Numerada 01-06) */}
      <PlatformFeatures />

      {/* 4. SECCIÓN DE CONTACTO (Botones) */}
      <ContactSection />

      {/* 5. FOOTER */}
      <Footer />

    </main>
  );
}