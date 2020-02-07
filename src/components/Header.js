import React from 'react';
import styled from 'styled-components';

const Head = styled.header`
    text-align:center;
    font-family:Frosted Cupcake;
    color:#5F809A;

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
    <h1>The WeatherHead</h1>
  </Head>
);

export default Header;
