import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="container">
      <nav className="nav-bar">
        <button><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link></button>
        <div className="dropdown">
          <button className="dropbtn">Reservations</button>
          <div className="dropdown-content">
            <Link to="/bunkhouses/1">Keaton's Cabin</Link>
            <Link to="/bunkhouses/2">Kaelee's Cabin</Link>
            <Link to="/bunkhouses/3">Cassie's Cabin</Link>
            <Link to="/bunkhouses/4">Andrew's Cabin</Link>
            <Link to="/bunkhouses/5">Mackenzie's Cabin</Link>
          </div>
        </div>
      </nav>

      <h1 className="title">Harmon Hills Adventures & Campgrounds</h1>
      <p className="subtitle">Your adventure starts here! Reserve your stay with us!</p>

      <div className="waiver-section">
        <h2>Harmon Hills Waiver</h2>
        <p>All persons who enter Harmon Hills property must complete a waiver.</p>
        <a
          href="https://app.waiverelectronic.com/render/templateByRefId/Harmon_Hills_Waiver"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="waiver-button">Waiver</button>
        </a>
      </div>
    </div>
  );
}