"use client";
import { Package, Warehouse, Container, Globe } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "XFT Paquetería",
    description: "Envíos a toda la república mexicana a los mejores precios. Rapidez y cobertura total.",
    icon: Package,
  },
  {
    title: "Fulfillment",
    description: "Gestión de inventario y preparación de pedidos. Nos encargamos de tu logística ecommerce.",
    icon: Warehouse,
  },
  {
    title: "Almacenaje",
    description: "Control y almacenamiento de productos en bodegas seguras y monitoreadas.",
    icon: Container,
  },
  {
    title: "Envíos Internacionales",
    description: "Despacho global con seguimiento aduanal. Conectamos tu negocio con el mundo.",
    icon: Globe,
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2 block">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black">
            Lo que hacemos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              // CAMBIO CLAVE:
              // 1. bg-gray-50: Un gris un poco más sólido para la tarjeta.
              // 2. border border-gray-200: Borde para definir el límite.
              // 3. text-black: Forzamos texto negro base.
              className="group p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:border-black hover:bg-black hover:text-white transition-all duration-300 cursor-default relative overflow-hidden"
            >
              {/* Icono: Negro por defecto, Blanco al hover */}
              <div className="mb-6 p-3 bg-white text-black rounded-xl w-fit shadow-sm group-hover:scale-110 transition-transform border border-gray-100">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              
              {/* Título: Negro fuerte por defecto (text-slate-900), Blanco al hover */}
              <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              
              {/* Descripción: Gris oscuro legible (text-gray-600), Gris claro al hover */}
              <p className="text-gray-600 font-medium leading-relaxed text-sm group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}