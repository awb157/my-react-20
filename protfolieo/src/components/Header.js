import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
        <h2>Austin Bennett</h2>
        <ul className='header-list'>
        <li><Link to="/">about</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        </ul>
    </div>
  );
}

export default Header;