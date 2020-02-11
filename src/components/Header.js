import React, { useContext } from 'react';
import styled from 'styled-components';
import Logo from '../images/theWeatherHead.png';
import ForecastSearch from './ForecastSearch';
import { WeatherContext } from '../context/index';


const Head = styled.header`
  text-align:center;
  margin:0;
  background-color:white;

  @media only screen and (min-width:1000px) {
    width:100vw;
    position:fixed;
    top:0;
    height:6rem;
    z-index:4;
    padding-bottom:1rem;

    img {
      position:absolute;
      left:1rem;
    }

    h1 {
      font-size:2rem;
      padding:1rem;
    }
  }

  img {
    width:300px;
    
  }

  h1 {
    font-weight:lighter;
    color:#5F809A;
  }
`;

const Header = () => {
  const appContext = useContext(WeatherContext);
  const {
    location, searchError
  } = appContext;
  return (
    <Head>
      <section>
        <img src={Logo} alt="The WeatherHead" />
        {searchError ? <h1>Location Not Found</h1> : <h1>{location.name}</h1>}
        <ForecastSearch />
      </section>
    </Head>
  );
};

export default Header;
