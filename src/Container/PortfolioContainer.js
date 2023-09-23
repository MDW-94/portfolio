import React, {useState, useEffect} from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// import NavBar from "../Components/NavBar";
import About from "../Components/About";
import ProjectsList from "../Components/ProjectsList";
import Contact from "../Components/Contact";

const PortfolioContainer = () => {
    const [codingProjects, setCodingProjects] = useState([]);

    const loadProjects = (data) => {
        setCodingProjects(data)
    }

    const NotFound = () => <Navigate to="/"/>;

    return (
        <>
        <h1>Portfolio container</h1>
        <Routes>
            <Route path="/"/>
            <Route path="/about" element={<About/>}/>
            <Route path="projects" element={<ProjectsList projects={codingProjects}/>} />
            <Route path="contact" element={<Contact/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </>
     );
}
 
export default PortfolioContainer;