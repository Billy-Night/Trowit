import MyProvider from './context/MyProvider.js';

//!imported the new context which handles storing the authentication
import { AuthContext } from './context/AuthContext';
//! import the useLocalStorage hook
import { useLocalStorage } from './hooks/useLocalStorage';

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
import OrderCrdBasic from './pages/Order_Physical_Card_Page/OrderCrdBasic.jsx';
import LPFeatures from './pages/Landing_Page/Features_Section/LPFeatures.jsx';
import OrderCrdCustomized from './pages/Order_Physical_Card_Page/OrderCrdCust.jsx';
import OrderCrdPremium from './pages/Order_Physical_Card_Page/OrderCrdPrem.jsx';
import ContactCardDesign from './pages/View_Contact_Card_Page/ContactCardDesign.jsx';
import IndividualCardPage from './pages/Cards_Page/IndividualCardPage';
import LayoutTestPage from './pages/LayoutTestPage/LayoutTestPage.jsx';


function App() {
  // const context = useContext(MyContext);
  //! deconstruct the object stored in local storage
  const [storedValue, setValue] = useLocalStorage('authToken', null);

  return (
    <AuthContext.Provider
      value={{ authToken: storedValue, setAuthToken: setValue }}
    >
      <MyProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/log-in" element={<LoginPage />} />
            <Route path="/features" element={<LPFeatures />} />
            <Route path="/termsandconditions" element={<TermsConditions />} />
            <Route path="/cards" element={<CardsPage />} />
            <Route path="/cards/newcard" element={<CreateNewCard />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/backgrounds" element={<BackgrdImgGen />} />
            <Route path="/email-signatures" element={<EmailGen />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/order-card" element={<OrderCard />} />
            <Route path="/order-cardb" element={<OrderCrdBasic />} />
            <Route path="/order-cardcust" element={<OrderCrdCustomized />} />
            <Route path="/order-cardprem" element={<OrderCrdPremium />} />
            <Route path="/error" element={<Error />} />
            <Route path="/contact-card" element={<ContactCardDesign />} />
            <Route path="cards/individual/card/:id" element={<IndividualCardPage />} />
            <Route path="/layout" element={<LayoutTestPage />} />
          </Routes>
        </Router>
      </MyProvider>
    </AuthContext.Provider>
  );
}

export default App;
