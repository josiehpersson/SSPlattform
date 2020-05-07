import React from 'react';
import './components.css'

function InputfältText (props) {

            return (
                <div className='InputDiv'>
                <p className= 'inputlabel'>{props.labeltext}</p>
                <div class="form-group">
                <input type={props.type} 
                class="form-control inputfält" 
                id="exampleInputEmail1"  
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                error={props.error}
                placeholder={props.placeholder}
                className="inputfält" />
                
                    </div>
                </div>
            )
        }


     export default InputfältText
     