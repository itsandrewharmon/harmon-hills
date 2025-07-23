import React from 'react';
import { useParams } from 'react-router-dom';

const bunkhouses = {
  1: {
    name: "Bunkhouse 1 (A-frame: Keaton's Cabin)",
    description: "A cozy A-frame cabin near the bathhouse and trails to Hollerwood. Sleeps 6, includes kitchenette and lofted sleeping area.",
    images: ["keatoncabininside.jpg", "keatoncabininside2.jpg", "keatoncabinoutside.jpg"]
  },
  2: {
    name: "Bunkhouse 2 (A-frame: Kaelee's Cabin)",
    description: "Identical cozy A-frame bunkhouse near bathhouse and trails to Hollerwood. Sleeps 6, includes kitchenette and lofted sleeping area.",
    images: ["Kaeleecabininside.jpg", "kaeleecabininside2.jpg", "Kaeleecabinoutside.jpg"]
  },
  3: {
    name: "Bunkhouse 3 (Cassie's Cabin)",
    description: "Comfortable 1-room cabin directly next to bathhouse. Sleeps 6.",
    images: ["cassiecabininside.jpg", "cassiecabininside1.jpg", "cassiecabininside3.jpg", "Cassiecabinoutside.jpg"]
  },
  4: {
    name: "Bunkhouse 4 (Andrew's Cabin)",
    description: "Comfortable 1-room cabin themed after an old western with private porch and access to nearby trails. Sleeps 6.",
    images: ["andrewcabininside.jpg", "andrewcabininside2.jpg", "andrewcabininside3.jpg", "andrewcabininside4.jpg", "andrewcabinoutside.jpg"]
  },
  5: {
    name: "Bunkhouse 5 (Mackenzie's Cabin)",
    description: "Charming cabin nestled in a quiet corner. Ideal for small families. Sleeps 6.",
    images: []
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
            src={require(`../../assets/images/${img}`)}
            alt={bunkhouse.name}
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