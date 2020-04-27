import React from 'react';
import './WeatherApp.css';
import Thunderstorm from './WeatherImages/thunderstorm.jpg';
import Clouds from './WeatherImages/clouds.jpg';
import Mist from './WeatherImages/mist.jpg';
import Rain from './WeatherImages/rain.jpg';
import Sun from './WeatherImages/sunny.jpg';
import Tornado from './WeatherImages/tornado.jpg';
import Snow from './WeatherImages/snow.jpg';

class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {},
      stringCity: '',
      stringTemp: '',
      image: null,
    };
  }
  componentDidMount() {
    this.getLocation();
  }
  getLocation = () => {
    const success = (position) => {
      this.getWeather(position.coords.latitude, position.coords.longitude);
    };
    const error = () => {
      console.log('Unable to retrieve location-error');
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log('Unable to retrieve location-else');
    }
  };
  getWeather = (lat, lon) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=87d75e8ff883a57e85e3f1e564ca6e86`
    )
      .then((res) => res.json())
      .then((result) => {
        const { name } = result;
        const { temp, feels_like } = result.main;
        console.log(name);
        const { main, description } = result.weather[0];
        const data = {
          name,
          temp,
          feels_like,
          main,
          description,
        };
        this.setState({
          weatherData: data,
        });
      })
      .then(() => this.displayWeather())
      .catch((error) => console.log(error));
  };
  displayWeather = () => {
    let city = this.state.weatherData.name;
    let temp = this.state.weatherData.temp;
    let feel = this.state.weatherData.feels_like;
    let weather = this.state.weatherData.main;
    let stringCity = `${city}`;
    let stringTemp = `Temperatur: ${temp}°C | Känns som: ${feel}°C`;
    this.setState({
      stringCity: stringCity,
      stringTemp: stringTemp,
    });

    let image;

    if (weather === 'Thunderstorm') {
      image = (
        <img src={Thunderstorm} alt="weather-thunderstorm" className="weather-picture" />
      );
    }
    if (weather === 'Drizzle' || weather === 'Rain') {
      image = <img src={Rain} alt="weather-rain" className="weather-picture" />;
    }
    if (weather === 'Snow') {
      image = <img src={Snow} alt="weather-snow" className="weather-picture" />;
    }
    if (
      weather === 'Mist' ||
      weather === 'Smoke' ||
      weather === 'Haze' ||
      weather === 'Dust' ||
      weather === 'Fog' ||
      weather === 'Sand' ||
      weather === 'Ash' ||
      weather === 'Squall'
    ) {
      image = <img src={Mist} alt="weather-misty" className="weather-picture" />;
    }
    if (weather === 'Clear') {
      image = <img src={Sun} alt="weather-sunny" className="weather-picture" />;
    }
    if (weather === 'Clouds') {
        image = <img src={Clouds} alt="weather-cloudy" className="weather-picture" />;
      }
    if (weather === 'Tornado') {
      image = <img src={Tornado} alt="weather-tornado" className="weather-picture" />;
    }

    this.setState({
      image: image,
    });
  };
  render() {
    return (
      <div className="weather-container">
        <div className="text-container">
          <h3 className="weather-city-string">{this.state.stringCity}</h3>
          <h6 className="weather-temp-string">{this.state.stringTemp}</h6>
        </div>
        <div className="weather-image">{this.state.image}</div>
      </div>
    );
  }
}
export default WeatherApp;
