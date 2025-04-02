
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from './AnimatedSection';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Is MindfulFlow a replacement for therapy?",
      answer: "No, MindfulFlow is not a replacement for professional mental health care. While our AI companion can provide support and resources, it should be used as a complement to professional therapy when needed."
    },
    {
      question: "How does MindfulFlow protect my privacy?",
      answer: "We take your privacy seriously. All conversations are encrypted and your personal data is never shared with third parties. You can also delete your data at any time."
    },
    {
      question: "Can I use MindfulFlow on multiple devices?",
      answer: "Yes, MindfulFlow is available on any device with a web browser. Your account and conversation history will sync across all your devices."
    },
    {
      question: "How accurate is the mood tracking feature?",
      answer: "Our mood tracking feature is designed to help you identify patterns in your emotional well-being. While it's based on established psychological principles, it's meant as a self-reflection tool rather than a diagnostic instrument."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection delay={100}>
          <h2 className="text-4xl font-bold text-center mb-12 text-therapeutic-blue">Frequently Asked Questions</h2>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-therapeutic-blue">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default FAQ;
