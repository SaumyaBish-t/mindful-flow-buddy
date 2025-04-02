
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';
import { useAuth } from '../contexts/AuthContext';

const CTASection: React.FC = () => {
  const { user } = useAuth();

  return (
    <section className="py-24 px-4 bg-gradient-to-r from-therapeutic-blue to-therapeutic-blue/80 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection delay={100}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Mental Wellness Journey?</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={300}>
          <p className="text-xl mb-10 text-white/90">
            Join thousands of users who have improved their mental well-being with MindfulFlow
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={500}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {user ? (
              <Link to="/chat">
                <Button size="lg" className="bg-white text-therapeutic-blue hover:bg-white/90 transform transition-all hover:scale-105 px-8 py-6 text-lg">
                  Start Chatting Now
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/auth">
                  <Button size="lg" className="bg-white text-therapeutic-blue hover:bg-white/90 transform transition-all hover:scale-105 px-8 py-6 text-lg">
                    Get Started Free
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 transform transition-all hover:scale-105 px-8 py-6 text-lg">
                    Learn More
                  </Button>
                </Link>
              </>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CTASection;
