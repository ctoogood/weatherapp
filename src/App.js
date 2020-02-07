import React from 'react';
import ForecastList from './components/ForecastList';
import Header from './components/Header';
import GlobalFonts from './fonts/fonts';

const App = () => (
  <div>
    <GlobalFonts />
    <Header />
    <ForecastList />
  </div>
);

export default App;
