import React from 'react';
import { useParams } from 'react-router-dom';

import keaton1 from '../images/keatoncabininside.jpg';
import keaton2 from '../images/keatoncabininside2.jpg';
import keaton3 from '../images/keatoncabinoutside.jpg';

import kaelee1 from '../images/Kaeleecabininside.jpg';
import kaelee2 from '../images/kaeleecabininside2.jpg';
import kaelee3 from '../images/Kaeleecabinoutside.jpg';

import cassie1 from '../images/cassiecabininside.jpg';
import cassie2 from '../images/cassiecabininside1.jpg';
import cassie3 from '../images/cassiecabininside3.jpg';
import cassie4 from '../images/Cassiecabinoutside.jpg';

import andrew1 from '../images/andrewcabininside.jpg';
import andrew2 from '../images/andrewcabininside2.jpg';
import andrew3 from '../images/andrewcabininside3.jpg';
import andrew4 from '../images/andrewcabininside4.jpg';
import andrew5 from '../images/andrewcabinoutside.jpg';

const bunkhouses = {
  1: {
    name: "Bunkhouse 1 (A-frame: Keaton's Cabin)",
    description: "A cozy A-frame cabin near the bathhouse and trails to Hollerwood. Sleeps 6, includes kitchenette and lofted sleeping area.",
    images: [keaton1, keaton2, keaton3]
  },
  2: {
    name: "Bunkhouse 2 (A-frame: Kaelee's Cabin)",
    description: "Identical cozy A-frame bunkhouse near bathhouse and trails to Hollerwood. Sleeps 6, includes kitchenette and lofted sleeping area.",
    images: [kaelee1, kaelee2, kaelee3]
  },
  3: {
    name: "Bunkhouse 3 (Cassie's Cabin)",
    description: "Comfortable 1-room cabin directly next to bathhouse. Sleeps 6.",
    images: [cassie1, cassie2, cassie3, cassie4]
  },
  4: {
    name: "Bunkhouse 4 (Andrew's Cabin)",
    description: "Comfortable 1-room cabin themed after an old western with private porch and access to nearby trails. Sleeps 6.",
    images: [andrew1, andrew2, andrew3, andrew4, andrew5]
  },
  5: {
    name: "Bunkhouse 5 (Mackenzie's Cabin)",
    description: "Charming cabin nestled in a quiet corner. Ideal for small families. Sleeps 6.",
    images: [] // Add images when available
  }
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
          <img
            key={index}
            src={img}
            alt={`${bunkhouse.name} ${index + 1}`}
            style={{ maxWidth: "100%", marginBottom: "1rem", borderRadius: "8px" }}
          />
        ))}
      </div>
      <div className="booking-form">
        <h3>Select a Date</h3>
        <input type="date" />
        <br />
        <button style={{ marginTop: "1rem" }}>Reserve This Cabin</button>
      </div>
    </div>
  );
}
