
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-medium">+ de 10.000 clientes satisfeitos</span>
            </div>
            
            <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight">
              <span className="headline-gradient">Transforme seu dia a dia</span> com o produto que está revolucionando o mercado
            </h1>
            
            <p className="text-gray-600 text-lg">
              Conheça o segredo que já ajudou milhares de pessoas a melhorar sua qualidade de vida de forma simples, rápida e eficaz.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-full animate-pulse-slow">
                Comprar Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-blue-200 text-blue-700 px-8 py-6 rounded-full">
                Saiba mais
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="bg-green-50 text-green-700 text-sm font-medium px-3 py-1 rounded-full border border-green-200 flex items-center gap-1">
                <span className="block w-2 h-2 rounded-full bg-green-500"></span>
                Em estoque
              </div>
              <div className="text-sm text-gray-500">
                Frete grátis em compras acima de R$199
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-50 rounded-full opacity-70 blur-xl animate-pulse-slow"></div>
              <div className="relative bg-white p-4 rounded-xl border border-gray-100 shadow-lg">
                <div className="aspect-square w-full max-w-md rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <span className="text-gray-400">Imagem do Produto</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
