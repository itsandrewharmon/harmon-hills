
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BunkhouseDetail from "./pages/BunkhouseDetail";
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="nav-bar">
          <Link to="/">Home</Link>
          <div className="dropdown">
            <button className="dropbtn">Reservations</button>
            <div className="dropdown-content">
              <Link to="/bunkhouse/keaton">Keaton's Cabin</Link>
              <Link to="/bunkhouse/kaelee">Kaelee's Cabin</Link>
              <Link to="/bunkhouse/cassie">Cassie's Cabin</Link>
              <Link to="/bunkhouse/andrew">Andrew's Cabin</Link>
              <Link to="/bunkhouse/mackenzie">Mackenzie's Cabin</Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/bunkhouse/:name" element={<BunkhouseDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
