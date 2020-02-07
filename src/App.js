import React from 'react';
import ForecastList from './components/ForecastList';
import Header from './components/Header';
import GlobalFonts from './utils/fonts';

const App = () => (
  <div>
    <Header />
    <ForecastList />
    <GlobalFonts />
  </div>
);

export default App;
