import React, {useState, useEffect} from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// import NavBar from "../Components/NavBar";
import About from "../Components/About";
import ProjectsList from "../Components/ProjectsList";
import Contact from "../Components/Contact";

import styled from "styled-components";

const MainBackgroundStyle = styled.div`
/* background: lightblue */
position: absolute;
width: 100%;
height: 100%;
background: rgba(245, 245, 245, 0.4); 
display: flex;
align-items: center;
justify-content: center
`

const PortfolioContainer = ({codeProjects}) => {
    const [codingProjects, setCodingProjects] = useState([]);
    // const [selectedProject, setSelectedProject] = useState([]) // for selected project page


    useEffect(() => {
        loadProjects(codeProjects)
    }, [])

    const loadProjects = (data) => {
        setCodingProjects(data)
    }

    const NotFound = () => <Navigate to="/"/>;

    return (
        <MainBackgroundStyle>
        <h1>Portfolio container</h1>
        <Routes>
            <Route path="/"/>
            <Route path="/about" element={<About/>}/>
            <Route path="projects" element={<ProjectsList projects={codingProjects}/>} />
            <Route path="contact" element={<Contact/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </MainBackgroundStyle>
     );
}
 
export default PortfolioContainer;

// THINGS TO DO:
// - Create a filter functino for userzx to search through the projects list (good for languages)
// - Create landing page Home componenet - background image with some links to socials etc - white writing on a decent photograph
// 