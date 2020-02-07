import React, { useEffect, useState } from 'react';
import Forecast from './Forecast';

const ForecastList = () => {
  const APIkey = process.env.REACT_APP_WEATHER_API_KEY;
  const locationId = 352262;
  const resource = `val/wxfcs/all/json/${locationId}`;
  const url = `https://datapoint.metoffice.gov.uk/public/data/${resource}?res=3hourly&key=${APIkey}`;

  const [location, setLocation] = useState({});
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(url);
        setLoading(true);
        const weatherSearch = await fetch(url);
        const weatherSearchResults = await weatherSearch.json();
        setLocation(weatherSearchResults.SiteRep.DV.Location);
        setDays(weatherSearchResults.SiteRep.DV.Location.Period);
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
      {console.log(days)}
      {loading ? <h1>Loading...</h1> : (
        <div>
          <h1>
            {`${name}, ${country}`}
          </h1>
          {days.map((day) => <Forecast weather={day} />)}
        </div>
      )}
    </>
  );
};

export default ForecastList;
