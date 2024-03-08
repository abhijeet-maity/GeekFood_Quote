import React from 'react';
import logo from './assets/logo.svg';
import './NavBar.css';
import NavItem from './NavItem.jsx';
import Button from './Button.jsx';

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='logo'>
          <img src={logo} alt="Logo" />
          <h2>GeekFoods</h2>
        </div>
        <div className='NavItem'>
            <NavItem name= "Home"/>
            <NavItem name= "Quote"/>
            <NavItem name= "Resturants"/>
            <NavItem name= "Foods"/>
            <NavItem name= "Contact"/>
        </div>
        <div className='button'>
            <Button text= "Get Started"  textColor="White"/>
        </div>
    </div>
  )
}

export default Navbar