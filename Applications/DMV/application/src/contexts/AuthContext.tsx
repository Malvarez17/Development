import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthContextType } from '@/types';
import { MOCK_CREDENTIALS, MOCK_USER, AUTH_ERRORS } from '@/constants/mockData';
import { saveAuthToken, saveUserData, loadAuthToken, loadUserData, removeAuthToken, removeUserData } from '@/utils/storage';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  // Load auth state from session storage on mount
  useEffect(() => {
    const token = loadAuthToken();
    const savedUser = loadUserData();

    if (token && savedUser) {
      setIsAuthenticated(true);
      setUser(savedUser);
    }
  }, []);

  const login = async (username: string, password: string): Promise<void> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Check credentials
    if (username === MOCK_CREDENTIALS.username && password === MOCK_CREDENTIALS.password) {
      // Generate mock token
      const token = `mock-token-${Date.now()}`;

      // Save to session storage
      saveAuthToken(token);
      saveUserData(MOCK_USER);

      // Update state
      setIsAuthenticated(true);
      setUser(MOCK_USER);
    } else {
      throw new Error(AUTH_ERRORS.INVALID_CREDENTIALS);
    }
  };

  const logout = (): void => {
    // Clear session storage
    removeAuthToken();
    removeUserData();

    // Update state
    setIsAuthenticated(false);
    setUser(null);
  };

  const value: AuthContextType = {
    isAuthenticated,
    user,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
