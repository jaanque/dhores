import React from 'react';
import './Listings.css';

const listings = [
  {
    id: 1,
    title: 'Oficina moderna en el centro',
    description: 'Espacio de trabajo totalmente equipado con luz natural.',
    price: '25€/hora',
    image: 'https://via.placeholder.com/300x200.png?text=Oficina'
  },
  {
    id: 2,
    title: 'Jardín con piscina para eventos',
    description: 'Ideal para celebraciones al aire libre.',
    price: '50€/hora',
    image: 'https://via.placeholder.com/300x200.png?text=Jardín'
  },
  {
    id: 3,
    title: 'Salón de actos para conferencias',
    description: 'Capacidad para 100 personas, con proyector y sonido.',
    price: '75€/hora',
    image: 'https://via.placeholder.com/300x200.png?text=Salón+de+actos'
  },
];

const Listings = () => {
  return (
    <div className="listings-container">
      <h2>Espacios populares</h2>
      <div className="listings-grid">
        {listings.map(listing => (
          <div key={listing.id} className="listing-card">
            <img src={listing.image} alt={listing.title} />
            <div className="listing-info">
              <h3>{listing.title}</h3>
              <p>{listing.description}</p>
              <span>{listing.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;