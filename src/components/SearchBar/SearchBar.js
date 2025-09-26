import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <form className="search-form">
        <div className="form-group">
          <label htmlFor="location">Qué estás buscando?</label>
          <input type="text" id="location" placeholder="Piscina, jardín, oficina..." />
        </div>
        <div className="form-group">
          <label htmlFor="date">Fecha</label>
          <input type="date" id="date" />
        </div>
        <div className="form-group">
          <label htmlFor="time">Hora</label>
          <input type="time" id="time" />
        </div>
        <button type="submit" className="search-button">Buscar</button>
      </form>
      <div className="category-suggestions">
        <span>Sugerencias:</span>
        <ul>
          <li><a href="#">Piscinas</a></li>
          <li><a href="#">Jardines</a></li>
          <li><a href="#">Oficinas</a></li>
          <li><a href="#">Salones para eventos</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SearchBar;
