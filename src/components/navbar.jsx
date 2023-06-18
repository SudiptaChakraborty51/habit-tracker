import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/archived-habits">Archived Habits</NavLink>
    </nav>
  )
}

export default Navbar
