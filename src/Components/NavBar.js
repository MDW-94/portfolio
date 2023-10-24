import React from "react";
import {Link} from "react-router-dom";
import styled, { keyframes } from "styled-components";

import logo5 from "../logo5.png"

// media screen and max-width properties need to be added - all navbar links and logo must be visible through different styling of the app

const NavContainer = styled.div`
background: rgba(245, 245, 245, 0.45); // White smoke colour, pastel grey
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 895px){
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 70%; */
    /* padding-left: 50%;
    padding-right: 50%; */
}
@media screen and (max-width: 600px){
    position: relative;
    right: 0;
    left: 0;
}
@media screen and (max-width: 365px){
    margin-top: 2.5em;
    position: relative;
    flex-direction: column;
    
}
/* border: 5px solid rgba(240, 240, 240, 0.9); */
`

const StyledImage = styled.img`
width: 20.5em;
margin-left: 0em;
&:hover {
    /* transition: 5s; */
    opacity: 0.3;
    /* transform: scale(1.1); */
}
@media screen and (max-width: 895px){
    display: flex;
    align-items: center;
    justify-content: center;
}
@media screen and (max-width: 430px){
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-left: 0.25%;
}
`

// const MainHeading = styled.h2`
// padding: 0px;
// font-family: 'Courier New', Courier, monospace;
// font-weight: 800;
// font-size: 25px;
// `


const RightItems = styled.div`
display: flex;
flex-wrap: wrap;
/* width: 1.5em; */
/* padding: 17.5px; */
margin-right: 2.1875em;
font-family: 'Courier New', Courier, monospace;
font-weight: 1100;
align-items: center;
@media screen and (max-width: 895px){
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    margin-right: 0;
    margin-left: 1.5em;
    padding-left: 10%;
    padding-right: 10%;
}
@media screen and (max-width: 740px){
    width: 100%;
    justify-content: space-evenly;
    padding-left: 0%;
    padding-right: 0%;
    
}
@media screen and (max-width: 530px){
    width: 100%;
    justify-content: space-evenly;
    padding-left: 0%;
    padding-right: 10%;
    
}
// Make Navbar routes collapsable @ 460px? w scroll features?
@media screen and (max-width: 460px){
    /* flex-direction: column; */
    width: 100%;
    font-size: 0.75em;
    font-weight: 1100;
    justify-content: space-between;
    /* margin-right: auto; */
    
}
@media screen and (max-width: 365px){
    /* flex-direction: column; */
    position: relative;
    flex-wrap: nowrap;
    width: 45vw;
    font-size: 0.75em;
    font-weight: 1100;
    justify-content: space-between;
    overflow-x: scroll;
    transform: scale(1.75);
    margin-right: 0em;
    padding-right: 0%;

}
`

const StyledLink = styled(Link)`
color: white;
font-weight: 900;
font-size: 1.4em;
text-decoration: none;
@media screen and (max-width: 425px){
    width: 100%;
    font-size: 1.3em;
}
`

const Item1 = styled.div`
&:hover {
    background-color: lightblue;
    transform: scale(1.2);
    transition: 1s;
}
@media screen and (max-width: 365px){
    margin-left: 5vw;
    margin-right: 10vw;
}
@media screen and (max-width:330px){
    margin-left: -6vw;
}
`

const Item2 = styled.div`
&:hover {
    background-color: lightcoral;
    transform: scale(1.2);
    transition: 1s;

}
@media screen and (max-width: 365px){
    margin-left: 5vw;
    margin-right: 10vw;
}`

const Item3 = styled.div`
&:hover {
    background-color: lightgreen;
    transform: scale(1.2);
    transition: 1s;

}
@media screen and (max-width: 365px){
    margin-left: 5vw;
    margin-right: 16vw;
}
@media screen and (max-width:330px){
    margin-right: 12vw;
}`

const NavBar = () => {
    return ( 
        <NavContainer>
        <p><StyledLink to="/"><StyledImage src={logo5}/></StyledLink></p> 
            <RightItems>
                <ul><StyledLink to="/About"><Item1><h4>About</h4></Item1></StyledLink></ul>
                <ul><StyledLink to="/Projects"><Item2><h4>Projects</h4></Item2></StyledLink></ul>
                <ul><StyledLink to="/Contact"><Item3><h4>Contact</h4></Item3></StyledLink></ul><br></br>
            </RightItems>
        </NavContainer>
     );
}
 
export default NavBar;

// THINGS STILL NEEDED TO BE DONE:
// - Collapsable 'Show More' menu beside About, Project, Contact 
// - Render the NavBar over the background of each page, so it appears to be floating
// - Creating animation of line that grows through About, Project and Contact

// {selectedButton? <RightItems>: <img>}


// <MainHeading>Matthew Wasylko</MainHeading>

// {/* <StyledImage src={logo1}/> */}