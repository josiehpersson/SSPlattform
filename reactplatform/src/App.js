import React from 'react';
import './App.css';
import './Boll.css';
import './components.css';
import Frostatglas from './Frostatglas';
import Boll from './Boll';
import InputfältText from './InputfältText';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import MaskotBoll from './maskotboll';

function App() {
  return (
    <div className="App">
      <Frostatglas />
      <InputfältText labeltext="FirstName" />
      <Boll bolltyp="blåboll" />
      <Boll bolltyp="grönboll" />
      <Boll bolltyp="gulboll" />
      <PrimaryButton buttonText="Primär"/>
      <SecondaryButton buttonText="Sekundär" />
      <MaskotBoll />
    </div>
  );
}

export default App;
