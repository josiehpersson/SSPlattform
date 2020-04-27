import React from 'react';
class WeatherApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: {},
      string: '',
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
          weatherData: data
        })
      })
      .then(() => this.displayWeather()) 
      .catch((error) => console.log(error));
  };
  displayWeather = () => {
    let city = this.state.weatherData.name;
    let temp = this.state.weatherData.temp;
    let feel = this.state.weatherData.feels_like;
    let weather = this.state.weatherData.description;
    let string = `${city} | ${temp} | ${feel} | ${weather}`;
    this.setState({
      string: string,
    });
  };
  render() {
    return (
      <main>
        {this.state.string}
      </main>
    );
  }
}
export default WeatherApp;