import React from 'react';
import './TidrappLåda.css';

function Datebox (props) {
    return (
        <table className="datebox-container">
            <thead className="datebox-head">
               <p>{props.datum || 'datum'}</p> 
            </thead>
            <tbody className={props.className}>
            <p>{props.timmar || '0 h'}</p>
            </tbody>
        </table>
    )
}
export default Datebox;