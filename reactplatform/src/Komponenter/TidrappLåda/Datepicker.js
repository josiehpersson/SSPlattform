import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Datebox from './Datebox';

const DatePicker = (props) => {
  return (
    <div className="date-picker-container">
    <div className="date-picker-row">
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