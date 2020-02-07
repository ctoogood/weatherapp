import React, { useEffect, useState } from 'react';
import Forecast from './Forecast';

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
        console.log(url);
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

  return (
    <>
      {loading ? <h1>Loading...</h1> : (
        <div>
          {console.log(weather)}
          <h1>{`${name}, ${country}`}</h1>
          {weather.map((time) => (
            <div>
              <h2>{time.dt_txt}</h2>
              <ul>
                <li>{time.wind.deg}</li>
                <li>{time.wind.speed}</li>
                <li>{time.main.temp}</li>
                <li>{time.weather[0].description}</li>
                <li>{time.clouds.all}</li>
              </ul>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ForecastList;
