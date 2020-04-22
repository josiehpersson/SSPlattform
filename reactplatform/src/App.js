import React from 'react';
import './App.css';
import Header from './Components/Header';
//import LoginPage from './LoginPages/LogIn';
//import ForgotPassword from './LoginPages/ForgotPassword';
//import Register from './LoginPages/Register';
import LoginBackground from './LoginPages/LoginBackground';

function App() {
  return (
    <div className="App">
      <Header />

      <LoginBackground />
    </div>
  );
}

export default App;
