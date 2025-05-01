
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto tempo demora para o produto chegar?",
    answer: "Após a confirmação do pagamento, o prazo de entrega é de 3 a 7 dias úteis para capitais e regiões metropolitanas, e 7 a 15 dias úteis para demais localidades, dependendo da região de entrega."
  },
  {
    question: "O produto possui garantia?",
    answer: "Sim! Oferecemos garantia de 30 dias contra defeitos de fabricação. Além disso, se você não estiver satisfeito com o produto por qualquer motivo, pode solicitar o reembolso total dentro do prazo de 7 dias após o recebimento."
  },
  {
    question: "Como funciona o produto?",
    answer: "Nosso produto foi desenvolvido com tecnologia avançada que permite resultados imediatos. Seu funcionamento é simples e intuitivo, sem necessidade de conhecimentos técnicos. Todas as instruções detalhadas acompanham o produto."
  },
  {
    question: "Quais formas de pagamento são aceitas?",
    answer: "Aceitamos pagamentos via cartão de crédito (parcelamento em até 12x), boleto bancário, PIX e transferência bancária. Todas as transações são processadas em ambiente seguro."
  },
  {
    question: "O que fazer se o produto apresentar algum defeito?",
    answer: "Em caso de qualquer problema com o produto, entre em contato com nossa Central de Atendimento imediatamente. Nossa equipe de suporte está pronta para resolver sua questão da melhor forma possível, seja com substituição do produto ou reembolso."
  },
  {
    question: "Existe alguma contraindicação para o uso do produto?",
    answer: "Nosso produto é seguro para uso geral, mas recomendamos a leitura atenta do manual de instruções antes da utilização. Em casos específicos de condições médicas preexistentes, consulte seu médico antes de usar."
  }
];

const FaqSection = () => {
  return (
    <section className="py-16 bg-white" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Perguntas <span className="headline-gradient">Frequentes</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Ainda com dúvidas? Confira as respostas para as perguntas mais comuns
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="text-center mt-10 pt-6 border-t border-gray-100">
            <p className="text-gray-600 mb-4">
              Não encontrou a resposta que procurava?
            </p>
            <a 
              href="#contato" 
              className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-4"
            >
              Fale com nossa equipe de suporte
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
