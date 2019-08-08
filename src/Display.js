import React from 'react';
import './App.css';

function Display(props) {
  return (
    <div style={{textAlign: 'left',marginLeft: '20%', border: 'medium solid black',width: '500px'}} >
    <ul>Count</ul>
    <li style={{marginLeft: '20%',width: '500px'}}>Balls: {props.ball}</li>
    <li style={{marginLeft: '20%',width: '500px'}}>Strikes: {props.strike}</li>
    </div>
    );
}

export default Display;
