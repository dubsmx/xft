"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, MapPin } from "lucide-react";

const advantages = [
  {
    title: "Envíos confiables",
    description: "Trabajamos con las principales plataformas de envío del país para asegurar que tu paquete llegue a su destino rápidamente y en óptimas condiciones.",
    icon: ShieldCheck,
  },
  {
    title: "Plataforma segura",
    description: "Al usar XFT Logistics puedes estar tranquilo de que tus datos personales y bancarios siempre estarán protegidos con la máxima seguridad.",
    icon: Lock,
  },
  {
    title: "Rastreo en tiempo real",
    description: "Consulta en todo momento el seguimiento de tus envíos desde tu panel de control, con actualizaciones precisas y al instante.",
    icon: MapPin,
  },
];

export default function AdvantagesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1300px] mx-auto px-6">
        
        {/* CONTENEDOR GRIS/LILA SUAVE (Como en la referencia) */}
        <div className="bg-[#F9F5FA] rounded-[3rem] p-8 md:p-20 text-center">
            
            {/* CABECERA */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-black text-[#46075E] tracking-tight mb-6 uppercase leading-tight">
                    VENTAJAS DE REALIZAR TUS <span className="text-white bg-[#8E1979] px-2 py-1 rounded-lg transform -rotate-1 inline-block shadow-sm">ENVÍOS CON NOSOTROS</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed font-medium">
                    Con XFT Logistics podrás realizar todos tus envíos de manera rápida, segura y en pocos clics. Contamos con los mejores precios del mercado gracias a nuestras alianzas estratégicas.
                </p>
            </motion.div>

            {/* GRID DE VENTAJAS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                {advantages.map((item, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="flex flex-col items-center group"
                    >
                        {/* ICONO CON CÍRCULO */}
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md mb-6 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 border border-gray-100">
                            <item.icon size={40} className="text-[#46075E] group-hover:text-[#8E1979] transition-colors" strokeWidth={1.5} />
                        </div>

                        {/* TEXTO */}
                        <h3 className="text-xl font-bold text-[#46075E] mb-4">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base px-4">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </div>

        </div>

      </div>
    </section>
  );
}