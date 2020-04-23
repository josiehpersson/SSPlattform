import React from "react";
import "./components.css";
function Greeting() {
  const date = new Date();
  const hour = date.getHours();
  let user = "Peeidroou";
  let morning = `<p class="hej">God morgon ${user}</p>`;
  let day = `God förmiddag ${user}`;
  let afternoon = `God eftermiddag ${user}`;
  let noon = `God kväll ${user}`;
  let night = `Gå och lägg dig ${user}`;
  let message = "";
  if (hour > 5 && hour <= 9) {
    return (message = morning);
  } else if (hour > 9 && hour <= 12) {
    message = day;
  } else if (hour > 12 && hour <= 17) {
    message = afternoon;
  } else if (hour > 17 && hour <= 20) {
    message = noon;
  } else if (hour > 20 && hour <= 5) {
    message = night;
  }
  console.log(message);
  return (
    <div>
      <h1 className="greeting">{`${message}`}</h1>
    </div>
  );
}

export default Greeting
