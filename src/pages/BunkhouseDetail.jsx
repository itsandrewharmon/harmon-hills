import React from 'react';
import { useParams } from 'react-router-dom';
import keaton1 from '../images/keatoncabininside.jpg';

const bunkhouses = {
  1: {
    name: "Bunkhouse 1 (A-frame: Keaton's Cabin)",
    description: "Cozy A-frame cabin near trails. Sleeps 6.",
    images: [keaton1]
  }
};

export default function BunkhouseDetail() {
  const { id } = useParams();
  const bunkhouse = bunkhouses[id];

  if (!bunkhouse) return <div className="container"><h2>Not Found</h2></div>;

  return (
    <div className="container">
      <h1>{bunkhouse.name}</h1>
      <p>{bunkhouse.description}</p>
      {bunkhouse.images.map((img, i) => (
        <img key={i} src={img} alt={`Bunkhouse ${id}`} />
      ))}
      <div className="booking-form">
        <h3>Select a Date</h3>
        <input type="date" />
        <br />
        <button style={{ marginTop: '1rem' }}>Reserve This Cabin</button>
      </div>
    </div>
  );
}
