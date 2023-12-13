import React, {useState, useEffect} from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import About from "../Components/About";
import ProjectsList from "../Components/ProjectsList";
import Contact from "../Components/Contact";
import HyperLinks from "../Components/HyperLinks";

import styled from "styled-components";

const MainBackgroundStyle = styled.div`
/* position: absolute; */ // this forces the portfolio contianer ontop of the NavBAr
width: 100%;
height: 100%;
overflow: visible;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

const PortfolioContainer = () => {
  
    const NotFound = () => <Navigate to="/"/>

    return (
        <MainBackgroundStyle>
            <Routes>
                <Route path="/" element={<HyperLinks/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="projects" element={<ProjectsList/>} />
                <Route path="contact" element={<Contact/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </MainBackgroundStyle>
     );
}
 
export default PortfolioContainer;