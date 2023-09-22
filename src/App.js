import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './Components/NavBar';
import PortfolioContainer from './Container/PortfolioContainer'

import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>
      <PortfolioContainer/>
    </Router>
  );
}

export default App;
