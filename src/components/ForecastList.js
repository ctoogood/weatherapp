import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import dateFormatter from '../utils/dateFormatter';
import Forecast from './Forecast';

const List = styled.section`
  text-align:center;
`;

const ForecastList = () => {
  const APIkey = process.env.REACT_APP_WEATHER_API_KEY;
  const locationName = 'Lerwick';
  const url = ` https://api.openweathermap.org/data/2.5/forecast?q=${locationName},gb&APPID=${APIkey}`;

  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const weatherSearch = await fetch(url);
        const weatherSearchResults = await weatherSearch.json();
        setLocation(weatherSearchResults.city);
        setWeather(weatherSearchResults.list);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [url]);

  const { name, country } = location;
  const today = new Date();
  const dateToday = dateFormatter(today);

  return (
    <List>
      {loading ? <h1>Loading...</h1> : (
        <div>
          <h1>{`${name}, ${country}`}</h1>
          <h2>{dateToday}</h2>
          {weather.map((time) => <Forecast weather={time} />)}
        </div>
      )}
    </List>
  );
};

export default ForecastList;
