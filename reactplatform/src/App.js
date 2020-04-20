import React from 'react';
import './App.css';
import './Komponenter/Boll.css';
import Frostatglas from './Komponenter/Frostatglas';
import Boll from './Komponenter/Boll';

function App() {
  return (
    <div className="App">
      <Frostatglas />
      <Boll bolltyp='blåboll' />
      <Boll bolltyp='grönboll' />
      <Boll bolltyp='gulboll' />
    </div>
  );
}

export default App;
