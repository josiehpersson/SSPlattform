import React from 'react';
import Boll from '../Bollar/Boll';
import Datebox from './Datebox';
import './TidrappLåda.css';

const DatePicker = (props) => {
  return (
    <div className="date-picker-container">
    <div className="date-picker-row">
      <p className="vecko-nummer-text">{props.veckonummer || '00'}</p>
<Datebox className="weekday"/>
<Datebox className="weekday"/>
<Datebox className="weekday"/>
<Datebox className="weekday"/>
<Datebox className="weekday"/>
<Datebox className="weekend"/>
<Datebox className="weekend"/>
    </div>
    </div>

  );
}

export default DatePicker;