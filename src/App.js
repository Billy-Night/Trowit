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
import EmailGen from './components/Email_Generator_Page/EmailGen.jsx';
import Settings from './components/Settings_Page/Settings.jsx';
import OrderCard from './components/Order_Physical_Card_Page/OrderCard.jsx';
import TermsConditions from './components/Terms_and_Conditions/TermsConditions.jsx';

function App() {
  // const context = useContext(MyContext);

  return (
    <MyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/log-in" element={<LoginPage />} />
          <Route path="/termsandconditions" element={<TermsConditions/>} />
          <Route path="/cards" element={<CardsPage />} />
          <Route path="/cards/newcard" element={<CreateNewCard />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/background-image-gen" element={<BackgrdImgGen />} />
          <Route path="/email-gen" element={<EmailGen />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/order-card" element={<OrderCard />} />
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;
