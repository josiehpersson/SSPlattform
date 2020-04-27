import React from 'react';

function Årstider () {
    dateBuilder = (d) =>{
        let months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
        let days = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month =months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`
    }
    return (
        <div>

        </div>
    )
}

export default Årstider;