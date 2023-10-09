import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import useAuth from './../useAuth';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  authenticated: boolean;
  loading: boolean;
  handleLogin: (email, password) => void;
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
function AuthProvider({ children }: AuthProviderProps) {
  const { authenticated, loading, handleLogin, handleLogout } = useAuth();

  return (
    <AuthContext.Provider value={{ loading, authenticated, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
