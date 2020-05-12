import React from 'react';
import './PopupFaktura.css';


function FakturaCard (props) {
    return(
        <div className="faktura-card">

            <p>{props.titel}: {props.referens}</p>

        </div>
    )
}

export default FakturaCard