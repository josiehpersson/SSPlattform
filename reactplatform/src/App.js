import React from 'react';
import './App.css';
//import Header from './Components/Header';
import './Components/components.css';
import './Components/KonsultLådor/Lådor.css';
//import Greeting from './Components/Greeting';
//import LoginPage from './LoginPages/LogIn';
//import ForgotPassword from './LoginPages/ForgotPassword';
//import Register from './LoginPages/Register';
//import LoginBackground from './LoginPages/LoginBackground';
//import WeatherApp from './WeatherApp/WeatherApp';
//import StartPage from './StartPage/StartPage';
//import StartPage from './StartPage/StartPage.js';
//import InfoRad from './Components/InfoRad'
//import ProfilBild from './Components/ProfilBild'
//import KonsultLåda from './Components/KonsultLådor/Konsultlåda';
import PopupProfile from './Components/KonsultLådor/PopupProfile';
import PopupCV from './Components/KonsultLådor/PopupCV';
function App() {
  return (
    <div className="App">
      <PopupCV className="låda-primärknapp" />
      <PopupProfile className="låda-grå" />
    </div>
  );
}

export default App;
