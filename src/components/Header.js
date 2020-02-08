import React from 'react';
import styled from 'styled-components';

const Head = styled.header`
    text-align:center;
    color:#5F809A;

    h1 {
        font-weight:lighter;
        text-decoration:underline;
        span {
          font-weight:bold;
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
    <h1><span>T</span>he <span>W</span>eather<span>H</span>ead</h1>
  </Head>
);

export default Header;
