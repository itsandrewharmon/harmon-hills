import React from 'react';
import { useParams } from 'react-router-dom';
import keaton1 from '../images/keatoncabininside.jpg';
import keaton2 from '../images/keatoncabininside2.jpg';
import keaton3 from '../images/keatoncabinoutside.jpg';

const bunkhouses = {
  1: {
    name: "Bunkhouse 1 (A-frame: Keaton's Cabin)",
    description: "A cozy A-frame cabin near the bathhouse and trails to Hollerwood. Sleeps 6.",
    images: [keaton1, keaton2, keaton3],
  },
};

export default function BunkhouseDetail() {
  const { id } = useParams();
  const bunkhouse = bunkhouses[id];

  if (!bunkhouse) {
    return <div className="container"><h2>Bunkhouse not found</h2></div>;
  }

  return (
    <div className="container">
      <h1 className="title">{bunkhouse.name}</h1>
      <p className="subtitle">{bunkhouse.description}</p>
      <div className="card-grid">
        {bunkhouse.images.map((img, index) => (
          <img key={index} src={img} alt={`Bunkhouse ${index}`} style={{ width: '100%', borderRadius: '8px' }} />
        ))}
      </div>
      <div className="booking-form">
        <h3>Select a Date</h3>
        <input type="date" />
        <br />
        <button style={{ marginTop: '1rem' }}>Reserve This Cabin</button>
      </div>
    </div>
  );
}