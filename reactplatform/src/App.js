import React from 'react';
import './App.css';
import Header from './Components/Header';
import './Components/components.css';
//import LoginPage from './LoginPages/LogIn';
//import ForgotPassword from './LoginPages/ForgotPassword';
//import Register from './LoginPages/Register';
//import LoginBackground from './LoginPages/LoginBackground';
import WeatherApp from './WeatherApp/WeatherApp';
//import StartPage from './StartPage/StartPage.js';
function App() {
  return (
    <div className="App">
      <Header />
      <WeatherApp />
    </div>
  );
}

export default App;
