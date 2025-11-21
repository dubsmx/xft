"use client";
import { Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* CORRECCIÓN: Agregamos 'text-black' explícito para que se lea perfecto */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black tracking-tight">
          ¿Necesitas ayuda personalizada?
        </h2>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          
          {/* BOTÓN LLAMADA */}
          <a 
            href="tel:+525526593589" 
            // Usamos bg-gray-100 (más oscuro que antes) y un borde sutil
            className="flex-1 flex items-center justify-center gap-4 p-8 rounded-2xl bg-gray-100 border border-gray-200 hover:bg-black hover:text-white transition-all duration-300 group text-center"
          >
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors shadow-sm">
                <Phone size={20} />
            </div>
            <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-400">Llámanos</p>
                <p className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-white">55 2659 3589</p>
            </div>
          </a>

          {/* BOTÓN CORREO */}
          <a 
            href="mailto:info@xftlogistics.mx" 
            className="flex-1 flex items-center justify-center gap-4 p-8 rounded-2xl bg-gray-100 border border-gray-200 hover:bg-black hover:text-white transition-all duration-300 group text-center"
          >
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors shadow-sm">
                <Mail size={20} />
            </div>
            <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-gray-400">Envíanos un correo</p>
                <p className="text-xl md:text-2xl font-bold text-slate-900 group-hover:text-white">info@xftlogistics.mx</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}