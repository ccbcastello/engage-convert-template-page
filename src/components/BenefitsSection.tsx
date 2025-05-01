
import React from 'react';
import { Check } from "lucide-react";

const benefits = [
  {
    title: "Solução rápida e eficaz",
    description: "Resultados comprovados em poucos dias de uso, com benefícios imediatos para sua saúde e bem-estar."
  },
  {
    title: "Qualidade premium garantida",
    description: "Fabricado com os melhores materiais do mercado, garantindo durabilidade e resultados superiores."
  },
  {
    title: "Uso simples e intuitivo",
    description: "Design pensado para facilitar sua vida, sem complicações ou manuais extensos."
  },
  {
    title: "Testado e aprovado",
    description: "Produto rigorosamente testado e com certificação de qualidade e segurança."
  },
  {
    title: "Economize tempo e dinheiro",
    description: "Investimento que se paga em poucos meses, trazendo economia real a longo prazo."
  },
  {
    title: "Suporte dedicado pós-venda",
    description: "Nossa equipe está sempre disponível para tirar qualquer dúvida e garantir sua satisfação."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white" id="beneficios">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Por que nosso produto é <span className="headline-gradient">essencial para você</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Conheça os benefícios exclusivos que fazem nosso produto ser a escolha perfeita para transformar sua vida
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-blue-100 rounded-full p-2 mt-1">
                  <Check className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
