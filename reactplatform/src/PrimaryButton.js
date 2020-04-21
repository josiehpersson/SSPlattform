import React from 'react';
import './components.css';

function PrimaryButton (props) {
return (
  <button type="button" 
  class="btn primärknapp">
    <p>{props.text}</p>
    </button>
)
}

export default PrimaryButton