import React from 'react';
import './App.css';
import Header from './Components/Header';
//import LoginPage from './LoginPages/LogIn';
//import ForgotPassword from './LoginPages/ForgotPassword';
import Register from './LoginPages/Register';

function App() {
  return (
    <div className="App">
      <Header />

      <Register />
    </div>
  );
}

export default App;
