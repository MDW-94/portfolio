import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import NavBar from './Components/NavBar';
import PortfolioContainer from './Container/PortfolioContainer'

import codeProjects from './Data';

import BackgroundImageComponent from './Container/BackGroundImage';
import './App.css';
import styled from 'styled-components';

const MainContainStyleUnit = styled.div`
position: absolute;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
/* align-items: center; */
/* justify-content: center; */
`

function App() {

  const codeProjectsImported = codeProjects

  return (
    <div className='App'>
    <BackgroundImageComponent/>
    <Router>
      <MainContainStyleUnit>
        <NavBar/>
        <PortfolioContainer codeProjects={codeProjectsImported}/>
      </MainContainStyleUnit>
    </Router>
    </div>
  );
}

export default App;
