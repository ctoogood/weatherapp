import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cardinalDirection from '../utils/cardinalDirection';

const Weather = styled.section`
    ul {
        list-style-type:none;
        padding-left:0;


        li {
            display:inline;
            margin:1rem;
        }
    }
`;

const Forecast = ({ weather }) => (
  <Weather>
    <h2>{weather.dt_txt}</h2>
    <ul>
      <li>{cardinalDirection(weather.wind.deg)}</li>
      <li>{`${Math.floor(weather.wind.speed)}mph`}</li>
      <li>
        {`${Math.floor(weather.main.temp - 273.15)}`}
        &deg;
      </li>
      <li>{`${weather.weather[0].description}`}</li>
      <li>{`${weather.clouds.all}%`}</li>
    </ul>
  </Weather>
);

export default Forecast;

Forecast.propTypes = {
  weather: PropTypes.shape({
    dt_txt: PropTypes.string.isRequired,
    wind: PropTypes.number.isRequired,
    main: PropTypes.number.isRequired,
    weather: PropTypes.string.isRequired,
    clouds: PropTypes.number.isRequired,
  }).isRequired,
};
