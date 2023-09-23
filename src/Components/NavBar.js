import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

import logo4 from "../logo4.png"

const NavContainer = styled.div`
background: rgba(245, 245, 245, 0.5); 
display: flex;
justify-content: space-between;
align-items: center;
/* border: 5px solid rgba(240, 240, 240, 0.9); */
`

const StyledImage = styled.img`
width: 400px;
margin-left: -38px;
&:hover {
    /* transition: 5s; */
    opacity: 0.3;
    /* transform: scale(1.1); */

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
padding: 17.5px;
margin-right: 20px;
font-family: 'Courier New', Courier, monospace;
font-weight: 1100;
align-items: center;

`

const StyledLink = styled(Link)`
color: white;
font-weight: 900;
font-size: larger;
text-decoration: none;
`

const Item1 = styled.div`
&:hover {
    background-color: lightblue;
    transform: scale(1.2);
    transition: 1s;

}`

const Item2 = styled.div`
&:hover {
    background-color: lightcoral;
    transform: scale(1.2);
    transition: 1s;

}`

const Item3 = styled.div`
&:hover {
    background-color: lightgreen;
    transform: scale(1.2);
    transition: 1s;

}`

const NavBar = () => {
    return ( 
        <NavContainer>
        <ul><StyledLink to="/"><StyledImage src={logo4}/></StyledLink></ul> 
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


// <MainHeading>Matthew Wasylko</MainHeading>

// {/* <StyledImage src={logo1}/> */}