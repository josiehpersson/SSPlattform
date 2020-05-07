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
      {props.text}
    </button>
  );
}

export default SecondaryButton;
