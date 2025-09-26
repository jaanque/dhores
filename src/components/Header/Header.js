import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">ByHours Clone</a>
      </div>
      <nav>
        <ul>
          <li><a href="#">Regístrate</a></li>
          <li><a href="#">Iniciar sesión</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;