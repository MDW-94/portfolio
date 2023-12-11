import React, {useState, useEffect} from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// import NavBar from "../Components/NavBar";
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

const PortfolioContainer = ({codeProjects}) => {
    const [codingProjects, setCodingProjects] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
        loadProjects(codeProjects)
    }, [])
    

    const loadProjects = (data) => {
        setCodingProjects(data)
    }
    
    const loadQuery = ((data) => {
        setQuery(data)
    })

    const filteredProjects = 
        (query.length > 0)
            ? codingProjects.filter((project) => {
                return project.languages.find((language) => {
                    return language.toLowerCase().includes(query.toLowerCase())
                })
            })
            : codingProjects;



    const NotFound = () => <Navigate to="/"/>

    return (
        <MainBackgroundStyle>
            <Routes>
                <Route path="/" element={<HyperLinks/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="projects" element={<ProjectsList loadQuery={loadQuery} projects={filteredProjects} />} />
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