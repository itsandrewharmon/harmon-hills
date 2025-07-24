import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BunkhouseDetail from './pages/BunkhouseDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bunkhouses/:id" element={<BunkhouseDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
