import React from "react";
import background1 from '../background1.png'
import styled from "styled-components";

const TextContainer = styled.div`
/* text-align: end; */
position: absolute;
bottom: 0;
right: 0;
margin-right: 2em;
padding: 0.12em;
font-weight: 800;
`

const BackgroundImageComponent = () => {
    const backgroundStyle ={
        backgroundImage: `url(${background1})`,
        backgroundStyle: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
    };
    return (
        <>
    <div style={backgroundStyle}><TextContainer><h4>© 2023 M. Wasylko</h4></TextContainer></div>
    </>
    )
};
 
export default BackgroundImageComponent;

// min-height: 100vh; means that the minimum height of an element should be 100% of the viewport height. It is a CSS media query used to set the minimum height of an element to be equal to the height of the viewport.