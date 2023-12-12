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
import { ProjectsProvider } from './hooks/useProjects';

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

    // useEffect(() => {
  //   const handleWheel = (event) => {
  //     if(event.deltaY !== 0 || event.deltaX !== 0){
  //       event.preventDefault();
  //     }
  //   }
  //   document.addEventListener('wheel', handleWheel, {passive:false});

  //   const handleTouchMove = (event) => {
  //     event.preventDefault();
  //   }
  //   document.addEventListener('touchmove', handleTouchMove, {passive:false});

  //   return () => {
  //     document.removeEventListener('wheel', handleWheel);
  //     document.removeEventListener('touchmove', handleTouchMove);
  //   }
  // }, []);

  const codeProjectsImported = codeProjects

  return (
    <ProjectsProvider>
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
    </ProjectsProvider>
  );
}

export default App;

// package.json ,

// https://chat.openai.com/share/84c80036-bb79-4911-9fa4-35efdc8682df
// look over how to add scroll feature to only certain parts of the app
// at the moment the functionality at the top removes all scrolling and
// touch events for the entire app
