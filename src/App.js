import MyProvider from './context/MyProvider.js';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Navbar from './components/Navbar';
import LandingPageHeroSection from './components/Landing_Page/LandingPageHeroSection.js';

function App() {
  // const context = useContext(MyContext);

  return (
    <MyProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPageHeroSection /> } />
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;
