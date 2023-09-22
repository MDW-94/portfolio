import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "../Components/NavBar";

const PortfolioContainer = () => {

    const NotFound = () => <Navigate to="/"/>;

    return (
        <>
        <h1>Portfolio container</h1>
        <Routes>
            <Route path="/"/>
            <Route path="/about"/>
            <Route path="projects"/>
            <Route path="contact"/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        </>
     );
}
 
export default PortfolioContainer;