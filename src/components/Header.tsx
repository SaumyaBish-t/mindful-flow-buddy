
import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  const { user: localUser, logout: localLogout } = useUser();
  const { user: authUser, signOut: authSignOut } = useAuth();
  
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

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-therapeutic-blue flex items-center justify-center">
            <span className="text-white font-bold">M</span>
          </div>
          <span className="text-xl font-semibold bg-gradient-to-r from-therapeutic-blue to-therapeutic-teal bg-clip-text text-transparent">
            MindfulFlow
          </span>
        </Link>
        
        <nav className="flex items-center space-x-4">
          <Link to="/" className="text-gray-600 hover:text-therapeutic-blue transition-colors">
            Home
          </Link>
          {user ? (
            <>
              <Link to="/chat" className="text-gray-600 hover:text-therapeutic-blue transition-colors">
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
                  className="text-gray-600 hover:text-therapeutic-blue"
                >
                  Logout
                </Button>
              </div>
            </>
          ) : (
            <Link to="/chat">
              <Button variant="outline" className="border-therapeutic-blue text-therapeutic-blue hover:bg-therapeutic-blue hover:text-white">
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
