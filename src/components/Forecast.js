/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip'
import cardinalDirection from '../utils/cardinalDirection';
import dateFormatter from '../utils/dateFormatter';
import windColorPicker from '../utils/windColorPicker';
import { WeatherContext } from '../context/index';


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
        padding-bottom:1.5rem;


        @media only screen and (min-width:800px) {
          &:hover {
          }
        }

        li {
            display:inline-block;
            color:white;
            position:relative;
            padding:5px;
            @media only screen and (min-width:800px) {
              margin:0rem 1rem 0rem;
            }
        }
    }

    .icon__li {
      bottom:-20px;

    }

    .icon__wrapper {
      height:50px;
      width:50px;
      position:relative;

      img {
        object-fit:cover;
        width:100%;
      }
    }

    .ten {
      filter: invert(0.5) sepia(1) saturate(3) hue-rotate(130deg);
      color:#7391B3;
    }

    .twenty {
      filter: invert(0.5) sepia(1) saturate(3) hue-rotate(170deg);
      color:#7391B3;
    }

    .thirty {
      filter: invert(0.5) sepia(1) saturate(3) hue-rotate(360deg);
      color:#7391B3;
    }

    .forty {
      filter: invert(0.5) sepia(1) saturate(3) hue-rotate(330deg);
      color:#7391B3;
    }

    .fifty {
      filter: invert(0.5) sepia(1) saturate(3) hue-rotate(310deg);
      color:#7391B3;
    }

    .windy {
      filter: invert(.3) sepia(1) saturate(3) hue-rotate(355deg);
      color:#F15D5D;
    }

    .date__header {
      color:#A8B8C4;
      padding-bottom:1rem;
      background-color:white;
      width:100%;
    }

    .time {
      font-weight:bold;
      display:block;
      font-size:1.5rem;
      top:1rem;
      @media only screen and (min-width:800px) {
        display:inline-block;
        top:0;
      }
    }
`;

const Forecast = ({ weather }) => {
  const appContext = useContext(WeatherContext);
  const {
    windUnits
  } = appContext;
  const iD = weather.dt_txt.split(/[- :]/);
  const date = new Date(iD[0], iD[1] - 1, iD[2], iD[3], iD[4], iD[5]);
  const fullDate = dateFormatter(date);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const time = (hour < 10 ? `0${hour}:${minute}0` : `${hour}:${minute}0`);
  const { rain } = weather;
  const { snow } = weather;
  const dateHeader = hour === 0 ? <div className="date__header"><h2>{fullDate}</h2></div> : null;
  const windColor = windColorPicker(Math.floor(weather.wind.speed * 2.237));
  const windSpeed = windUnits === 'mph' ? Math.floor(weather.wind.speed * 2.237) : Math.floor(weather.wind.speed * 1.944);

  return (
    <Weather>
      {dateHeader}
      <ul>
        <li data-tip data-for="time" className="time">{time}</li>
        <ReactTooltip id="time" type="info">
          <span>Time</span>
        </ReactTooltip>
        <li data-tip data-for="wind-d" className={`wind wind__direction ${windColor}`}>{cardinalDirection(weather.wind.deg)}</li>
        <ReactTooltip id="wind-d" type="info">
          <span>Wind Direction</span>
        </ReactTooltip>
        <li data-tip data-for="wind-s" className="color wind wind__speed">{`${windSpeed}${windUnits === 'mph' ? 'mph' : 'kts'}`}</li>
        <ReactTooltip id="wind-s" type="info">
          <span>Wind Speed</span>
        </ReactTooltip>
        <li data-tip data-for="temp" className="temperature">
          {`${Math.floor(weather.main.temp - 273.15)}`}
          &deg;C
        </li>
        <ReactTooltip id="temp" type="info">
          <span>Temperature</span>
        </ReactTooltip>
        <li data-tip data-for="weather" className="icon__li">
          <div className="icon__wrapper">
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
          </div>
        </li>
        <ReactTooltip id="weather" type="info">
          <span>Weather</span>
        </ReactTooltip>
        <li data-tip data-for="precip" className="rain">
          {rain ? Math.round(rain['3h'] * 10) / 10 : snow ? Math.round(snow['3h'] * 10) / 10 : 0}
          mm
        </li>
        <ReactTooltip id="precip" type="info">
          <span>Precipitation</span>
        </ReactTooltip>
        <li data-tip data-for="cloud" className="cloud__cover">{`${weather.clouds.all}%`}</li>
        <ReactTooltip id="cloud" type="info">
          <span>Cloud Cover</span>
        </ReactTooltip>
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
    weather: PropTypes.string,
    clouds: PropTypes.number.isRequired,
    rain: PropTypes.number.isRequired,
    snow: PropTypes.number.isRequired,
  }).isRequired,
};
