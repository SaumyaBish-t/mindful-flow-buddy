
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '../contexts/AuthContext';
import AnimatedSection from './AnimatedSection';
import FeatureHighlights from './FeatureHighlights';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import CTASection from './CTASection';

const Landing: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      {/* Hero Section */}
      <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-therapeutic-lightBlue/30 to-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection direction="up" delay={100}>
            <h1 className="text-5xl font-bold mb-6 text-therapeutic-blue">Welcome to MindfulFlow</h1>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={300}>
            <p className="text-xl mb-8 text-gray-700">
              Your personal mental wellness companion, providing support and guidance whenever you need it.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            <AnimatedSection direction="left" delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-therapeutic-lightBlue/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h2 className="text-xl font-semibold mb-3 text-therapeutic-blue">Supportive Companion</h2>
                <p className="text-gray-600">
                  Have thoughtful conversations with our AI companion trained to provide emotional support and guidance.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={500}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-therapeutic-lightBlue/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h2 className="text-xl font-semibold mb-3 text-therapeutic-blue">Track Your Mood</h2>
                <p className="text-gray-600">
                  Monitor your emotional wellbeing over time with our simple and effective mood tracking tools.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="left" delay={600}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-therapeutic-lightBlue/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h2 className="text-xl font-semibold mb-3 text-therapeutic-blue">Coping Strategies</h2>
                <p className="text-gray-600">
                  Learn practical techniques to manage stress, anxiety, and difficult emotions.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right" delay={700}>
              <div className="bg-white p-6 rounded-lg shadow-md border border-therapeutic-lightBlue/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <h2 className="text-xl font-semibold mb-3 text-therapeutic-blue">Mental Wellness Resources</h2>
                <p className="text-gray-600">
                  Access a curated collection of resources for continuing your mental health journey.
                </p>
              </div>
            </AnimatedSection>
          </div>
          
          <AnimatedSection delay={800}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {user ? (
                <Link to="/chat">
                  <Button size="lg" className="bg-therapeutic-blue hover:bg-therapeutic-blue/80 transform transition-all hover:scale-105">
                    Continue to Chat
                  </Button>
                </Link>
              ) : (
                <>
                  <Link to="/auth">
                    <Button size="lg" className="bg-therapeutic-blue hover:bg-therapeutic-blue/80 transform transition-all hover:scale-105">
                      Get Started
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button variant="outline" size="lg" className="border-therapeutic-blue text-therapeutic-blue hover:bg-therapeutic-blue/10 transform transition-all hover:scale-105">
                      Sign In
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Additional content sections */}
      <HowItWorks />
      <FeatureHighlights />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
};

export default Landing;
