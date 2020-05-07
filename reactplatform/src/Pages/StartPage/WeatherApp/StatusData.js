import React from 'react';

export const StatusData = ({ status }) => {
    let message = '';

    switch (status) {
      default:
        message = 'init';
        break;
      case 'fetching':
        message = 'fetching weather data';
        break;
      case 'unable':
        message = 'unable to retrieve location';
        break;
      case 'unsupported':
        message = 'location tracking not supported or blocked';
        break;
    }

    return(
        <h3 className="status-message">{message}</h3>
    );
}