import React from "react";
import './StartPage.css';

function Greeting(props) {
  const date = new Date();
  const hour = date.getHours();
  let user = props.user;
  let morning = `God morgon ${user}`;
  let day = `God förmiddag ${user}`;
  let afternoon = `God eftermiddag ${user}`;
  let noon = `God kväll ${user}`;
  let night = `Ska du inte gå och lägga dig ${user}?`;
  let message = "";
  if (hour > 5 && hour <= 9) {
   (message = morning);
  } else if (hour > 9 && hour <= 12) {
    message = day;
  } else if (hour > 12 && hour <= 17) {
    message = afternoon;
  } else if (hour > 17 && hour <= 20) {
    message = noon;
  } else if (hour > 20 && hour <= 5) {
    message = night;
  }

  return (
    <div>
      <h1 className="greeting">{`${message}`}</h1>
    </div>
  );
}

export default Greeting
