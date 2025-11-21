import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // Usamos esta fuente para un look moderno
import "./globals.css";

const fontSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Logística Moderna - Control Total",
  description: "Plataforma de gestión de flotas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${fontSans.variable} font-sans antialiased bg-[#F3F3F3] text-slate-900`}>
        {children}
      </body>
    </html>
  );
}