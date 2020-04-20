import React from 'react';
import './components.css';

class SecondaryButton extends React.Component {
  constructor(props) {
    super();
    this.state = {
      disable: false,
    };
  }

  render() {
    return (
        <button class="mdc-button mdc-button--outlined sekundärknapp">  
        <span class="mdc-button__ripple"></span> 
        <p>
            {this.props.buttonText}
            </p>
            </button>
    );
  }
}

export default SecondaryButton;