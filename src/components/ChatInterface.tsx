
import React, { useState, useRef, useEffect } from 'react';
import { useUser } from '../contexts/UserContext';
import { generateResponse, Message } from '../utils/chatbot';
import { analyzeSentiment } from '../utils/sentimentAnalysis';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const ChatInterface: React.FC = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [thinking, setThinking] = useState(false);
  const { user, addMessage, currentSession } = useUser();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [currentSession.messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;
    
    // Add user message to chat
    addMessage('user', inputMessage);
    
    // Analyze sentiment
    const sentiment = analyzeSentiment(inputMessage);
    console.log('Sentiment analysis:', sentiment);
    
    // Check for crisis messages
    if (sentiment.isCrisis) {
      toast({
        variant: "destructive",
        title: "Crisis Alert",
        description: "This appears to be a crisis situation. Please seek professional help immediately by calling 988.",
      });
    }
    
    // Show bot thinking indicator
    setThinking(true);
    setInputMessage('');
    
    // Simulate bot response delay (in a real app, this would be an API call)
    setTimeout(() => {
      const response = generateResponse(inputMessage);
      addMessage('bot', response);
      setThinking(false);
    }, 1000);
  };

  // Generate welcome message if this is the first session
  useEffect(() => {
    if (user && currentSession.messages.length === 0) {
      setTimeout(() => {
        addMessage('bot', "Hi there! I'm MindfulFlow, your mental health companion. How are you feeling today?");
      }, 500);
    }
  }, [user, currentSession.messages.length, addMessage]);

  return (
    <div className="flex flex-col h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Chat messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {currentSession.messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-400">
            <p>Your conversation will appear here.</p>
            <p className="text-sm">All messages are stored locally and not shared.</p>
          </div>
        ) : (
          <div className="flex flex-col">
            {currentSession.messages.map((msg, index) => (
              <div
                key={index}
                className={`chat-bubble ${msg.role === 'user' ? 'user' : 'bot'}`}
              >
                {msg.content}
              </div>
            ))}
            {thinking && (
              <div className="chat-bubble bot">
                <div className="thinking-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
      {/* Input area */}
      <div className="border-t border-gray-200 p-4 bg-gray-50">
        <form onSubmit={handleSendMessage} className="flex space-x-2">
          <Input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-white"
            disabled={thinking}
          />
          <Button 
            type="submit" 
            className="bg-therapeutic-blue hover:bg-therapeutic-blue/90"
            disabled={thinking || !inputMessage.trim()}
          >
            Send
          </Button>
        </form>
        <div className="mt-2 flex items-center justify-center">
          <AlertCircle className="h-3 w-3 text-amber-500 mr-1" />
          <p className="text-xs text-gray-500">
            This is not a crisis service. In an emergency, call 988.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
