import React from 'react';

import './style.css';

export default function Footer() {
  return (
    <footer>
      <footer>
        <div className="footer-title">Week Code BootCamp Super Full Stack</div>
        <div className="footer-copyright">{(new Date().getFullYear())} Copyright: One Bit Code</div>
      </footer>
    </footer>
  );
}
