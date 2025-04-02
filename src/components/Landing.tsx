
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, BrainCircuit, MessageCircle } from 'lucide-react';

const Landing: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section */}
      <section className="bg-gradient-to-b from-therapeutic-lightBlue/50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Your Mental Wellness <span className="text-therapeutic-blue">Companion</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                A supportive AI-powered chat experience to help you navigate life's challenges with evidence-based mental health techniques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/chat">
                  <Button className="bg-therapeutic-blue hover:bg-therapeutic-blue/90 text-white px-8 py-6 rounded-lg text-lg">
                    Start Chatting
                  </Button>
                </Link>
                <Button variant="outline" className="border-therapeutic-blue text-therapeutic-blue hover:bg-therapeutic-blue/10 px-8 py-6 rounded-lg text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 rounded-full bg-therapeutic-green/20 blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-72 h-72 rounded-full bg-therapeutic-blue/20 blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                  alt="Person meditating" 
                  className="rounded-2xl shadow-lg relative z-10 max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How MindfulFlow Helps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-white to-therapeutic-lightBlue/20">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-therapeutic-blue rounded-xl flex items-center justify-center text-white">
                    <MessageCircle size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">24/7 Support</h3>
                <p className="text-center text-gray-600">
                  Always available to chat when you need someone to talk to, providing a safe space for expression.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-white to-therapeutic-green/20">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-therapeutic-teal rounded-xl flex items-center justify-center text-white">
                    <BrainCircuit size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">CBT Techniques</h3>
                <p className="text-center text-gray-600">
                  Incorporates evidence-based cognitive behavioral therapy strategies to help manage thoughts and emotions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-b from-white to-therapeutic-peach/20">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-therapeutic-peach rounded-xl flex items-center justify-center text-white">
                    <Heart size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">Mood Tracking</h3>
                <p className="text-center text-gray-600">
                  Monitor your emotional wellbeing over time to identify patterns and progress in your mental health journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* How it works */}
      <section className="py-16 bg-therapeutic-lightBlue/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-therapeutic-blue rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Start a Conversation</h3>
              <p className="text-gray-600">
                Begin chatting with MindfulFlow about how you're feeling today.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-therapeutic-blue rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Explore Techniques</h3>
              <p className="text-gray-600">
                Learn and practice cognitive behavioral therapy strategies tailored to your needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-therapeutic-blue rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Track Your Progress</h3>
              <p className="text-gray-600">
                Monitor your mood and emotional well-being over time to see your growth.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/chat">
              <Button className="bg-therapeutic-blue hover:bg-therapeutic-blue/90 text-white px-8 py-6 rounded-lg text-lg">
                Get Started Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Disclaimer */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-2 text-center">Important Disclaimer</h3>
            <p className="text-gray-600 text-center">
              MindfulFlow is not a substitute for professional mental health care.
              If you are experiencing a mental health emergency, please call 988 (Suicide & Crisis Lifeline) 
              or go to your nearest emergency room.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
