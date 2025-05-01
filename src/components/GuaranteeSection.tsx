
import React from 'react';
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-blue-50" id="garantia">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Garantia de <span className="headline-gradient">Satisfação Total</span>
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-100 rounded-full rotate-12"></div>
                  <div className="relative bg-blue-600 text-white rounded-full h-44 w-44 flex flex-col items-center justify-center transform rotate-12">
                    <span className="text-sm uppercase font-bold opacity-75">Garantia de</span>
                    <span className="text-4xl font-bold">30</span>
                    <span className="text-xl font-bold">DIAS</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-gray-700 mb-6 text-lg">
                  Acreditamos tanto na qualidade do nosso produto que oferecemos uma garantia incondicional de 30 dias. Se você não estiver completamente satisfeito, por qualquer motivo, devolva o produto e receba 100% do seu dinheiro de volta, sem perguntas.
                </p>
                
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <p>Reembolso integral em até 30 dias após o recebimento</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <p>Sem burocracia ou justificativas necessárias</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <p>Atendimento prioritário para solicitações de devolução</p>
                  </div>
                </div>
                
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg w-full md:w-auto px-8 py-6 rounded-full">
                  Comprar com Garantia
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
