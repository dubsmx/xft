"use client";

import { motion } from "framer-motion";

export default function AnnouncementBar() {
  const text = "¡Regístrate hoy y obtén 15% de descuento en tu primer envío masivo! — Envíos nacionales desde $80.";
  const items = [text, text, text, text];

  return (
    <div className="bg-[#8E1979] text-white py-2.5 overflow-hidden relative z-50 border-b border-white/10">
      <div className="flex whitespace-nowrap">
        {/* Tira 1 */}
        <motion.div
          className="flex flex-shrink-0 gap-24 items-center font-bold text-xs md:text-sm uppercase tracking-widest px-4"
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 180, // CAMBIO: De 60 a 180 (Muy lento y elegante)
            ease: "linear",
          }}
        >
          {items.map((item, index) => (
            <span key={index}>
              {item}
            </span>
          ))}
        </motion.div>
        
        {/* Tira 2 (Loop) */}
        <motion.div
          className="flex flex-shrink-0 gap-24 items-center font-bold text-xs md:text-sm uppercase tracking-widest px-4"
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 180, // Debe coincidir exactamente
            ease: "linear",
          }}
          aria-hidden="true"
        >
          {items.map((item, index) => (
            <span key={index + items.length}>
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}