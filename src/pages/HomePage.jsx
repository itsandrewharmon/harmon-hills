import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="container">
      <header className="navbar">
        <div><strong>Harmon Hills Adventure & Campground</strong></div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/bunkhouse/1">Reservations</Link>
        </nav>
      </header>
      <h1 className="title">Harmon Hills Waiver</h1>
      <p>All persons who enter Harmon Hills property must complete a waiver.</p>
      <a href="https://app.waiverelectronic.com/render/templateByRefId/Harmon_Hills_Waiver" target="_blank" rel="noopener noreferrer">
        <button>Waiver</button>
      </a>
    </div>
  );
}
