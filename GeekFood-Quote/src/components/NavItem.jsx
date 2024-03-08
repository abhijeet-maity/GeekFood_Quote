import React from 'react';
import './NavBar.css';

const NavItem = (props) => {
  return (
    console.log(props),
    <div className='navItem'>{props.name}</div>
  )
}

export default NavItem