import React from 'react';
import './components.css'

class InputfältText extends React.Component {
    constructor(props) {
        super()
        this.state = {
            name: ''
        }
    }
        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
       
        render() {
            return (
                <div className='InputDiv'>
                    <p className= 'inputlabel'>{this.props.labeltext}</p>
                    <input type="text" 
                    name={this.props.name}
                    onChange={this.handleChange}
                    className="inputfält" />
                    </div>
            )
        }
     }

     export default InputfältText
     