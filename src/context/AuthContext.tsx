import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthState, UserProfile } from '../types/auth';

interface AuthContextType extends AuthState {
  login: (user: UserProfile) => void;
  register: (user: UserProfile) => void;
  logout: () => void;
  updateInterests: (interests: string[]) => void;
  isAuthModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [state, setState] = useState<AuthState>({
    isLoggedIn: false,
    user: null,
    hasCompletedOnboarding: false,
  });

  useEffect(() => {
    const savedAuth = localStorage.getItem('vivu_auth');
    if (savedAuth) {
      setState(JSON.parse(savedAuth));
    }
  }, []);

  const saveState = (newState: AuthState) => {
    setState(newState);
    localStorage.setItem('vivu_auth', JSON.stringify(newState));
  };

  const login = (user: UserProfile) => {
    saveState({
      isLoggedIn: true,
      user,
      hasCompletedOnboarding: true,
    });
  };

  const register = (user: UserProfile) => {
    saveState({
      isLoggedIn: true,
      user,
      hasCompletedOnboarding: false,
    });
  };

  const logout = () => {
    const newState = {
      isLoggedIn: false,
      user: null,
      hasCompletedOnboarding: false,
    };
    setState(newState);
    localStorage.removeItem('vivu_auth');
  };

  const updateInterests = (interests: string[]) => {
    if (state.user) {
      saveState({
        ...state,
        user: { ...state.user, interests },
        hasCompletedOnboarding: true,
      });
    }
  };

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <AuthContext.Provider value={{ 
      ...state, 
      login, 
      register, 
      logout, 
      updateInterests,
      isAuthModalOpen,
      openAuthModal,
      closeAuthModal
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
