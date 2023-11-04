import logo17 from '../Images/logo17.png'
import logo18 from '../Images/logo18.png'
import logo20 from '../Images/logo20.png'
import logo21 from '../Images/logo21.png'

import matthew_wasylko_resume from '../Images/matthew_wasylko_resume.pdf'

import styled from "styled-components";


const FlexContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;

@media screen and (max-width: 615px){
    margin-top: 28em;
    transform: scale(auto);
    padding-bottom: 1em;
    padding-right: 1em;
    
}
@media screen and (max-width: 365px){
    justify-content: space-between;
    margin-top: 60em;
    padding-bottom: 9em;
    padding-left: 5vw auto;
    padding-right: 50vw;
}
@media screen and (max-width:330px){
    padding-left: 2.5 auto;
    margin-top: 40em;
    padding-bottom: 8em;
}
`

const FlexContainer2 = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
height: 100vh;
width: 75vw;
`

const ImageItem1 = styled.img`
width: 6.875em;
padding: 2.5em;
&:hover {
    /* transition: 5s; */
    opacity: 0.5;
    transform: scale(1.2);
}
@media screen and (max-width: 365px){
    margin-top: 7em;
}
@media screen and (max-width: 615px){
    transform: scale(auto);
    
}
@media screen and (max-width:330px){
    width: 5em;
    padding: 1em;
}
`

const Contact = () => {
    return ( 
        <>
        <div></div>
        <FlexContainer2>
            <FlexContainer>
                <ul><a href="https://github.com/MDW-94"><ImageItem1 src={logo21}/></a></ul>
                <ul><a href="https://linkedin.com/in/matthew-david-wasylko-75614b224"><ImageItem1 src={logo20}/></a></ul>
                <ul><a href={matthew_wasylko_resume} download><ImageItem1 src={logo17}/></a></ul>
                <ul><a href="mailto:matthew.wasylko@gmail.com"><ImageItem1 src={logo18}/></a></ul>
            </FlexContainer>
        </FlexContainer2>
        <div></div>
        <div></div>
        </>
     );
}
 
export default Contact;