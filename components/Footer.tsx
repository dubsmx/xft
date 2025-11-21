"use client";

import { Phone, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 border-t border-gray-100">
      
      {/* --- SECCIÓN SUPERIOR (ENLACES) --- */}
      <div className="max-w-[1200px] mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* COLUMNA 1: ENVÍOS */}
          <div>
            <h3 className="text-xl font-bold text-[#46075E] mb-6">Envíos</h3>
            <ul className="space-y-3 text-gray-500 font-medium text-sm">
              <li><Link href="#" className="hover:text-[#8E1979] transition-colors">DHL</Link></li>
              <li><Link href="#" className="hover:text-[#8E1979] transition-colors">FedEx</Link></li>
              <li><Link href="#" className="hover:text-[#8E1979] transition-colors">Estafeta</Link></li>
              <li><Link href="#" className="hover:text-[#8E1979] transition-colors">Paquetexpress</Link></li>
            </ul>
          </div>

          {/* COLUMNA 2: SERVICIOS */}
          <div className="md:pt-12"> 
            <ul className="space-y-3 text-gray-500 font-medium text-sm">
              <li><Link href="#" className="hover:text-[#8E1979] transition-colors">Integraciones</Link></li>
              <li><Link href="#" className="hover:text-[#8E1979] transition-colors">Guías prepagadas</Link></li>
              <li><Link href="#" className="hover:text-[#8E1979] transition-colors">¿Cómo funciona?</Link></li>
            </ul>
          </div>

          {/* COLUMNA 3: SOPORTE */}
          <div>
            <h3 className="text-xl font-bold text-[#46075E] mb-6">Soporte</h3>
            <ul className="space-y-3 text-gray-500 font-medium text-sm">
              <li><Link href="#" className="hover:text-[#8E1979] transition-colors">Términos y Condiciones</Link></li>
              <li><Link href="#" className="hover:text-[#8E1979] transition-colors">Contáctanos</Link></li>
            </ul>
          </div>

        </div>
      </div>

      {/* --- SECCIÓN INFERIOR (CONTACTO Y REDES) --- */}
      <div className="bg-[#2A0342] text-white py-12">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center gap-8">
            
            {/* Teléfono */}
            <div className="flex items-center gap-3 text-lg font-bold">
                <div className="bg-white/10 p-2 rounded-full">
                    <Phone className="text-white" size={18} />
                </div>
                <a href="tel:+5526593589" className="hover:text-gray-300 transition-colors">
                    55 2659 3589
                </a>
            </div>

            {/* Redes Sociales (Estilo Outline Limpio) */}
            <div className="flex gap-8">
                <Link href="#" className="text-white hover:text-[#8E1979] transition-all transform hover:scale-110" aria-label="Facebook">
                    <Facebook size={28} strokeWidth={1.5} />
                </Link>
                <Link href="#" className="text-white hover:text-[#8E1979] transition-all transform hover:scale-110" aria-label="Instagram">
                    <Instagram size={28} strokeWidth={1.5} />
                </Link>
                <Link href="#" className="text-white hover:text-[#8E1979] transition-all transform hover:scale-110" aria-label="YouTube">
                    <Youtube size={28} strokeWidth={1.5} />
                </Link>
                <Link href="#" className="text-white hover:text-[#8E1979] transition-all transform hover:scale-110" aria-label="LinkedIn">
                    <Linkedin size={28} strokeWidth={1.5} />
                </Link>
            </div>

            {/* Copyright simple */}
            <div className="text-xs text-gray-500 font-medium mt-2">
                © 2025 XFT Logistics. Todos los derechos reservados.
            </div>

        </div>
      </div>

    </footer>
  );
}