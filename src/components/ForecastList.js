/* eslint-disable no-nested-ternary */
import React, { useContext } from 'react';
import styled from 'styled-components';
import { WeatherContext } from '../context/index';
import Forecast from './Forecast';

const List = styled.section`
  color:#5F809A;
  text-align:center;
  @media only screen and (min-width:1000px) {
    margin-top:7rem;
  }

  h1 {
    font-weight:lighter;
    font-size:3rem;
    position:sticky;
    top:0;
    background-color:white;
    z-index:3;
    padding:2rem;
    padding-top:0;
    margin-top:2rem;
  }

  h2 {
    color:#C07979;
  }
`;

const ForecastList = () => {
  const appContext = useContext(WeatherContext);
  const {
    weather, location, loading,
  } = appContext;
  return (
    <List>
      {loading ? <h1>Loading...</h1> : location ? (
        <div>
          {weather.map((time) => (<Forecast weather={time} />))}
        </div>
      ) : <h1>Location Not Recognised</h1>}
    </List>
  );
};

export default ForecastList;
