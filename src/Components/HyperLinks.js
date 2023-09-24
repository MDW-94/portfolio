import React from "react";

import styled from "styled-components";
// import logo16 from '../Images/logo16.png'
import logo17 from '../Images/logo17.png'
import logo18 from '../Images/logo18.png'
// import logo19 from '../Images/logo19.png'
import logo20 from '../Images/logo20.png'
import logo21 from '../Images/logo21.png'

import resume_test from '../Images/resume_test.pdf'

const HyperLinksStyle = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-content: center;
/* height: 15% */
`

const ImageItem = styled.img`
width: 50px;
padding: 0.5em;
&:hover {
    /* transition: 5s; */
    opacity: 0.3;
    /* transform: scale(1.1); */

}
`

const HyperLinks = () => {
    return ( 
        <>
        <HyperLinksStyle>
            <div><ul><a href="https://github.com/MDW-94"><ImageItem src={logo21}/></a></ul></div>
            <div><ul><a href="https://linkedin.com/in/matthew-david-wasylko-75614b224"><ImageItem src={logo20}/></a></ul></div>
            <div><ul><a href={resume_test} download><ImageItem src={logo17}/></a></ul></div>
            <div><ul><a href="mailto:matthew.wasylko@gmail.com"><ImageItem src={logo18}/></a></ul></div>
            {/* <div><ul><a href="tel:"><ImageItem src={logo16}/></a></ul></div> */}
        </HyperLinksStyle>
        <h1>Looking For A Junior Developer Role.</h1>
        <div></div>
        </>
     );
}
 
export default HyperLinks;

{/* <div><ul><a href=""><ImageItem src={logo19}/></a></ul></div> */}

//make phone number bu