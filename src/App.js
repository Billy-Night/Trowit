import MyProvider from './context/MyProvider.js';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Navbar from './components/Navbar';
import LandingPageHeroSection from './components/Landing_Page/LandingPageHeroSection.js';
import ImpressYourPeers from './components/Impress_your_peers/ImpressYourPeers.js';


function App() {
  // const context = useContext(MyContext);

  return (
    <MyProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPageHeroSection /> } />
          <Route path="/" element={<ImpressYourPeers /> } />
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;
