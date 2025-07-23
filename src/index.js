import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BunkhouseDetail from './pages/BunkhouseDetail';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bunkhouses/:id" element={<BunkhouseDetail />} />
    </Routes>
  </Router>
);