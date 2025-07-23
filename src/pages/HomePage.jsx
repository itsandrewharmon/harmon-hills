
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles.css'; 

function HomePage() {
  return (
    <div className="container">
      <h1 className="title">Harmon Hills Adventures & Campgrounds</h1>
      <p className="subtitle">Your adventure starts here! Reserve your stay with us!</p>

      <div className="waiver-section">
        <h2>Harmon Hills Waiver</h2>
        <p>All persons who enter Harmon Hills property must complete a waiver.</p>
        <a href="https://app.waiverelectronic.com/render/templateByRefId/Harmon_Hills_Waiver" target="_blank" rel="noopener noreferrer">
          <button className="waiver-button">Waiver</button>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
