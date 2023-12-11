import React, { useRef } from "react";

import Carousel from "./Carousel";

import styled from "styled-components";

import me1 from '../Images/photos_me/me1.png'

const ProfileImage = styled.img`
border-radius: 10%;
width: 35%;
margin-top: 25%;

@media screen and (max-width: 640px) {
    width: 45%;
    border-radius: 15%;
}

`

const AboutStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`


const About = () => {



    return ( 
        <AboutStyle>
            <p>Page Under Construction</p>
            {/* <Carousel/> */}
        </AboutStyle>
     );
}
 
export default About;