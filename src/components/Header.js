import React from 'react';
import styled from 'styled-components';
import Logo from '../images/weatherHead.png';

const Head = styled.header`
    text-align:center;
    color:#5F809A;
    max-height:100px;
    max-width:200px;
    margin:auto;
    position:relative;
    left:-1rem;

    img {
      object-fit:cover;
      width:100%;
      padding:1rem;
    }

    h1 {
        font-weight:lighter;
        text-decoration:underline;
        span {
          font-weight:500;
        }
    }

    @media only screen and (min-width:1000px) {
        text-align:left;
        padding-left:1rem;
        position:fixed;
        top:0;
        z-index:4;
    }
`;

const Header = () => (
  <Head>
    <img src={Logo} alt="The WeatherHead" />
  </Head>
);

export default Header;
