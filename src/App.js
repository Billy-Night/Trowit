import MyProvider from './context/MyProvider.js';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import LandingPage from './components/Landing_Page/LandingPage.jsx';
import SignUpPage from './components/Sign_Up_Page/SignUpPage.jsx';
import LoginPage from './components/Login_Page/LoginPage.jsx';
import CardsPage from './components/Cards_Page/CardsPage.jsx';
import Contacts from './components/Contacts_Page/Contacts.jsx';
import CreateNewCard from './components/Cards_Page/CreateNewCard.jsx';
import BackgrdImgGen from './components/Background_Image_Generator/BackgrdImgGen.jsx';


function App() {
  // const context = useContext(MyContext);

  return (
    <MyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage /> } />
          <Route path="/sign-up" element={<SignUpPage /> } />
          <Route path="/log-in" element={<LoginPage />} />
          <Route path="/cards" element={< CardsPage />} />
          <Route path="/cards/newcard" element={< CreateNewCard />} />
          <Route path="/contacts" element={< Contacts />} />
          <Route path="/background-image-gen" element={< BackgrdImgGen />} />
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;
