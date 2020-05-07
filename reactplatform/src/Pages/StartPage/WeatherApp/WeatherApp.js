import React from 'react';
import './WeatherApp.css';
import Thunderstorm from './WeatherImages/thunderstorm.jpg';
import Clouds from './WeatherImages/clouds.jpg';
import Mist from './WeatherImages/mist.jpg';
import Rain from './WeatherImages/rain.jpg';
import Sun from './WeatherImages/sunny.jpg';
import Tornado from './WeatherImages/tornado.jpg';
import Snow from './WeatherImages/snow.jpg';
import Clouds2 from './WeatherImages/clouds2.jpg';

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
        <img
          src="https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt="weather-thunderstorm"
          className="weather-picture"
        />
      );
    }
    if (weather === 'Drizzle' || weather === 'Rain') {
      image = (
        <img
          src="https://images.unsplash.com/photo-1486016006115-74a41448aea2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"
          alt="weather-rain"
          className="weather-picture"
        />
      );
    }
    if (weather === 'Snow') {
      image = (
        <img
          src="https://images.unsplash.com/photo-1547754980-3df97fed72a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="weather-snow"
          className="weather-picture"
        />
      );
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
      image = (
        <img
          src="https://images.unsplash.com/photo-1514418197935-e0cac2bb695a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="weather-misty"
          className="weather-picture"
        />
      );
    }
    if (weather === 'Clear') {
      image = (
        <img
          src="https://images.pexels.com/photos/158827/field-corn-air-frisch-158827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="weather-sunny"
          className="weather-picture"
        />
      );
    }

    if (weather === 'Clouds') {
      image = (
        <img
          src="https://images.unsplash.com/photo-1569446419157-93922796cb47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1064&q=80"
          alt="weather-cloudy"
          className="weather-picture"
        />
      );
    }
    if (weather === 'Tornado') {
      image = (
        <img
          src="https://images.unsplash.com/photo-1527482937786-6608f6e14c15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          alt="weather-tornado"
          className="weather-picture"
        />
      );
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
