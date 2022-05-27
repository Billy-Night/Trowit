import MyProvider from './context/MyProvider.js';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Navbar from './components/Navbar';

function App() {
  // const context = useContext(MyContext);

  return (
    <MyProvider>
      <Router>
      <Navbar />
      <Routes>
      </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;
