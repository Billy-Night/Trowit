import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Navbar from './components/Navbar';


function App() {
  // const context = useContext(MyContext);

  return (
    <Router>
    <Navbar />
    <Routes>
      
    </Routes>
  </Router>
  );
}

export default App;
