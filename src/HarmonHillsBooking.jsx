import React from "react";
import { useState } from "react";

export default function HarmonHillsBooking() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedType, setSelectedType] = useState("bunkhouse");
  const [selectedOption, setSelectedOption] = useState("");

  const accommodations = {
    bunkhouse: [
      {
        name: "Bunkhouse 1 (A-frame: Keaton's Cabin)",
        description:
          "A cozy A-frame cabin near the bathhouse and trails to Hollerwood. Sleeps 6, includes kitchenette and lofted sleeping areas.",
      },
      {
        name: "Bunkhouse 2 (A-frame: Kaelee's Cabin)",
        description: "Rustic A-frame bunkhouse with great views and easy trail access. Sleeps 4.",
      },
      {
        name: "Bunkhouse 3 (Cassie's Cabin)",
        description: "Comfortable cabin with modern amenities and nearby fire ring. Sleeps 4.",
      },
      {
        name: "Bunkhouse 4 (Andrew's Cabin)",
        description: "Spacious bunkhouse with private porch and access to nearby trails. Sleeps 6.",
      },
      {
        name: "Bunkhouse 5 (Mackenzie's Cabin)",
        description: "Bright, charming cabin nestled in a quiet corner. Ideal for small families. Sleeps 4.",
      },
    ],
    rv: [
      {
        name: "RV Site A",
        description: "Spacious pull-through site with full hookups and picnic table.",
      },
      {
        name: "RV Site B",
        description: "Shaded RV site near bathhouse. Electric and water hookups included.",
      },
    ],
    tent: [
      {
        name: "Tent Site 1",
        description: "Primitive site under the trees. Fire ring and nearby water access.",
      },
      {
        name: "Tent Site 2",
        description: "Tent site with gazebo and picnic area. Close to trail entrance.",
      },
    ],
  };

  const handleBooking = () => {
    alert(`Booking confirmed for ${selectedOption} on ${selectedDate}`);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center' }}>
        Harmon Hills Adventures & Campgrounds
      </h1>
      <p style={{ textAlign: 'center' }}>
        Reserve your spot now! Choose from bunkhouses, RV sites, or tent sites.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '1rem 0' }}>
        <button onClick={() => setSelectedType("bunkhouse")}>Bunkhouses</button>
        <button onClick={() => setSelectedType("rv")}>RV Sites</button>
        <button onClick={() => setSelectedType("tent")}>Tent Sites</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {accommodations[selectedType].map((option, index) => (
          <div
            key={index}
            onClick={() => setSelectedOption(option.name)}
            style={{
              border: selectedOption === option.name ? '2px solid blue' : '1px solid gray',
              padding: '1rem',
              cursor: 'pointer',
            }}
          >
            <h2>{option.name}</h2>
            <p>{option.description}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h3>Select a Date</h3>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        <br />
        <button
          onClick={handleBooking}
          disabled={!selectedOption || !selectedDate}
          style={{ marginTop: '1rem' }}
        >
          Confirm Reservation
        </button>
      </div>
    </div>
  );
}
