import MyProvider from './context/MyProvider.js';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import LandingPage from './components/Landing_Page/LandingPage.jsx';
import SignUpPage from './components/Sign_Up_Page/SignUpPage.jsx'
import SignInPage from './components/Login_Page/LoginPage.jsx'
import CardsPage from './components/Cards_Page/CardsPage.jsx'


function App() {
  // const context = useContext(MyContext);

  return (
    <MyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage /> } />
          <Route path="/sign-up" element={<SignUpPage /> } />
          <Route path="/log-in" element={<SignInPage />} />
          <Route path="/cards" element={< CardsPage />} />
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;
