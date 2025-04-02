
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-therapeutic-lightBlue py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">MindfulFlow</h3>
            <p className="text-gray-600">
              Your AI companion for mental wellness and emotional support.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/" className="hover:text-therapeutic-blue transition-colors">Home</Link></li>
              <li><Link to="/chat" className="hover:text-therapeutic-blue transition-colors">Chat</Link></li>
              <li><a href="#" className="hover:text-therapeutic-blue transition-colors">Resources</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Important</h3>
            <p className="text-gray-600 mb-2">
              This is not a crisis service. If you are in crisis, please call:
            </p>
            <p className="font-medium text-therapeutic-blue">988 Suicide & Crisis Lifeline</p>
            <p className="text-gray-600">Available 24/7</p>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} MindfulFlow. All rights reserved.</p>
          <p className="text-sm mt-2">
            MindfulFlow is not a replacement for professional mental health care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
