import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cardinalDirection from '../utils/cardinalDirection';
import dateFormatter from '../utils/dateFormatter';

const Weather = styled.section`
    ul {
        list-style-type:none;
        padding-left:0;


        li {
            display:inline-block;
            margin:1rem;
        }
    }

    .icon__wrapper {
      height:50px;
      width:50px;
      position:relative;
      bottom:-20px;

      img {
        object-fit:cover;
        width:100%;
      }
    }
`;

const Forecast = ({ weather }) => {
  const date = new Date(weather.dt_txt);
  const fullDate = dateFormatter(date);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const time = hour < 10 ? `0${hour}:${minute}0` : `${hour}:${minute}0`;
  const { rain } = weather;
  return (
    <Weather>
      {hour === 0 ? <h2>{fullDate}</h2> : null}
      <ul>
        <li className="time">{time}</li>
        <li className="wind wind__direction">{cardinalDirection(weather.wind.deg)}</li>
        <li className="wind wind__speed">{`${Math.floor(weather.wind.speed)}mph`}</li>
        <li className="temperature">
          {`${Math.floor(weather.main.temp - 273.15)}`}
          &deg;
        </li>
        <li>
          <div className="icon__wrapper">
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
          </div>
        </li>
        <li className="rain">
          {rain ? Math.round(rain['3h'] * 10) / 10 : 0}
          mm
        </li>
        <li className="cloud__cover">{`${weather.clouds.all}%`}</li>
      </ul>
    </Weather>
  );
};

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
