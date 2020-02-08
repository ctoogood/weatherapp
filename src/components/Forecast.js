import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cardinalDirection from '../utils/cardinalDirection';
import dateFormatter from '../utils/dateFormatter';


const Weather = styled.section`

    ul {
        list-style-type:none;
        padding:0;
        background-color:#5F809A;
        box-shadow:0px 3px 3px rgba(0,0,0,0.2);
        border-radius:15px;
        max-width:600px;
        margin:auto;
        margin-bottom:2rem;
        transition:all 0.5s ease-in-out;
        justify-content:center;

        @media only screen and (min-width:800px) {
          &:hover {
            transform:scale(1.2);
          }
        }

        li {
            display:inline-block;
            color:white;
            position:relative;
            padding:5px;
            top:50%;
            transform:translate(0, -50%);
            @media only screen and (min-width:800px) {
              margin:0rem 1rem 0rem;
            }
        }
    }

    .icon__wrapper {
      height:50px;
      width:50px;
      position:relative;
      bottom:-30px;

      img {
        object-fit:cover;
        width:100%;
      }
    }

    .windy {
      filter: invert(.2) sepia(1) saturate(5) hue-rotate(320deg);
      color:#F15D5D;
    }

    .calm {
      filter: invert(.2) sepia(1) saturate(5) hue-rotate(175deg);
      color:#7391B3;
    }

    .date__header {
      color:#A8B8C4;
      padding-bottom:1rem;
      background-color:white;
      width:100%;
    }

    .time {
      font-weight:bold;
      @media only screen and (min-width:800px) {
        font-size:1.2rem;
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
  const dateHeader = hour === 0 ? <div className="date__header"><h2>{fullDate}</h2></div> : null;
  return (
    <Weather>
      {dateHeader}
      <ul>
        <li className="time">{time}</li>
        <li className={`wind wind__direction ${weather.wind.speed > 35 ? 'windy' : 'calm'}`}>{cardinalDirection(weather.wind.deg)}</li>
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
    rain: PropTypes.number.isRequired,
  }).isRequired,
};
