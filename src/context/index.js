/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
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
  const [searchError, setSearchError] = useState(false);
  const [checked, setChecked] = useState(false);
  const [windUnits, setWindUnits] = useState('mph');

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchLocation},gb&APPID=${APIkey}`;


  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSearchLocation(query);
    document.getElementById('form').reset();
  };

  const handleChange = () => {
    if (windUnits === 'mph') {
      setWindUnits('kts');
      setChecked(true);
    } else {
      setWindUnits('mph');
      setChecked(false);
    }
    console.log(windUnits);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const weatherSearch = await fetch(url);
        const weatherSearchResults = await weatherSearch.json();
        localStorage.setItem(searchLocation, JSON.stringify(weatherSearchResults));
        if (weatherSearchResults.city) {
          console.log(weatherSearchResults);
          setSearchError(false);
          setLocation(weatherSearchResults.city);
          setWeather(weatherSearchResults.list);
        } else {
          setSearchError(true);
        }
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
      searchError,
      checked,
      setChecked,
      windUnits,
      handleChange,
      handleSearchChange,
      handleFormSubmit,
    }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export { WeatherProvider, WeatherContext };
