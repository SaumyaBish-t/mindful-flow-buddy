
import React from 'react';
import { Star } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "MindfulFlow helped me manage my anxiety during a difficult time. The conversations feel natural and thoughtful.",
      author: "Sarah K.",
      stars: 5
    },
    {
      quote: "I was skeptical about an AI companion, but this app has been genuinely supportive during my mental health journey.",
      author: "Michael T.",
      stars: 5
    },
    {
      quote: "The mood tracking feature helps me identify patterns I never noticed before. It's been eye-opening.",
      author: "Jessica L.",
      stars: 4
    },
    {
      quote: "Having a supportive companion available 24/7 has made a huge difference in my daily mental wellness routine.",
      author: "David P.",
      stars: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-therapeutic-lightBlue/20 to-white">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection delay={100}>
          <h2 className="text-4xl font-bold text-center mb-2 text-therapeutic-blue">What Our Users Say</h2>
          <p className="text-center text-gray-600 mb-12">Join thousands who have improved their mental wellness</p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="sm:basis-1/1 md:basis-1/2 lg:basis-1/3 pl-4">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-therapeutic-lightBlue/30">
                    <div className="flex mb-4">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                    <p className="font-medium text-therapeutic-blue">- {testimonial.author}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="mr-2 relative static translate-y-0 left-0" />
              <CarouselNext className="relative static translate-y-0 right-0" />
            </div>
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Testimonials;
