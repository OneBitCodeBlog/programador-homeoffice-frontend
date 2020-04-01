import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Navbar() {
  return (
    <nav>
      <div className="nav-buttons">
        <Link to="/">Página Inicial</Link> | <Link to="/about">Sobre nós</Link>
      </div>
    </nav>
  );
}
