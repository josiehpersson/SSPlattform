import React from 'react';
import Boll from '../Bollar/Boll';
import './PopupFaktura.css';

function Fakturaboll (props) {
    return (
        <div className="faktura-boll-container">
            <Boll className={props.className || 'blåboll'} height="150px" width="150px"/>
            <div className="faktura-boll-text-container">
            <p className="faktura-boll-rubrik">{props.rubrik || 'RUBRIK'}</p>
            <p className="faktura-boll-text">{props.summa || '23450'} SEK</p>
            </div>
        </div>
    )
}
export default Fakturaboll;