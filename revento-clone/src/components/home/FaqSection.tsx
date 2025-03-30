'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: 'What services does Revento offer?',
    answer: 'Revento provides a full suite of digital marketing services, including SEO, PPC, social media marketing, content creation, email marketing, web design, and more.'
  },
  {
    question: 'How does Revento measure success?',
    answer: 'We set clear KPIs at the start of each campaign and provide detailed reports on metrics like conversion rates, engagement, ROI, and more. Our approach is data-driven and transparent.'
  },
  {
    question: 'How do I get started with Revento?',
    answer: 'Getting started is easy! Simply contact us through our website or give us a call. We\'ll schedule a consultation to understand your needs and goals, then prepare a customized proposal.'
  },
  {
    question: 'Does Revento provide ongoing support?',
    answer: 'Absolutely! We pride ourselves on excellent client relationships. Every client is assigned a dedicated account manager who is always available to address concerns and provide updates.'
  }
];

export default function FaqSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-secondary font-semibold text-sm uppercase mb-3">Faq</div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary">
              Your Questions Answered
            </h2>
            <p className="text-gray-600">
              Everything You Need to Know About Revento, We have Answers to Your Questions About Reventos Services and Approach.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 py-2">
                <AccordionTrigger className="text-lg font-semibold text-primary hover:text-secondary transition-colors hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
