import React from 'react';

const Forecast = ({ weather }) => (
  <div>
    <h1>{weather.value}</h1>
    <ul>
      {weather.Rep.map((hour) => (
        <div>
          <h2>{hour.$}</h2>
          <ul>
            <li>{hour.D}</li>
            <li>{hour.S}</li>
            <li>{hour.T}</li>
            <li>{hour.Pp}</li>
            <li>{hour.W}</li>
          </ul>
        </div>
      ))}
    </ul>

  </div>
);

export default Forecast;
