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

const HyperLinksStyle = styled.li`
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
}
@media screen and (max-width: 895px) {
    margin-bottom: 3%;
    margin-top: -4%;
}
`

const ImageItem = styled.img`
width: 3.125em;
padding: 0.5em;
aspect-ratio: 1/1;
&:hover {
    opacity: 0.3;
}
`

const TextItem = styled.h1`
font-size: 1.15em;
text-transform: uppercase;
text-align: center;
flex-wrap: wrap;
width: 100vw;
margin-top: 1em;
margin: 1em;
font-weight: 1000em;

@media screen and (max-width: 580px) {
    margin-top: 5em;
    width: 80vw;
    margin-left: 10vw;
    margin-right: 10vw;
    
}

@media screen and (max-width: 895px){
    margin-top: 3em;
    
}

alt: "Searching for a junior developer role";

`

const HyperLinks = () => {
    return ( 
        <div>
            <br></br>
            <br></br>
                <TextItem>- Looking For A Junior Developer Role -</TextItem><br></br>
                    <HyperLinksStyle>
                        <ul><a href="https://github.com/MDW-94"><ImageItem src={logo21} alt="a link to my github"/></a></ul>
                        <ul><a href="https://linkedin.com/in/matthew-david-wasylko-75614b224"><ImageItem src={logo20} alt="a link to my linked in profile"/></a></ul>
                        <ul><a href={matthew_wasylko_resume} download><ImageItem src={logo17} alt="download my resume"/></a></ul>
                        <ul><a href="mailto:matthew.wasylko@gmail.com"><ImageItem src={logo18} alt="a link to my email address"/></a></ul>
                    </HyperLinksStyle>
        </div>
     );
}
 
export default HyperLinks;