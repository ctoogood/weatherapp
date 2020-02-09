import React, { useState, useEffect } from 'react';
import usePersistedState from '../utils/usePersistedState';

const WeatherContext = React.createContext();


const WeatherProvider = (props) => {
  const APIkey = process.env.REACT_APP_WEATHER_API_KEY;

  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState({});
  const [loading, setLoading] = useState(false);
  const [searchLocation, setSearchLocation] = usePersistedState('searchLocation', 'Lerwick');
  const [query, setQuery] = useState('');

  const url = ` https://api.openweathermap.org/data/2.5/forecast?q=${searchLocation},gb&APPID=${APIkey}`;


  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchLocation(query);
    document.getElementById('form').reset();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const weatherSearch = await fetch(url);
        const weatherSearchResults = await weatherSearch.json();
        localStorage.setItem(searchLocation, JSON.stringify(weatherSearchResults));
        setLocation(weatherSearchResults.city);
        setWeather(weatherSearchResults.list);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [url, searchLocation]);

  return (
    <WeatherContext.Provider value={{
      weather,
      location,
      loading,
      handleSearchChange,
      handleFormSubmit,
    }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider, WeatherContext };
