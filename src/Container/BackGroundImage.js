import React from "react";
import background1 from '../background1.png'
import styled from "styled-components";

const TextContainer = styled.div`
position: absolute;
bottom: 0;
right: 0;
margin-right: 2em;
padding: 0.12em;
font-weight: 800;
`

const BackgroundImageStyle = styled.div`
    background-size: 200vh;
    size: absolute;
    filter: contrast(120%);

@media screen and (max-height: 500px){
    background-size: 150vw;

    
}
`

const BackgroundImageComponent = () => {
    const backgroundStyle ={
        backgroundImage: `url(${background1})`,
        backgroundRepeat: 'no-repeat',
        height: '100vh',
    };
    return (
        <>
    <BackgroundImageStyle style={backgroundStyle}><TextContainer><h4>© 2023 M. Wasylko</h4></TextContainer></BackgroundImageStyle>
    </>
    )
};
 
export default BackgroundImageComponent;

// min-height: 100vh; means that the minimum height of an element should be 100% of the viewport height. It is a CSS media query used to set the minimum height of an element to be equal to the height of the viewport.