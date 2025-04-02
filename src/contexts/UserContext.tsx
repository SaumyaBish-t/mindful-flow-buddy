
import React, { createContext, useContext, useState, useEffect } from 'react';

type User = {
  id: string;
  name: string;
  sessions: {
    date: string;
    messages: Array<{
      role: 'user' | 'bot';
      content: string;
      timestamp: string;
    }>;
  }[];
} | null;

interface UserContextType {
  user: User;
  login: (name: string) => void;
  logout: () => void;
  addMessage: (role: 'user' | 'bot', content: string) => void;
  currentSession: {
    date: string;
    messages: Array<{
      role: 'user' | 'bot';
      content: string;
      timestamp: string;
    }>;
  };
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [currentSession, setCurrentSession] = useState({
    date: new Date().toISOString().split('T')[0],
    messages: []
  });

  useEffect(() => {
    // Load user data from localStorage on mount
    const storedUser = localStorage.getItem('mindfulUser');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      
      // Set current session to the last one or create a new one
      if (parsedUser.sessions && parsedUser.sessions.length > 0) {
        const lastSession = parsedUser.sessions[parsedUser.sessions.length - 1];
        const today = new Date().toISOString().split('T')[0];
        
        if (lastSession.date === today) {
          setCurrentSession(lastSession);
        } else {
          const newSession = {
            date: today,
            messages: []
          };
          setCurrentSession(newSession);
          setUser(prev => {
            if (!prev) return null;
            const updatedUser = {
              ...prev,
              sessions: [...prev.sessions, newSession]
            };
            localStorage.setItem('mindfulUser', JSON.stringify(updatedUser));
            return updatedUser;
          });
        }
      }
    }
  }, []);

  const login = (name: string) => {
    const newUser = {
      id: `user_${Date.now()}`,
      name,
      sessions: [{
        date: new Date().toISOString().split('T')[0],
        messages: []
      }]
    };
    
    setUser(newUser);
    setCurrentSession(newUser.sessions[0]);
    localStorage.setItem('mindfulUser', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mindfulUser');
  };

  const addMessage = (role: 'user' | 'bot', content: string) => {
    const newMessage = {
      role,
      content,
      timestamp: new Date().toISOString()
    };

    const updatedSession = {
      ...currentSession,
      messages: [...currentSession.messages, newMessage]
    };

    setCurrentSession(updatedSession);

    if (user) {
      const updatedSessions = user.sessions.map(session => 
        session.date === updatedSession.date ? updatedSession : session
      );

      const updatedUser = {
        ...user,
        sessions: updatedSessions
      };

      setUser(updatedUser);
      localStorage.setItem('mindfulUser', JSON.stringify(updatedUser));
    }
  };

  return (
    <UserContext.Provider value={{ 
      user, 
      login, 
      logout, 
      addMessage,
      currentSession 
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
