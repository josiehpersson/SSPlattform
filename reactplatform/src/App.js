import React from 'react';
import './App.css';
import Header from './Components/Header';
//import LoginPage from './LoginPages/LogIn';
import ForgotPassword from './LoginPages/ForgotPassword';

function App() {
  return (
    <div className="App">
      <Header />

      <ForgotPassword />
    </div>
  );
}

export default App;
