
import React from 'react';
import { MessageSquare, BarChart2, BookOpen } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Connect with MindfulFlow",
      description: "Start with a conversation. Our AI companion listens and responds with empathy and understanding."
    },
    {
      icon: BarChart2,
      title: "Track Your Progress",
      description: "Use our mood tracking tools to identify patterns and monitor your mental wellness journey."
    },
    {
      icon: BookOpen,
      title: "Learn & Grow",
      description: "Access personalized resources and techniques to develop healthier mental habits."
    }
  ];

  return (
    <section className="py-20 px-4 bg-therapeutic-blue text-white">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection delay={100}>
          <h2 className="text-4xl font-bold text-center mb-12">How MindfulFlow Works</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={200 + (index * 150)} direction={index % 2 === 0 ? "up" : "down"}>
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-white/10 rounded-full mb-6">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/80">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
