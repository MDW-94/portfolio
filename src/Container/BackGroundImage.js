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
    width: 100%;
    size: absolute;
    filter: contrast(120%);


@media screen and (max-height: 750px){
    background-size: 150vw;
}
@media screen and (max-height: 800px){
    /* background-size: 200%; */
}
@media screen and (max-width: 775px){
    background-size: 210vh;
    width: 100vw;
    background-position-x: center;
}

@media screen and (max-height: 380px){
    background-size: cover;
}
@media screen and (max-height: 250px){
    background-size: 250vw;
}
`

const BackgroundImageComponent = () => {

    const backgroundStyle ={
        backgroundImage: `url(${background1})`,
        backgroundRepeat: 'no-repeat',
        backgroundsize: 'cover',
        height: '100vh',
        overflow: 'hidden'
    };
    return (
        <>
    <BackgroundImageStyle style={backgroundStyle}>
        <TextContainer><h4>© 2023 M. Wasylko</h4></TextContainer>
    </BackgroundImageStyle>
    </>
    )
};
 
export default BackgroundImageComponent;