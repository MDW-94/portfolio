import React from "react";

import styled from "styled-components";
// import logo16 from '../Images/logo16.png'
import logo17 from '../Images/logo17.png'
import logo18 from '../Images/logo18.png'
// import logo19 from '../Images/logo19.png'
import logo20 from '../Images/logo20.png'
import logo21 from '../Images/logo21.png'

// import resume_test from '../Images/resume_test.pdf'
import matthew_wasylko_resume from '../Images/matthew_wasylko_resume.pdf'

const HyperLinksStyle = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-content: left;
margin-top: -5%;
margin-bottom: 5%;
@media screen and (max-width: 365px){
    width: 70%;
    overflow-x: scroll;
    margin-bottom: -5%;
}
@media screen and (max-width: 460px){
    margin-top: -20%;
    /* margin-bottom: 10%; */
}
@media screen and (max-width: 895px) {
    margin-bottom: 3%;
    margin-top: -4%;
}
`

const ImageItem = styled.img`
width: 3.125em;
padding: 0.5em;
&:hover {
    /* transition: 5s; */
    opacity: 0.3;
    /* transform: scale(1.1); */
}
`

const ScrollElements = styled.div`
width: 100vw;
margin-bottom: 10%;
margin-left: -0.9vw;
padding-inline-start: 1em;

position: relative;
overflow: hidden;
display: flex;
white-space: nowrap;
flex-wrap: nowrap;
/* border: solid white 2px; */

@media screen and (max-width: 1200px) {
    margin-bottom: 13%;
    
}
@media screen and (max-width: 1060px) {
    margin-bottom: 15%;
    
}
@media screen and (max-width: 895px) {
    margin-bottom: 7%;
    
}
@media screen and (max-width: 460px) {
    margin-bottom: 12%;
}
@media screen and (max-width: 300px){
    margin-left: -1.2vw;
    margin-top: -10%;
}

@media screen and (max-height: 660px) {
    margin-top: 20%;
}
@media screen and (max-height: 580px) {
    margin-top: 30%;
}
@media screen and (max-height: 560px) {
    margin-top: 60%;
}
@media screen and (max-height: 470px) {
    margin-top: 80%;
}

`

const TextItem = styled.h1`
font-size: 1.15em;
text-transform: uppercase;
text-align: center;
width: 100vw;
margin-top: 1em;
margin: 0;
margin-inline-start: 100%;

alt: "Searching for a junior developer role";

@media screen and (max-width: 895px){
    @keyframes animate_text{
    from {
        transform: translate3d(100, 0, 0);
    }
    to {
        transform: translate3d(-350%, 0, 0);
    }}    
}
@media screen and (max-width: 530px) {
    @keyframes animate_text{
    from {
        transform: translate3d(100, 0, 0);
    }
    to {
        transform: translate3d(-300%, 0, 0);
    }}
    
}
@media screen and (max-width: 365px){
    font-size: 1em;
    /* position: relative; NEED TO MAKE A POSITION CONTAINER */
}
@media screen and (max-width: 300px){
    font-size: 1em;
    @keyframes animate_text{
    from {
        transform: translate3d(0, 0, 0);
    }
    to {
        transform: translate3d(-150%, 0, 0);
    }}
}

animation: animate_text 13s linear infinite;

@keyframes animate_text{
    from {
        transform: translate3d(100, 0, 0);
    }
    to {
        transform: translate3d(-450%, 0, 0);
    }}  
`

const HyperLinks = () => {
    return ( 
        <div>
            <br></br>
            <br></br>
            <ScrollElements>
                <TextItem>Looking For A Junior Developer Role.</TextItem>
                </ScrollElements>
                    <HyperLinksStyle>
                        <div><ul><a href="https://github.com/MDW-94"><ImageItem src={logo21} alt="a link to my github"/></a></ul></div>
                        <div><ul><a href="https://linkedin.com/in/matthew-david-wasylko-75614b224"><ImageItem src={logo20} alt="a link to my linked in profile"/></a></ul></div>
                        <div><ul><a href={matthew_wasylko_resume} download><ImageItem src={logo17} alt="download my resume"/></a></ul></div>
                        <div><ul><a href="mailto:matthew.wasylko@gmail.com"><ImageItem src={logo18} alt="a link to my email address"/></a></ul></div>
                        {/* <div><ul><a href="tel:"><ImageItem src={logo16}/></a></ul></div> */}
                    </HyperLinksStyle>
        </div>
     );
}
 
export default HyperLinks;