import React from 'react';
import './components.css'

function InputfältText (props) {

            return (
                <div className='InputDiv'>
                    <p className= 'inputlabel'>{props.labeltext}</p>
                    <input type={props.type}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    error={props.error}
                    placeholder={props.placeholder}
                    className="inputfält" />
                    </div>
            )
        }


     export default InputfältText
     