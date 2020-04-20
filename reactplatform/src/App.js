import React from 'react';
import './App.css';
import './Boll.css';
import Frostatglas from './Frostatglas';
import Boll from './Boll';
import InputfältText from './InputfältText';

function App() {
  return (
    <div className="App">
      <Frostatglas />
      <InputfältText />
      <Boll bolltyp="blåboll" />
      <Boll bolltyp="grönboll" />
      <Boll bolltyp="gulboll" />
    </div>
  );
}

export default App;
