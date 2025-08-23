import React from 'react';
import '../styles/reset.css';
import '../styles/variables.css';
import '../styles/globals.css';
import '../styles/layout.css';
import '../styles/buttons.css';
import '../styles/forms.css';
import '../styles/theme.css';
import '../styles/footer.css';
import '../styles/navbar.css';

export default function Footer() {
  return (
    <footer className="footer footer a footer a:hover text-center">
      <p className='p'>© {new Date().getFullYear()} The Owl's Library. All rights reserved. Made with ❤️ by Rupsha Nandi</p>
    </footer>
  );
}
