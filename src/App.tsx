import './App.css';

import React from 'react';

import { AuthProvider } from './hooks/Context/AuthContext';
import RoutesApp from './routes/routes';
const App = () => {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
};

export default App;
