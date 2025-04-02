
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ChatInterface from '../components/ChatInterface';
import MoodTracker from '../components/MoodTracker';
import { useUser } from '../contexts/UserContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginForm: React.FC = () => {
  const [name, setName] = useState('');
  const { login } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      login(name);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <Card className="shadow-lg border-therapeutic-blue/20">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Welcome to MindfulFlow</CardTitle>
          <CardDescription className="text-center">
            Enter your name to start your mental wellness journey
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button 
              type="submit"
              className="bg-therapeutic-blue hover:bg-therapeutic-blue/90 w-full"
            >
              Get Started
            </Button>
          </CardFooter>
        </form>
      </Card>
      <p className="text-center text-sm text-gray-500 mt-4">
        Your information is stored locally and not shared with any third parties.
      </p>
    </div>
  );
};

const Chat: React.FC = () => {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center p-6 bg-gradient-to-b from-therapeutic-lightBlue/30 to-white">
          <LoginForm />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Chat with MindfulFlow</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ChatInterface />
          </div>
          
          <div className="space-y-6">
            <MoodTracker />
            
            <Card className="shadow-md border-therapeutic-lightBlue">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-gray-700">Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="https://www.nami.org" target="_blank" rel="noopener noreferrer" className="text-therapeutic-blue hover:underline flex items-center">
                      <span className="w-1 h-1 bg-therapeutic-blue rounded-full mr-2"></span>
                      National Alliance on Mental Illness
                    </a>
                  </li>
                  <li>
                    <a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer" className="text-therapeutic-blue hover:underline flex items-center">
                      <span className="w-1 h-1 bg-therapeutic-blue rounded-full mr-2"></span>
                      988 Suicide & Crisis Lifeline
                    </a>
                  </li>
                  <li>
                    <a href="https://www.crisistextline.org" target="_blank" rel="noopener noreferrer" className="text-therapeutic-blue hover:underline flex items-center">
                      <span className="w-1 h-1 bg-therapeutic-blue rounded-full mr-2"></span>
                      Crisis Text Line
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Chat;
