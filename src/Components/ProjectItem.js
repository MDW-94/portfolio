import React from "react";
import styled from "styled-components";

const DisplayConatiner = styled.div`
overflow: hidden;
height: 50vh;
width: 80vw;
display: grid;
grid-template-columns: 1.5fr 3fr;
grid-gap: 3em;
padding: 1.5em;
align-items: center;
overflow-x: scroll;

@media screen and (max-width: 600px){
    width: 70vw;
    
}

`
const StyledImage2 = styled.img`
width: 20em;
background-image: contain;
aspect-ratio: 100%;
border-radius: 7.5%;

@media screen and (max-width: 730px){
    width: 15em;
}

&:hover {
    opacity: 0.75;
    outline: solid lightcoral 3px;

    /* border: 0.2em solid lightcoral; */
    transition: 0.6s;
}
`
const TextContainerStyle = styled.div`
padding: 1.75em;
width: 80%;
border-radius: 10%;
background-color: rgba(4, 59, 92, 0.60);
max-height: 40%;

overflow-y: scroll;

font-weight: 500;

@media screen and (max-width: 600px){
    margin-right: 5em;
    
}
`

const ProjectsItem = ({project}) => {

    const programLanguages = project.languages.map((language, index) =>{
        if(index == (project.languages.length-1)){
            return language
        }
        return language + ", "
    })

    return (
        <>
        <DisplayConatiner>
            <div>
                <StyledImage2 src={project.image}/>
            </div>
            <TextContainerStyle>
                <h3>Name: {project.name}</h3>
                <p>{project.desc}</p>
                <br/>
                <p>Languages: {programLanguages}</p>
                {/* <button onClick={handleClick}></button> */}
            </TextContainerStyle>
        </DisplayConatiner>
        </>
    );
}
 
export default ProjectsItem;

// This grid container will take up the entirety of the viewport since 
// it’s the outermost parent of our webpage. 
// We can do this by setting the height and width of the 
// container using the viewport units 100vh and 100vw.

