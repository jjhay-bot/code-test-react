import React from 'react'
import './spinner.css';

function Spinner(show) {

  return show ? <div className="loader"></div> : null;
}


export default Spinner;
