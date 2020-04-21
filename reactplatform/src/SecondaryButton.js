import React from 'react';
import './components.css';

function SecondaryButton (props) {
return (
  <button type="button" 
  class="btn sekundärknapp">
    {props.text}
    </button>
)
}

export default SecondaryButton