import React from 'react';
import './components.css';

class Button extends React.Component {
    constructor(props) {
        super();
        this.state = {
            disable:false
        }
    }

    render() {
        return (
           <div className={this.props.className} >
               <p>{this.props.buttonText}</p>
           </div>
        )
    }
}

export default Button;