"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Menu, X, Phone, MapPin, 
  Box, Barcode, HelpCircle, Truck, Plane, ChevronRight, ChevronDown 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Datos de los servicios
const servicesList = [
  { title: "Integraciones", icon: Box, color: "bg-orange-100 text-orange-600", href: "#" },
  { title: "Guías prepagadas", icon: Barcode, color: "bg-gray-100 text-gray-600", href: "#" },
  { title: "¿Cómo funciona?", icon: HelpCircle, color: "bg-blue-100 text-blue-600", href: "#" },
  { title: "Fulfillment", icon: Box, color: "bg-orange-100 text-orange-600", href: "#" },
  { title: "Carga aérea y terrestre", icon: Truck, color: "bg-yellow-100 text-yellow-600", href: "#" },
  { title: "Envíos internacionales", icon: Plane, color: "bg-blue-100 text-blue-600", href: "#" },
];

// CONFIGURACIÓN DE MARCAS
const brands = [
  { 
    name: "DHL", 
    image: "/dhl.svg", 
    bg: "bg-[#FFCC00]", // Amarillo DHL
    whiteLogo: false     // Logo original (Rojo)
  },
  { 
    name: "FedEx", 
    image: "/fedex.svg", 
    bg: "bg-[#F2F2F2]", // CAMBIO: Gris muy claro para que resalte el logo Morado/Naranja
    whiteLogo: false     // CAMBIO: Logo original
  },
  { 
    name: "Estafeta", 
    image: "/estafeta.svg", 
    bg: "bg-[#C60C30]", // Rojo Estafeta
    whiteLogo: true      // Logo blanco
  },
  { 
    name: "Paquetexpress", 
    image: "/paqueteexpress.svg", 
    bg: "bg-[#003399]", // Azul Paquetexpress
    whiteLogo: true      // Logo blanco
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 shadow-sm font-sans" onMouseLeave={() => setIsServicesOpen(false)}>
      
      {/* --- BARRA SUPERIOR --- */}
      <div className="bg-[#46075E] text-white text-xs md:text-sm py-2.5 px-4 border-b border-white/10 relative z-50">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center">
          <div className="hidden md:flex gap-8 font-medium tracking-wide">
            <Link href="#" className="hover:text-gray-300 transition-colors">Inicio</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Blog</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Nosotros</Link>
            <Link href="#" className="hover:text-gray-300 transition-colors">Contáctanos</Link>
          </div>
          <div className="flex items-center gap-2 mx-auto md:mx-0 font-bold">
            <Phone size={16} className="text-white" fill="currentColor" />
            <a href="tel:+5526593589" className="hover:underline">55 2659 3589</a>
          </div>
          <div className="hidden md:flex items-center gap-4 font-medium">
            <div className="flex gap-2 items-center">
                <Link href="#" className="hover:text-gray-300 transition-colors">Regístrate</Link>
                <span className="opacity-30">|</span>
                <Link href="#" className="hover:text-gray-300 transition-colors">Iniciar sesión</Link>
            </div>
          </div>
        </div>
      </div>

      {/* --- BARRA INFERIOR --- */}
      <div className="bg-white py-4 px-4 shadow-sm relative z-50">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center relative">
          
          {/* Trigger Mega Menú */}
          <div 
            className="hidden md:flex items-center gap-3 cursor-pointer group"
            onClick={() => setIsServicesOpen(!isServicesOpen)}
          >
            <div className={`p-2 rounded-lg transition-colors ${isServicesOpen ? 'bg-gray-100' : 'bg-gray-50 group-hover:bg-gray-100'}`}>
                <Menu className="text-[#46075E]" size={24} />
            </div>
            <span className="font-bold text-lg text-[#46075E] group-hover:opacity-80 transition-opacity select-none flex items-center gap-1">
                Servicios
                <ChevronDown size={16} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
            </span>
          </div>

          {/* Botón Móvil */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#46075E] p-1">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
             <Link href="/" className="block">
                <Image src="/logo.svg" alt="XFT Logo" width={120} height={50} className="h-10 w-auto object-contain" priority />
             </Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="flex items-center gap-2 group">
                <MapPin className="text-[#46075E]" size={20} strokeWidth={2.5} />
                <span className="font-bold text-[#46075E] group-hover:opacity-80 transition-opacity">Rastrea tu Envío</span>
            </Link>
            <Link href="#" className="bg-[#46075E] hover:bg-[#350546] text-white px-8 py-3 rounded-full font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95">
                Cotiza tu Envío
            </Link>
          </div>
        </div>
      </div>

      {/* --- MEGA MENÚ --- */}
      <AnimatePresence>
        {isServicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="hidden md:block absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl z-40 py-10 px-4"
          >
            <div className="max-w-[1400px] mx-auto">
              
              {/* Cards Servicios */}
              <div className="grid grid-cols-3 gap-6 mb-12">
                {servicesList.map((service, index) => (
                  <Link key={index} href={service.href} className="bg-white border border-gray-100 rounded-2xl p-4 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${service.color}`}>
                        <service.icon size={24} />
                      </div>
                      <span className="font-bold text-[#46075E] text-lg">{service.title}</span>
                    </div>
                    <div className="bg-purple-50 p-1.5 rounded-full text-[#46075E] group-hover:bg-[#46075E] group-hover:text-white transition-colors">
                      <ChevronRight size={20} />
                    </div>
                  </Link>
                ))}
              </div>

              {/* PAQUETERÍAS */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-8">Paqueterías Nacionales</h3>
                <div className="flex justify-center items-center gap-10 flex-wrap">
                  {brands.map((brand, idx) => (
                    <div 
                      key={idx}
                      className={`w-24 h-24 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform cursor-pointer ${brand.bg}`}
                      title={brand.name}
                    >
                      <div className="w-16 h-16 relative flex items-center justify-center">
                          <Image 
                            src={brand.image} 
                            alt={`Logo ${brand.name}`} 
                            fill
                            className={`object-contain p-1 ${brand.whiteLogo ? 'brightness-0 invert' : ''}`}
                          />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MENÚ MÓVIL --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white absolute w-full overflow-y-auto border-t border-gray-100 top-full left-0 z-40"
          >
            <div className="flex flex-col p-6 gap-6 text-center pb-32">
              <Link href="#" onClick={() => setIsOpen(false)} className="text-xl font-bold text-[#46075E]">Inicio</Link>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="font-bold text-gray-400 uppercase text-xs mb-4">Servicios</p>
                {servicesList.map((s, i) => (
                   <Link key={i} href="#" className="block py-2 text-[#46075E] font-medium">{s.title}</Link>
                ))}
              </div>
              <Link href="#" onClick={() => setIsOpen(false)} className="text-xl font-bold text-[#46075E]">Rastrea tu Envío</Link>
              <Link href="#" onClick={() => setIsOpen(false)} className="text-xl font-bold text-[#46075E]">Nosotros</Link>
              <Link href="#" onClick={() => setIsOpen(false)} className="text-xl font-bold text-[#46075E]">Contáctanos</Link>
              <div className="w-full h-px bg-gray-100 my-2" />
              <Link href="#" className="text-lg font-medium text-gray-600">Iniciar Sesión</Link>
              <Link href="#" className="bg-[#46075E] text-white w-full py-4 rounded-full font-bold text-lg shadow-lg mt-4">Cotiza tu Envío</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}