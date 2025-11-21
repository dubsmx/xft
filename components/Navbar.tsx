"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linksLeft = [
    { name: "Inicio", href: "/" },
    { name: "Rastrea tu envío", href: "#" },
    { name: "Blog", href: "#" },
  ];

  // Lógica de colores para el menú transparente/blanco
  const textColor = scrolled ? "text-gray-800" : "text-white";
  const buttonBg = scrolled ? "bg-black text-white" : "bg-white text-black";
  // Para el menú móvil, siempre queremos texto oscuro
  const mobileTextColor = "text-gray-800";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center relative">
        
        {/* MENÚ IZQUIERDA */}
        <div className="hidden md:flex gap-8 items-center">
          {linksLeft.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:opacity-70 ${textColor}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* LOGO */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Link href="/" className="block">
            <Image 
              src="/logo.svg" 
              alt="Logo" 
              width={120} 
              height={40} 
              // Invierte el color del logo si estamos arriba (fondo oscuro) y el logo es negro
              className={`h-8 w-auto object-contain transition-all ${scrolled ? '' : 'brightness-0 invert'}`} 
              priority 
            />
          </Link>
        </div>

        {/* MENÚ DERECHA */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#" className={`text-sm font-medium transition-colors hover:opacity-70 ${textColor}`}>
            Acceso clientes
          </Link>
          <Link
            href="#"
            className={`${buttonBg} px-6 py-2.5 rounded-full text-sm font-bold transition-transform hover:scale-105 active:scale-95`}
          >
            Obtener cotización
          </Link>
        </div>

        {/* BOTÓN MÓVIL */}
        <button 
            className={`md:hidden p-1 ${textColor}`} 
            onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} className="text-black" /> : <Menu size={24} />}
        </button>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t absolute w-full overflow-hidden shadow-xl top-full left-0"
          >
            <div className="flex flex-col p-6 gap-4 text-center">
              {linksLeft.map((link) => (
                <Link 
                    key={link.name} 
                    href={link.href} 
                    className={`text-lg font-medium py-2 hover:text-black ${mobileTextColor}`}
                    onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-gray-100 my-2" />
              <Link 
                href="#" 
                className={`text-lg font-medium py-2 ${mobileTextColor}`}
                onClick={() => setIsOpen(false)}
              >
                Acceso para cuentas
              </Link>
              <Link 
                href="#" 
                className="bg-black text-white w-full py-4 rounded-full font-medium mt-2 active:scale-95 transition-transform"
                onClick={() => setIsOpen(false)}
              >
                Obtener cotización
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}