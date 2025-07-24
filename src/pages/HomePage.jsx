import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

export default function HomePage() {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="main-title">Harmon Hills Adventure & Campground</h1>
        <p className="subtitle">Your adventure starts here! Reserve your stay with us.</p>
        <nav className="nav-bar">
          <Link to="/" className="nav-link">Home</Link>

          <div className="dropdown">
            <button className="dropbtn">Reservations ▾</button>
            <div className="dropdown-content">
              <Link to="/bunkhouses/1">Bunkhouse 1</Link>
              <Link to="/bunkhouses/2">Bunkhouse 2</Link>
              <Link to="/bunkhouses/3">Bunkhouse 3</Link>
              <Link to="/bunkhouses/4">Bunkhouse 4</Link>
              <Link to="/bunkhouses/5">Bunkhouse 5</Link>
            </div>
          </div>
        </nav>
      </header>

      <section className="waiver-section">
        <h2>Harmon Hills Waiver</h2>
        <p>All persons who enter Harmon Hills property must complete a waiver.</p>
        <a href="https://app.waiverelectronic.com/render/templateByRefId/Harmon_Hills_Waiver" target="_blank" rel="noopener noreferrer">
          <button className="waiver-button">Complete Waiver</button>
        </a>
      </section>
    </div>
  );
}
