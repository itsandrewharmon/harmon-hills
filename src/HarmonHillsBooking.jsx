import React from "react";
import { useState } from "react";
import './styles.css';

export default function HarmonHillsBooking() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedType, setSelectedType] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  const accommodations = {
    bunkhouse: [
      {
        name: "Bunkhouse 1 (A-frame: Keaton's Cabin)",
        description:
          "A cozy A-frame cabin near the bathhouse and trails to Hollerwood. Sleeps 6, includes kitchenette and lofted sleeping area.",
      },
      {
        name: "Bunkhouse 2 (A-frame: Kaelee's Cabin)",
        description: "Identical cozy A-frame bunkhouse near bathouse and trails to Hollerwood. Sleeps 6, includes kitchenette and lofted sleeping area.",
      },
      {
        name: "Bunkhouse 3 (Cassie's Cabin)",
        description: "Comfortable 1-room cabin directly next to bathhouse. Sleeps 6.",
      },
      {
        name: "Bunkhouse 4 (Andrew's Cabin)",
        description: "Comfortable 1-room cabin themed after an old western with private porch and access to nearby trails. Sleeps 6.",
      },
      {
        name: "Bunkhouse 5 (Mackenzie's Cabin)",
        description: "Charming cabin nestled in a quiet corner. Ideal for small families. Sleeps 6.",
      },
    ],
    rv: [
      {
        name: "RV Site A",
        description: "Spacious pull-through RV site with full hookups, picnic table, and fire pit.",
      },
      {
        name: "RV Site B",
        description: "Spacious pull-through RV site with full hookups, picnic table, and fire pit.",
      },
    ],
    tent: [
      {
        name: "Tent Site 1",
        description: "Primitive site under the trees. Picnic area and fire pit and nearby access to bathouse.",
      },
      {
        name: "Tent Site 2",
        description: "Primitive site close to trail entrance. Picnic area and fire pit and nearby access to bathouse",
      },
    ],
  };

  const handleBooking = () => {
    alert(`Booking confirmed for ${selectedOption} on ${selectedDate}`);
  };

  return (
    <div className="container">
      <nav className="nav-bar">
        <button onClick={() => {
          setSelectedType(null);
          setSelectedOption("");
          setSelectedDate("");
        }}>Home</button>

        <div className="dropdown">
          <button className="dropbtn">Reservations</button>
          <div className="dropdown-content">
            <a href="#" onClick={() => setSelectedType("bunkhouse")}>Bunkhouses</a>
            <a href="#" onClick={() => setSelectedType("rv")}>RV Sites</a>
            <a href="#" onClick={() => setSelectedType("tent")}>Tent Sites</a>
          </div>
        </div>
      </nav>

      <h1 className="title">Harmon Hills Adventures & Campgrounds</h1>
      <p className="subtitle">Your adventure starts here! Reserve your stay with us!</p>

      {!selectedType && (
        <div className="waiver-section">
          <h2>Harmon Hills Waiver</h2>
          <p>All persons who enter Harmon Hills property must complete a waiver.</p>
          <a href="https://app.waiverelectronic.com/render/templateByRefId/Harmon_Hills_Waiver" target="_blank" rel="noopener noreferrer">
            <button className="waiver-button">Waiver</button>
          </a>
        </div>
      )}

      {selectedType && (
        <>
          <div className="card-grid">
            {accommodations[selectedType].map((option, index) => (
              <div
                key={index}
                className={`card ${selectedOption === option.name ? "selected" : ""}`}
                onClick={() => setSelectedOption(option.name)}
              >
                <h2>{option.name}</h2>
                <p>{option.description}</p>
              </div>
            ))}
          </div>

          <div className="booking-form">
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
            >
              Confirm Reservation
            </button>
          </div>
        </>
      )}
    </div>
  );
}
