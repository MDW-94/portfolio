import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';

import NavBar from './Components/NavBar';
import PortfolioContainer from './Container/PortfolioContainer'

import codeProjects from './Data';
import Loading from './Loading';

import BackgroundImageComponent from './Container/BackGroundImage';
import './App.css';
import styled from 'styled-components';

const MainContainStyleUnit = styled.div`
position: absolute;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
/* overflow: hidden;
overflow-y: scroll; */
/* align-items: center; */
justify-content: center;
`

const ScrollFunction = styled.div`
/* position: absolute; */
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
overflow: hidden;
overflow-y: scroll;
`

const LoadingBackground = styled.div`

`

function App() {

  const[loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, []);

  if (loading) {
    return <Loading/>;
  }

  const codeProjectsImported = codeProjects

  return (
    <div className='App'>
      <BackgroundImageComponent/>
      <Router>
        <MainContainStyleUnit>
          <NavBar/>
          <ScrollFunction>
            <PortfolioContainer codeProjects={codeProjectsImported}/>
          </ScrollFunction>
        </MainContainStyleUnit>
      </Router>
    </div>
  );
}

export default App;

// package.json ,
