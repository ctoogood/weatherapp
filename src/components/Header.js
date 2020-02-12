import React, { useContext } from 'react';
import styled from 'styled-components';
import Switch from 'react-switch';
import Logo from '../images/theWeatherHead.png';
import ForecastSearch from './ForecastSearch';
import { WeatherContext } from '../context/index';


const Head = styled.header`
  text-align:center;
  margin:0;
  background-color:white;
  height:18rem;

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

  span {
    color:#5F809A;
    position:relative;
    top:-.5rem;
  }

  label {
    @media only screen and (min-width:1000px) {
      position:absolute;
      right:3rem;
    }
  }
`;

const Units = styled.section`
`;

const Header = () => {
  const appContext = useContext(WeatherContext);
  const {
    location, searchError, handleChange, checked,
  } = appContext;
  return (
    <Head>
      <section>
        <img src={Logo} alt="The WeatherHead" />
        {searchError ? <h1>Location Not Found</h1> : <h1>{location.name}</h1>}
        <ForecastSearch />
        <Units>
        <label>
          <span>mph/kts</span>
          <Switch
            onChange={handleChange}
            checked={checked}
            onColor="#86d3ff"
            onHandleColor="#2693e6"
            handleDiameter={25}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={20}
            width={48}
            className="react-switch"
            id="material-switch"
          />
        </label>
        </Units>
      </section>
    </Head>
  );
};

export default Header;
