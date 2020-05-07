import React from 'react';
import './StartPage.css';
function Badge(props) {
  return (
    <div className={props.badge}>
      <p className="badgenumber">{props.number}</p>
    </div>
  );
}
export default Badge;
