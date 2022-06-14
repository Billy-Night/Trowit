import React, { useState } from 'react'
import './SideNavBar.css';
import { Link } from 'react-router-dom';


const SideNavBar = () => {

  
    const [show, setShow] = useState(false)

    return (
      <main className={show ? 'space-toggle' : null}>
      
  
  
        <aside className={`sidebar ${show ? 'show' : null}`}>
         <nav className="nav">
          <div>
          <div className='nav-list'  onMouseOver={() => setShow(!show)}>

          <Link to='/settings' className='nav-link' onMouseOver={() => setShow(!show)}>
              <img src="./Logo-Trowit-white.png" alt="" className="nav-link-icon" />
              <span className="nav-link-name"></span>
            </Link>

            <Link to='/cards' className='nav-link' onMouseOver={() => setShow(!show)}>
              <img src="./id-card.png" alt="" className="nav-link-icon" />
              <span className="nav-link-name">Cards</span>
            </Link>
  
        
            <Link to='/contacts' className='nav-link'>
              <img src="./contacts.png" alt="" className="nav-link-icon" />
              <span className="nav-link-name">Contacts</span>
            </Link>
            <Link to='/backgrounds' className='nav-link'>
              <img src="./backgrounds.png" alt="" className="nav-link-icon" />
              <span className="nav-link-name">Backgrounds</span>
            </Link>
            <Link to='/email-signatures' className='nav-link'>
              <img src="./email.png" alt="" className="nav-link-icon" />
              <span className="nav-link-name">Email Signatures</span>
            </Link>
            <Link to='/settings' className='nav-link'>
              <img src="./settings.png" alt="" className="nav-link-icon" />
              <span className="nav-link-name">Settings</span>
            </Link>
            <Link to='/order-card' className='nav-link'>
              <img src="./card-yellow.png" alt="" className="nav-link-icon" />
              <span className="nav-link-name">Order Physical Card</span>
            </Link>
  
            
  
             </div>
            </div>        
          </nav>
        </aside>
      </main>
    );
  };

export default SideNavBar