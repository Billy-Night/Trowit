import MyProvider from './context/MyProvider.js';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Navbar from './components/Navbar';
import LandingPageHeroSection from './components/Landing_Page/Heros_section/LandingPageHeroSection';
import ImpressYourPeers from './components/Landing_Page/Impress_your_peers_section/ImpressYourPeers';
import SignUpPage from './components/Sign_Up_Page/SignUpPage.jsx'


function App() {
  // const context = useContext(MyContext);

  return (
    <MyProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPageHeroSection /> } />
          <Route path="/" element={<ImpressYourPeers /> } />
          <Route path="/sign-up" element={ <SignUpPage /> } />
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;
