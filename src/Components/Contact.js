import logo17 from '../Images/logo17.png'
import logo18 from '../Images/logo18.png'
import logo20 from '../Images/logo20.png'
import logo21 from '../Images/logo21.png'

import resume_test from '../Images/resume_test.pdf'

import styled from "styled-components";


const FlexContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
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
width: 110px;
padding: 2.5em;
&:hover {
    /* transition: 5s; */
    opacity: 0.5;
    transform: scale(1.2);
}
`

const Contact = () => {
    return ( 
        <>
        <div></div>
        <FlexContainer2>
            <h3></h3>
            <FlexContainer>
                    <div><ul><a href="https://github.com/MDW-94"><ImageItem1 src={logo21}/></a></ul></div>
                    <div><ul><a href="https://linkedin.com/in/matthew-david-wasylko-75614b224"><ImageItem1 src={logo20}/></a></ul></div>
                    <div><ul><a href={resume_test} download><ImageItem1 src={logo17}/></a></ul></div>
                    <div><ul><a href="mailto:matthew.wasylko@gmail.com"><ImageItem1 src={logo18}/></a></ul></div>
            </FlexContainer>
            <h3></h3>
        </FlexContainer2>
        <div></div>
        <div></div>
        </>
     );
}
 
export default Contact;