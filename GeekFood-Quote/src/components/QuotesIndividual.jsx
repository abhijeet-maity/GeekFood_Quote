import React from 'react';
import './NavBar.css';

const QuotesIndividual = (props) => {
  return (
    <div id='quotes'>
        <h1>{props.text}</h1>
        <p>{props.author}</p>
    </div>
  )
}

export default QuotesIndividual