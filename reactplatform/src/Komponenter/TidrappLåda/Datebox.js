import React from 'react';
import './TidrappLåda.css';

function Datebox (props) {
    return (
        <table className="datebox-container">
            <thead className="datebox-head">
               <p>text</p> 
            </thead>
            <tbody className={props.className}>
            <p>text</p>
            </tbody>
        </table>
    )
}
export default Datebox;