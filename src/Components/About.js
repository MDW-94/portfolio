import React, { useRef } from "react";

import Carousel from "./Carousel";

import styled from "styled-components";


const AboutStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`


const About = () => {



    return ( 
        <AboutStyle>
            <h1>I am the About Page - Hello!</h1>
            <Carousel/>
        </AboutStyle>
     );
}
 
export default About;

// https://github.com/splinetool/react-spline

// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
