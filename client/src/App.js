import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
// import About from './components/About';
// import Contact from './components/Contact';   
import Header from './components/Header';
import LandingPage from './components/LandingPage';
// import Projects from './components/Projects';
import Sitters from './components/Sitters';


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sitters" element={<Sitters />} />
      </Routes>
    </Router>

  );
}

export default App;