"use client";
import { Calculator, ScanLine, Receipt, BarChart3, ShoppingBag, BookUser, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    id: "01",
    title: "Cotiza envíos",
    desc: "Cotizaciones instantáneas por peso y destino.",
    icon: Calculator,
    link: "#cotizar"
  },
  {
    id: "02",
    title: "Rastrea tus guías",
    desc: "Estado en tiempo real con seguimiento automático.",
    icon: ScanLine,
    link: "#rastrear"
  },
  {
    id: "03",
    title: "Control de gastos",
    desc: "Resumen y facturación centralizada.",
    icon: Receipt,
    link: "#gastos"
  },
  {
    id: "04",
    title: "Análisis de consumos",
    desc: "Reportes y métricas para optimizar costos.",
    icon: BarChart3,
    link: "#analisis"
  },
  {
    id: "05",
    title: "Conecta tu e-commerce",
    desc: "Integración con Shopify, WooCommerce, Magento.",
    icon: ShoppingBag,
    link: "#integraciones"
  },
  {
    id: "06",
    title: "Libretas de direcciones",
    desc: "Guarda destinatarios frecuentes para agilizar envíos.",
    icon: BookUser,
    link: "#direcciones"
  },
];

export default function PlatformFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="mb-20 max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 leading-tight">
            La Mejor Plataforma<br/>de Envíos.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <motion.a
              href={item.link}
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              // CAMBIO: Fondo gris un poco más oscuro (gray-100) para mejor contraste con el blanco
              className="group relative p-8 rounded-3xl bg-gray-100 hover:bg-black transition-colors duration-300 block overflow-hidden border border-transparent hover:border-black"
            >
              <div className="flex justify-between items-start mb-8">
                {/* Número: Gris medio, no tan claro */}
                <span className="text-5xl font-light text-gray-400 group-hover:text-gray-600 transition-colors">
                    {item.id}
                </span>
                <div className="p-3 bg-white rounded-full text-black shadow-sm group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                </div>
              </div>
              
              {/* Título: Negro Fuerte */}
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-white mb-2 flex items-center gap-2 transition-colors">
                {item.title}
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-white"/>
              </h3>
              
              {/* Descripción: Gris oscuro */}
              <p className="text-gray-600 group-hover:text-gray-400 font-medium transition-colors">
                {item.desc}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}