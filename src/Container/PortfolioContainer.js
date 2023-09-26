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
/* background: rgba(245, 245, 245, 0.1);  */
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between
`

const PortfolioContainer = ({codeProjects}) => {
    const [codingProjects, setCodingProjects] = useState([]);
    const [filteredProjects, setFilteredProjects] = useState([]);
    // const [selectedProject, setSelectedProject] = useState([]) // for selected project page


    useEffect(() => {
        loadProjects(codeProjects)
    }, [filteredProjects, codeProjects])

    const loadProjects = (data) => {
        setCodingProjects(data)
    }

    /* const filterListFunction = ((textInput) => {
        codingProjects.filter((project) => {
            if(project.toLowerCase() === textInput){
                setFilteredProjects(project)
                return filteredProjects
            }
            return filteredProjects
        })
    }) */

    
    const filterListFunction = (searchTerm) => {
        const filtered = []
        for(let project of codingProjects){
            for(let language of project.languages){
                /* console.log('language', language)
                console.log('searchTerm', searchTerm) */

                if(language.toLowerCase().includes(searchTerm)){
                    /* console.log('includes = true') */
                    filtered.push(project)
                }

            }
            /* console.log(filtered) */
            setFilteredProjects(filtered)
        }
        /* console.log('search term', searchTerm)
        const filteredList = codingProjects.filter((project) => {
            console.log('project.name', project.name)
            return project.name.includes(searchTerm)
    })
    setFilteredProjects(filteredList) */
    }
    
    // STILL HAVING ISSUES: filter now works but is returning duplciates of the entire list - check Hacker News Lab for filter option ideas


    const NotFound = () => <Navigate to="/"/>;

    return (
        <MainBackgroundStyle>
            <Routes>
                <Route path="/" element={<HyperLinks/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="projects" element={<ProjectsList projects={codingProjects} filterFunction={filterListFunction} filteredProjects={filteredProjects} />} />
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