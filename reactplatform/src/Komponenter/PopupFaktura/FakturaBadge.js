import React from 'react';
import './PopupFaktura.css';

function FakturaBadge(props) {
  let daysleft = Math.floor(Math.random() * 25);
  let badgestyle = '';
  let message = '';

  if (daysleft === 'undefined' || daysleft === '' || daysleft === null) {
    badgestyle = 'grå-badge';
    message = 'Anullerad';
  }

  if (daysleft < 0) {
    badgestyle = 'röd-badge';
    message = 'Försenad!';
  }
  if (daysleft >= 0 && daysleft <= 3) {
    badgestyle = 'orange-badge';
    message = `${daysleft} dagar kvar`;
  }
  if (daysleft > 3 && daysleft >= 7) {
    badgestyle = 'gul-badge';
    message = `${daysleft} dagar kvar`;
  }
  if (daysleft > 7) {
    badgestyle = 'blå-badge';
    message = `${daysleft} dagar kvar`;
  }

  return (
    <div className={badgestyle}>
      <p>{message}</p>
    </div>
  );
}

export default FakturaBadge;
