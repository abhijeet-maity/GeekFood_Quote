import React from 'react';
import './NavBar.css';
import FooterNavItem from './FooterNavItem.jsx';

const FooterNav = () => {
  return (
    <div id='footer-nav'>
        <FooterNavItem text="About"/>
        <FooterNavItem text="Careers"/>
        <FooterNavItem text="History"/>
        <FooterNavItem text="Services"/>
        <FooterNavItem text="Projects"/>
        <FooterNavItem text="Blog"/>
    </div>
  )
}

export default FooterNav