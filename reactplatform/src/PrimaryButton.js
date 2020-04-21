import React from 'react';
import './components.css';

function PrimaryButton (props) {
return (
  <button type="button" 
  class="btn primärknapp">
    {props.text}
    </button>
)
}

export default PrimaryButton