import React from 'react';
import './components.css';
function Badge(props) {
  return (
    <div className={props.badge}>
      <p className="badgenumber">{props.number}</p>
    </div>
  );
}
export default Badge;
