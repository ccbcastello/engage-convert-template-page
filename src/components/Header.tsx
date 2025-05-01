
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-blue-600">
              BrandName
            </a>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#beneficios" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Benefícios
            </a>
            <a href="#depoimentos" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Depoimentos
            </a>
            <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              FAQ
            </a>
            <a href="#garantia" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Garantia
            </a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-blue-600 mr-2" />
              <span className="text-sm font-medium">(11) 9999-9999</span>
            </div>
            <Button 
              size="sm" 
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => document.getElementById('comprar')?.scrollIntoView({behavior: 'smooth'})}
            >
              Comprar Agora
            </Button>
          </div>
          
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 mt-2 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              <a 
                href="#beneficios" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Benefícios
              </a>
              <a 
                href="#depoimentos" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Depoimentos
              </a>
              <a 
                href="#faq" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a 
                href="#garantia" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Garantia
              </a>
              <Button 
                size="sm" 
                className="bg-blue-600 hover:bg-blue-700 w-full mt-2"
                onClick={() => {
                  document.getElementById('comprar')?.scrollIntoView({behavior: 'smooth'});
                  setIsMobileMenuOpen(false);
                }}
              >
                Comprar Agora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
