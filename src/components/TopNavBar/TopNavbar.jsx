import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import "../TopNavBar/TopNavbar.css";
import {Button} from '../TopNavBar/Button.jsx';

const TopNavbar = () => {
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
     <Link to ="/" className="navbar-logo">
        <img className='logo' src="./logo_small@4x.png" alt="logo image"/>
        </Link>
      <div className="navbar-container">
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
      
          {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
          {button && <Button buttonStyle='btn--outline-in'>Sign In</Button>}
      </div>
    </nav>
  )
}

export default TopNavbar;
