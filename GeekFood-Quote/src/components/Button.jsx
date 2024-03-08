import React from 'react';
import './NavBar.css';

const Button = (props) => {

  // const inlineStyle = {
  //   padding: '10px 15px',
  //   borderRadius: '10px',
  //   backgroundColor: 'Blue',
  //   border: 'none',
  //   color: 'white'
  // };

  return (
    <button className='btn' 
    style={{backgroundColor: props.bgColor, 
            color: props.textColor,
            paddingTop: props.paddingVertical,
            paddingBottom: props.paddingVertical,
            paddingLeft: props.paddingSides,
            paddingRight: props.paddingSides
          }}
    >
    {props.text}
    </button>
  )
}

Button.defaultProps = {
  textColor: 'White',
  bgColor: '#1E40AF',
  paddingVertical: '10px',
  paddingSides: '20px'
};

export default Button