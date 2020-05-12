import React from 'react';

function FakturaLåda(props) {
    return(
        <table className="faktura-låda-container" onClick={props.onClick}>
        <tr id="faktura-låda-top">
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
                <td></td>

            </tr>
        </table>
    )
}

export default FakturaLåda;