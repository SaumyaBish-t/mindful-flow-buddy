
import React from 'react';
import { CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';

const FeatureHighlights: React.FC = () => {
  const features = [
    {
      title: "Personalized Support",
      description: "Our AI adapts to your needs, providing customized guidance based on your unique experiences."
    },
    {
      title: "Evidence-Based Techniques",
      description: "Access proven mental wellness strategies backed by research and clinical expertise."
    },
    {
      title: "Progress Tracking",
      description: "Monitor your mental health journey with intuitive tools that help you see how far you've come."
    },
    {
      title: "Private & Secure",
      description: "Your conversations and data are completely private, with bank-level security measures."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-therapeutic-lightBlue/20">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection delay={100}>
          <h2 className="text-4xl font-bold text-center mb-12 text-therapeutic-blue">Why Choose MindfulFlow</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={200 + (index * 100)} direction="up">
              <Card className="border-therapeutic-lightBlue/30 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center mb-4 text-therapeutic-blue">
                    <CheckCircle className="mr-3" />
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
