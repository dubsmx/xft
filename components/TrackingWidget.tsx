"use client";

import { useState } from "react";
import { ArrowRight, Package, CheckCircle2, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TrackingWidget() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [trackingId, setTrackingId] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId) return;

    setStatus("loading");

    // Simulamos carga
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="bg-white rounded-2xl shadow-xl p-2 pr-2 sm:pr-2 border border-gray-100"
      >
        <form onSubmit={handleSearch} className="relative flex items-center">
          <div className="pl-4 text-gray-400">
            <Package size={20} />
          </div>
          <input
            type="text"
            placeholder="Ingresa tu número de guía..."
            className="flex-grow py-3 px-3 text-gray-800 placeholder-gray-400 bg-transparent outline-none font-medium"
            value={trackingId}
            onChange={(e) => {
                setTrackingId(e.target.value);
                if (status === 'success') setStatus('idle');
            }}
          />
          
          <button
            type="submit"
            disabled={status === "loading" || !trackingId}
            className={`h-10 px-4 rounded-xl flex items-center justify-center gap-2 font-medium transition-all duration-300 ${
              status === "loading" 
                ? "bg-gray-100 text-gray-400 cursor-wait w-12" 
                : "bg-black text-white hover:bg-gray-800 w-auto"
            }`}
          >
            {status === "loading" ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <>
                <span className="hidden sm:inline text-sm">Rastrear</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="pt-2 pb-2 px-2 mt-2 border-t border-gray-100 flex items-center gap-3 bg-green-50/50 rounded-xl">
                <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                    <CheckCircle2 size={20} />
                </div>
                <div>
                    <p className="text-xs font-bold text-green-700 uppercase tracking-wider">En Tránsito</p>
                    <p className="text-sm text-gray-600 font-medium">Llegada estimada: Hoy, 18:00</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}