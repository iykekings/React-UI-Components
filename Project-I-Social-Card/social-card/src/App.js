import React from 'react';
import CardContainer from './components/CardComponents/CardContainer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer'
import './App.css';

const App = () => {
  return (
    <div className="app">
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

export default App;
