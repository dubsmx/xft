export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-gray-800">
      <div className="max-w-[1400px] mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-500 text-sm font-medium">
          XFT Operator Group, 2025
        </p>
        
        {/* Opcional: Links legales pequeños */}
        <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-white text-xs transition-colors">Privacidad</a>
            <a href="#" className="text-gray-600 hover:text-white text-xs transition-colors">Términos</a>
        </div>
      </div>
    </footer>
  );
}