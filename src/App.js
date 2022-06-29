import MyProvider from './context/MyProvider.js';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing_Page/LandingPage.jsx';
import SignUpPage from './pages/Sign_Up_Page/SignUpPage.jsx';
import LoginPage from './pages/Login_Page/LoginPage.jsx';
import CardsPage from './pages/Cards_Page/CardsPage.jsx';
import Contacts from './pages/Contacts_Page/Contacts.jsx';
import CreateNewCard from './pages/Cards_Page/CreateNewCard.jsx';
import BackgrdImgGen from './components/Background_Image_Generator/BackgrdImgGen.jsx';
import EmailGen from './pages/Email_Generator_Page/EmailGen.jsx';
import Settings from './pages/Settings_Page/Settings.jsx';
import OrderCard from './pages/Order_Physical_Card_Page/OrderCard.jsx';
import TermsConditions from './pages/Terms_and_Conditions/TermsConditions.jsx';
import Error from './pages/Error.jsx';

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
          <Route path="/backgrounds" element={<BackgrdImgGen />} />
          <Route path="/email-signatures" element={<EmailGen />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/order-card" element={<OrderCard />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;
