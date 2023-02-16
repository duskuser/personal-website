import logo from './logo.svg';
import './App.css';

// Import Routes
import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
