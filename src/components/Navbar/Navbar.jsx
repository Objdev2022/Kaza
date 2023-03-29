import React from 'react';
import { NavLink } from 'react-router-dom';

import "./Navbar.scss";

function Navbar() {
  return <nav className='navbar'>
    <NavLink to ="/">
    <div className='navbar_logo'>
        <img src="/logo.png" alt="logo"></img>
    </div>
    </NavLink>
    <NavLink to ="/">
       <div>Acceuil</div>
    </NavLink>
    <NavLink to ="/about">
       <div>A propos</div>
    </NavLink>
  
  </nav>
  
}

export default Navbar
