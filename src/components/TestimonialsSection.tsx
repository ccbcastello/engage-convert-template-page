
import React from 'react';
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Souza",
    location: "São Paulo, SP",
    text: "Esse produto transformou completamente minha rotina! Já recomendei para toda minha família e amigos. Os resultados são surpreendentes desde a primeira semana de uso.",
    rating: 5
  },
  {
    name: "Carlos Oliveira",
    location: "Rio de Janeiro, RJ",
    text: "Comprei com um pouco de receio no início, mas agora posso dizer que foi um dos melhores investimentos que já fiz. A qualidade é impressionante e o suporte ao cliente é excelente!",
    rating: 5
  },
  {
    name: "Mariana Costa",
    location: "Belo Horizonte, MG",
    text: "Estou utilizando há 3 meses e os resultados superaram todas as minhas expectativas. Vale cada centavo investido, sem dúvidas!",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50" id="depoimentos">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            O que nossos clientes <span className="headline-gradient">estão dizendo</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Milhares de pessoas já transformaram suas vidas com nosso produto. Confira alguns depoimentos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card"
            >
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
