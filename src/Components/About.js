import React, { useRef } from "react";

import me1 from '../Images/photos_me/me1.png'
// same for 2, 3, 4 etc - make carousel and some words!

import styled from "styled-components";


const AboutStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const ImageStyle = styled.img`
width: 30vw;
border-radius: 2em;
`


const About = () => {



    return ( 
        <AboutStyle>
            <h1>I am the About Page - Hello!</h1>
            <ImageStyle src={me1} alt="A profile photo of me on holiday"></ImageStyle>

        </AboutStyle>
     );
}
 
export default About;

// https://github.com/splinetool/react-spline

// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
