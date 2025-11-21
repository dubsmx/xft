"use client";

import { motion } from "framer-motion";
import { Clock, Truck, Bike, Globe, Container, ArrowRight } from "lucide-react";

const shippingTypes = [
  {
    title: "EXPRESS NEXT DAY",
    description: "Servicio nacional con entrega al día siguiente.",
    icon: Clock,
  },
  {
    title: "NACIONAL STANDARD",
    description: "Servicio nacional con entrega de 1 a 2 días hábiles.",
    icon: Truck,
  },
  {
    title: "NACIONAL ECONOMY",
    description: "Servicio terrestre con entrega de 2 a 5 días hábiles.",
    icon: Bike, // Usamos moto/bici para representar economía/ligero
  },
  {
    title: "INTERNACIONAL EXPORT",
    description: "Servicio de puerta a puerta de documentos y paquetes a 220+ países.",
    icon: Globe,
  },
  {
    title: "SERVICIO LTL",
    description: "Transporta una amplia gama de cargas, desde paquetes hasta tarimas.",
    icon: Container,
  },
];

export default function ShippingTypes() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* TÍTULO */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-[#46075E] uppercase tracking-tight">
            Tipos de envío
          </h2>
          <div className="w-16 h-1 bg-[#8E1979] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* GRID DE TIPOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          {shippingTypes.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              {/* ICONO ESTILIZADO */}
              <div className="w-24 h-24 bg-[#F9F5FA] rounded-3xl flex items-center justify-center mb-6 group-hover:bg-[#46075E] transition-colors duration-300 shadow-sm group-hover:shadow-xl">
                <item.icon 
                    size={40} 
                    className="text-[#46075E] group-hover:text-white transition-colors duration-300" 
                    strokeWidth={1.5}
                />
              </div>

              {/* TÍTULO + FLECHA */}
              <div className="flex items-center gap-2 mb-3 justify-center">
                <h3 className="text-sm font-bold text-[#46075E] uppercase tracking-wide group-hover:text-[#8E1979] transition-colors">
                    {item.title}
                </h3>
                <div className="bg-[#8E1979] rounded-full p-0.5 text-white opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight size={12} />
                </div>
              </div>

              {/* DESCRIPCIÓN */}
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-[200px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}