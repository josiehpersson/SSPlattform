import React from 'react';
import './App.css';
//import LoginBackground from './Pages/LoginPages/LoginBackground';
//import Konsultsida from './Pages/Konsultsida/Konsultsida';
import Konsultlåda from './Komponenter/KonsultLådor/Konsultlåda';
import Företagslåda from './Komponenter/FöretagsLådor/Företagslåda'

function App() {
  return (
    <div className="App">
      <Företagslåda />
      <Konsultlåda />
    </div>
  );
}

export default App;
