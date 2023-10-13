import React, { useRef } from "react";

import Spline from '@splinetool/react-spline'

import styled from "styled-components";


const AboutStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const SplineScene = styled.div`
width: 60%;
`

const Button = styled.button`
color: black;
font-size: 1em;
font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
padding: 1em;
background-color: white;

`


const About = () => {

    const cube = useRef();
    const sphere = useRef();

    function onLoad(spline) {
        const obj = spline.findObjectById('e3bbbd58-74c6-4a77-a642-575ce8c300df');
        const obj2 = spline.findObjectById('69dcbcdb-67e4-492b-b3b2-17ca574a84cd')
        cube.current = obj
        sphere.current = obj2
    }

    function moveObj() {
        console.log(cube.current);

        cube.current.position.x += 1000;
        // cube.current.position.y += 10;
    };

    function moveObj2() {
        console.log(sphere.current);
        sphere.current.position.x += 100;
    };


    return ( 
        <AboutStyle>
            <h1>I am the About Page - Hello!</h1>
            <SplineScene>
            {onLoad ? <Spline
            scene="https://prod.spline.design/QhRn0ppxQkt44IOm/scene.splinecode"
            onLoad={onLoad}
            />: <h2>Loading...</h2>}
            </SplineScene>
            <br></br>
            <Button type="button" onClick={moveObj}>Move Object</Button>
            <Button type="button" onClick={moveObj2}>Move Object 2</Button>
        </AboutStyle>
     );
}
 
export default About;

// https://github.com/splinetool/react-spline
