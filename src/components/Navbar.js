import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState (false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
    
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <nav className='navbar'>
      <Link to="/">
      </Link>
      <div className="navbar-container">

        <Link to ="/" className="navbar-logo">
          Trowit
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'} >
          <li className='nav-item'>
            <Link to ='/home' className='nav-links' onClick={closeMobileMenu}>
              Home 
            </Link>
          </li>
          <li className='nav-item'>
            <Link to ='/features' className='nav-links' onClick={closeMobileMenu}>
             Features
            </Link>
          </li>
          <li className='nav-item'>
            <Link to ='/blog' className='nav-links' onClick={closeMobileMenu}>
             Blog
            </Link>
          </li>
          <li className='nav-item'>
            <Link to ='/order' className='nav-links' onClick={closeMobileMenu}>
              Order your TROWIT Card 
            </Link>
          </li>
        </ul>  
      </div>
    </nav>
  )
}

export default Navbar;
