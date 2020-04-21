import React from 'react';
import './components.css';

function SecondaryButton(props) {
  return (
    <button type="button" class="btn button-outline sekundärknapp">
      <p>{props.text}</p>
    </button>
  );
}

export default SecondaryButton
