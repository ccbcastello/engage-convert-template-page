
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const benefits = [
  "Frete grátis para todo o Brasil",
  "Parcelamento em até 12x sem juros",
  "Garantia de 30 dias",
  "Suporte 7 dias por semana"
];

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-blue-600 to-blue-800 text-white" id="comprar">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">
            Transforme sua vida hoje mesmo!
          </h2>
          <p className="text-blue-100 text-xl mb-8">
            Não perca mais tempo - junte-se aos milhares de clientes satisfeitos e experimente a diferença agora.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-left">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-blue-200 text-sm line-through">De R$ 397,00 por</span>
                  <div className="text-3xl font-bold">R$ 297,00</div>
                </div>
                <div className="bg-yellow-400 text-blue-900 font-bold text-sm py-1 px-3 rounded-full">
                  25% OFF
                </div>
              </div>
              <p className="text-blue-100 mb-4">Pagamento à vista via PIX ou boleto</p>
              <Button size="lg" className="bg-white hover:bg-blue-50 text-blue-700 w-full py-6 text-lg rounded-full">
                Comprar à vista
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-white/20 text-left relative overflow-hidden">
              <div className="absolute -top-1 -right-1 bg-blue-900 text-white text-xs py-1 px-3 rounded-bl-lg">
                Mais popular
              </div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-gray-400 text-sm line-through">De R$ 397,00 por</span>
                  <div className="text-3xl font-bold text-blue-600">12x R$ 33,08</div>
                </div>
              </div>
              <p className="text-gray-500 mb-4">Total: R$ 397,00 em até 12x sem juros</p>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full py-6 text-lg rounded-full animate-pulse-slow">
                Parcelar no cartão
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center justify-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-300" />
                <span className="text-sm text-blue-100">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
