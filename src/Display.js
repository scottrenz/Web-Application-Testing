import React from 'react';
import './App.css';

function Display(props) {
  const balls = parseInt(localStorage.getItem('ball'))
  const strikes = parseInt(localStorage.getItem('strike'))
  return (
    <div style={{textAlign: 'left',marginLeft: '20%', border: 'medium solid black',width: '500px'}} >
    <ul>Count</ul>
    <li style={{marginLeft: '20%',width: '500px'}}>Balls: {balls}</li>
    <li style={{marginLeft: '20%',width: '500px'}}>Strikes: {strikes}</li>
    </div>
    );
}

export default Display;
