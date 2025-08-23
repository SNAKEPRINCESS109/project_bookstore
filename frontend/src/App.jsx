import React from 'react';
import AppRoutes from './routes/AppRoutes';
import ContextProvider from './context/ContextProvider'; // ✅ import your combined context wrapper

// ✅ Global Styles
import './styles/reset.css';
import './styles/variables.css';
import './styles/globals.css';
import './styles/layout.css';
import './styles/buttons.css';
import './styles/forms.css';
import './styles/theme.css';

function App() {
  return (
    <ContextProvider>
      <AppRoutes />
    </ContextProvider>
  );
}

export default App;
