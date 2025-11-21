import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "XFT Logistics",
  description: "Soluciones logísticas integrales",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      {/* Definimos el fondo claro (#F7F7F7) y el fondo oscuro (#121212) */}
      <body className={`${fontSans.variable} font-sans antialiased bg-xft-light dark:bg-[#121212] text-slate-900 dark:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}