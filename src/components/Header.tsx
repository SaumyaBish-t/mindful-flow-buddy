
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const { user: localUser, logout: localLogout } = useUser();
  const { user: authUser, signOut: authSignOut } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  
  // Use authUser if available (Supabase), otherwise fall back to localUser (context)
  const user = authUser || localUser;
  
  // Handle logout based on which auth system is being used
  const handleLogout = async () => {
    if (authUser) {
      await authSignOut();
    } else if (localUser) {
      localLogout();
    }
  };

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed w-full z-50 py-4 transition-all duration-300",
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-3" 
          : "bg-white/0 py-4"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-full bg-therapeutic-blue flex items-center justify-center transition-transform group-hover:scale-110">
            <span className="text-white font-bold">M</span>
          </div>
          <span className="text-xl font-semibold bg-gradient-to-r from-therapeutic-blue to-therapeutic-teal bg-clip-text text-transparent">
            MindfulFlow
          </span>
        </Link>
        
        <nav className="flex items-center space-x-4">
          <Link to="/" className="text-gray-600 hover:text-therapeutic-blue transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-therapeutic-blue after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
            Home
          </Link>
          {user ? (
            <>
              <Link to="/chat" className="text-gray-600 hover:text-therapeutic-blue transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-therapeutic-blue after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">
                Chat
              </Link>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  Hi, {authUser?.email || localUser?.name || 'User'}
                </span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-therapeutic-blue hover:scale-105 transition-all"
                >
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <Link to="/chat">
              <Button 
                variant="outline" 
                className="border-therapeutic-blue text-therapeutic-blue hover:bg-therapeutic-blue hover:text-white transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
