import React from 'react';
import './components.css';

class PrimaryButton extends React.Component {
  constructor(props) {
    super();
    this.state = {
      disable: false,
    };
  }

  render() {
    return (
      <button class="mdc-button mdc-button--raised primärknapp">
        <span class="mdc-button__ripple"></span>
        <p>{this.props.buttonText}</p>
      </button>
    );
  }
}

export default PrimaryButton;
