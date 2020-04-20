import React from 'react';

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
                    <input type="text" 
                    name={this.props.name} 
                    placeholder={this.props.placeholder} 
                    onChange={this.handleChange}
                    className="inputfält" />
            )
        }
     }

     export default InputfältText
     