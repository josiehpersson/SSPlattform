import React from 'react';
import './StartPage.css';
import '../Components/components.css';

import WeatherApp from '../WeatherApp/WeatherApp.js';
//import Boll from '../Components/Boll.js';
//import Frostatglas from '../Components/Frostatglas.js';
import Greeting from '../Components/Greeting.js';
//import MaskotBoll from '../Components/maskotboll.js';
import Postit from '../Components/Postit.js';

function StartPage () {
    const weatherstyles = {
        zIndex: '-1',
        position: 'absolute',
        marginTop: 0
    } 
    const postitstyles = {
        zIndex: '2',
        position: 'absolute',
        top: 0
    }
    return (
        <div className="start-page-container">
            <Greeting user="Jesus"/>
            <WeatherApp style={weatherstyles}/>
            <Postit style={postitstyles}  färg="gulPostit"/>
        </div>

    )

}
export default StartPage