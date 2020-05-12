import React from 'react';
import './PopupFaktura.css';
import FakturaBadge from './FakturaBadge';

function FakturaLåda(props) {
    return(
        <div>
        <table className="faktura-låda-container" onClick={props.onClick}>
        <tr className="faktura-låda-top">
                <th>Fakturanummer</th>
                <th>Företag</th>
                <th>Belopp</th>
                <th>Förfallodatum</th>
                <th>Status</th>
            </tr>
        <tr className="faktura-låda-bottom">
            <td>{props.fakturanummer || '1234567'}</td>
                <td>{props.företag || 'Namn'}</td>
                <td>{props.belopp || '500SEK'}</td>
                <td>{props.förfallodatum || '23/07/09'}</td>
                <td><FakturaBadge /></td>

            </tr>
        </table>

        </div>
    )
}

export default FakturaLåda;