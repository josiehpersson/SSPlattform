import React from 'react';

export const WeatherData = ({ data }) => {
    const { temp, main, description, feels_like } = data;

    return (
        <>
            <div className="weather-container">
                <h1 className="weather-header">{main.name}</h1>
                <h2 className="weather-main">{main.weather}</h2>
                <h3 className="weather-description">{description}</h3>
                <h3 className="weather-temp">{`${temp}°c`}</h3>
                <h3 className="weather-feelslike">{feels_like}°c</h3>
            </div>
        </>
    );
}