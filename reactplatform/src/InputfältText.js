import React from 'react';
import './components.css'

function InputfältText (props) {

            return (
                <div className='InputDiv'>
                    <p className= 'inputlabel'>{this.props.labeltext}</p>
                    <input type="text" 
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    error={props.error}
                    disabled={props.isDisabled}
                    className="inputfält" />
                    </div>
            )
        }


     export default InputfältText
     