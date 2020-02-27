import React, { useContext } from 'react';
import styled from 'styled-components';
import data from '../utils/gb.json';
import { WeatherContext } from '../context/index';

const cityList = data.map((entry) => entry.city);

const Search = styled.section`
  height:3rem;
  margin-bottom:1rem;
  width:100%;
  position:relative;

  .search__input {
    position:absolute;
    right:50%;
    transform:translate(50%,0);

    display:flex;
    @media only screen and (min-width:1000px) {
      position:fixed;
      right:2rem;
      top:3rem;
      transform:translate(0,-50%);
      margin-right:1rem;
      margin-top:0.5rem;
    }
    

    input {
      margin:0;
      padding:0.5rem;
      border:none;
      background:#FAFAFA;
      border-radius: 15px 0 0 15px;
      box-shadow: 0px 2px 2px rgba(0,0,0,0.1);
      font-style:italic;
    }

    button {
      margin:0;
      padding:0;
      border:none;
      background:#5F809A;
      color:white;
      padding:0.5rem;
      border-radius: 0 15px 15px 0;
      cursor:pointer;
      box-shadow: 0px 2px 2px rgba(0,0,0,0.1);
      font-weight:bold;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #5F809A;
        background-color: white;
      }
    }
  }
`;

const ForecastSearch = () => {
  const appContext = useContext(WeatherContext);
  const { handleSearchChange, handleFormSubmit } = appContext;
  return (
    <Search>
      {console.log(cityList)}
      <form id="form" onSubmit={(e) => handleFormSubmit(e)}>
        <div className="search__input">
          <input onChange={(e) => handleSearchChange(e)} type="text" id="search" placeholder="Search for a location..." autoComplete="off" />
          <button type="submit">
            Search
          </button>
        </div>
      </form>
    </Search>
  );
};

export default ForecastSearch;
