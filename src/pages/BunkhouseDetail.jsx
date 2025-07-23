
import React from 'react';
import { useParams } from 'react-router-dom';

const bunkhouseInfo = {
  keaton: {
    title: "Bunkhouse 2 (A-frame: Keaton's Cabin)",
    description: "A cozy A-frame cabin near the bathhouse and trails to Hollerwood. Sleeps 6, includes kitchenette and lofted sleeping area.",
  },
  kaelee: {
    title: "Bunkhouse 3 (A-frame: Kaelee's Cabin)",
    description: "Identical cozy A-frame bunkhouse near bathhouse and trails to Hollerwood. Sleeps 6, includes kitchenette and lofted sleeping area.",
  },
  cassie: {
    title: "Bunkhouse 1 (Cassie's Cabin)",
    description: "Comfortable 1-room cabin directly next to bathhouse. Sleeps 6.",
  },
  andrew: {
    title: "Bunkhouse 4 (Andrew's Cabin)",
    description: "Comfortable 1-room cabin themed after an old western with private porch and access to nearby trails. Sleeps 6.",
  },
  mackenzie: {
    title: "Bunkhouse 5 (Mackenzie's Cabin)",
    description: "Charming cabin nestled in a quiet corner. Ideal for small families. Sleeps 6.",
  },
};

function BunkhouseDetail() {
  const { name } = useParams();
  const bunkhouse = bunkhouseInfo[name];

  if (!bunkhouse) return <h2>Cabin not found.</h2>;

  return (
    <div className="container">
      <h1 className="title">{bunkhouse.title}</h1>
      <p>{bunkhouse.description}</p>

      <div className="booking-form">
        <h3>Select a Date</h3>
        <input type="date" />
        <br />
        <button style={{ marginTop: "1rem" }}>Confirm Reservation</button>
      </div>
    </div>
  );
}

export default BunkhouseDetail;
