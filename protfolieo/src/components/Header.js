import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div>
        <h2>this is the header page</h2>
        <Link to="/">about</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/resume">Resume</Link>
    </div>
  );
}

export default Header;