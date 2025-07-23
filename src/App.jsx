import React from 'react';
import AppRoutes from './routes/AppRoutes';
// ✅ Correct (JSX-aware bundlers infer .jsx)
import { AuthProvider } from './context/AuthContext';
import Books from './pages/Books';


import './styles/globals.css';       // global resets + variables
import './styles/layout.css';        // flex/grid/container/etc.
import './styles/buttons.css';       // button styles
import './styles/forms.css';         // form elements
import './styles/theme.css';         // optional light/dark
import './styles/reset.css';         // browser reset

function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

export default App;
