import React from 'react';


class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherData: {}
        }
    }

    getLocation = () => {
        const success = (position) => {
            this.getWeather(position.coords.latitude, position.coords.longitude);
        }
        
        const error = () => {
            console.log('Unable to retrieve location-error');
        }
        
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log('Unable to retrieve location-else');
        }
    }
    
    getWeather = (lat, lon) => {
          fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=87d75e8ff883a57e85e3f1e564ca6e86`)
            .then(res => res.json())
            .then(
                (result) => {
                    const {name} = result;
                    console.log({name});
                    const {temp, feels_like} = result.main;
                    const {main, description} = result.weather[0]
            this.setState = ({
                weatherData: {
                    name,
                    temp,
                    feels_like,
                    main,
                    description
                }
            });
              console.log(result)
            })
        }
        
        displayWeather = () => {
            this.getLocation();
            let city = this.state.name;
            let temp = this.state.weatherData.temp;
            let feel = this.state.weatherData.feels_like;
            let weather = this.state.weatherData.description;

            return `${city} | ${temp} | ${feel} | ${weather}`
        }
      
    dateBuilder = (d) =>{
        let months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
        let days = ["Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag", "Söndag"];
        let day = days[d.getDay()];
        let date = d.getDate();
        let month =months[d.getMonth()];
        let year = d.getFullYear();
        return `${day} ${date} ${month} ${year}`
    }
    handleClick = () => {

    }
    render() {
        return (
            <main> {this.displayWeather()}
            {(typeof this.weather != 'undefined') ? (
                        <div>
                                <div className="location-box">
                                    <div className="location">{this.name}</div>
                                    <div className="date">{this.dateBuilder(new Date())}</div>
                                </div>
                                <div className="weather-box">
                                    <div className="temp">{Math.round(this.weather.main.temp)}°c
                                    </div>
                                    <div className="weather">{this.weather.weather[0].main}</div>
                                </div>
                        </div>
                        )
                        
                        : ('')}
                        </main> 
        )
    }
 }


export default WeatherApp