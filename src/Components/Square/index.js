import React from 'react';
import styles from '/css/style.css';

export default function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }