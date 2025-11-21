"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"; 
import PromoSection from "@/components/PromoSection"; 
import VolumeDiscount from "@/components/VolumeDiscount"; 
import PricingBanner from "@/components/PricingBanner"; 
import AdvantagesSection from "@/components/AdvantagesSection"; 
import ShippingTypes from "@/components/ShippingTypes";
import HowItWorks from "@/components/HowItWorks";
import StartToday from "@/components/StartToday"; 
import InfoCards from "@/components/InfoCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      
      {/* 1. BARRA DE NAVEGACIÓN */}
      <Navbar />

      {/* 2. HERO (Avión + Cards) */}
      <Hero />

      {/* 3. PROMOCIONES (Shopify + 40% Off) */}
      <PromoSection />

      {/* 4. DESCUENTO POR VOLUMEN (Confeti) */}
      <VolumeDiscount />
      
      {/* 5. BANNER PRECIOS (Desde $80) */}
      <PricingBanner />

      {/* 6. VENTAJAS (Iconos en círculo) */}
      <AdvantagesSection />

      {/* 7. TIPOS DE ENVÍO (Next Day, LTL, etc.) */}
      <ShippingTypes />

      {/* 8. CÓMO FUNCIONA (4 Pasos animados) */}
      <HowItWorks />

      {/* 9. COMIENZA HOY (Cajas flotantes) */}
      <StartToday />
      
      {/* 10. TARJETAS INFO (Rastreo y Blog) */}
      <InfoCards />

      {/* 11. CTA FINAL */}
      <section className="py-24 bg-[#46075E] text-white text-center px-6 border-t border-white/10">
          <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                ¿Listo para mover tu carga?
              </h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed">
                Cotiza tu envío en minutos y obtén la seguridad y eficiencia que tu empresa necesita.
              </p>
              <button className="bg-white text-[#46075E] px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
                  Contactar Ventas
              </button>
          </div>
      </section>

      {/* 12. PIE DE PÁGINA */}
      <Footer />

    </main>
  );
}