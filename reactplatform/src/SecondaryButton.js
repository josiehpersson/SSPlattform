import React from 'react';
import './components.css';

function SecondaryButton(props) {
  return (
    <button
      type="button"
      class="btn button-outline sekundärknapp"
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      <p>{props.text}</p>
    </button>
  );
}

export default SecondaryButton;
