import React from "react";
import styled from "styled-components";

const DisplayConatiner = styled.div`
background-color: rgba(4, 59, 92, 0.60);
overflow: hidden;
border-radius: 12px;

display: flex;
flex-direction: column;
padding: 32px;
margin-top: 32px;
margin-bottom: 32px;
width: 50%;
justify-content: space-between;
align-items: center;

overflow-x: scroll;

@media screen and (max-width: 600px){
    width: 70vw;
    
}

`

const ProjectCard = styled.div`
display: flex;
justify-content: space-between;
max-height: 128px;
max-width: 80vw;
gap: 32px;
overflow-x: scroll;
`

const StyledImage2 = styled.img`
border-radius: 8px;
max-width: 256px;
max-height: 128px;
/* padding-left: 64px; */

@media screen and (max-width: 730px){
    
}

&:hover {
    opacity: 0.75;
    outline: solid lightcoral 3px;

    /* border: 0.2em solid lightcoral; */
    transition: 0.6s;
}
`
const TextContainerStyle = styled.div`
font-size: 16px;
margin-right: 16px;
overflow-y: scroll;

@media screen and (max-width: 600px){
    
}
`

const ProjectsItem = ({project}) => {

    const programLanguages = project.languages.map((language, index) =>{
        if(index === (project.languages.length-1)){
            return language
        }
        return language + ", "
    })

    return (
        <>
        <DisplayConatiner>
            <ProjectCard>
                <StyledImage2 src={project.image}/>
    
                <TextContainerStyle>
                    <h4>Name: {project.name}</h4>
                    <p>{project.desc}</p>
                    <br/>
                    <p>Languages: {programLanguages}</p>
                    {/* <button onClick={handleClick}></button> */}
                </TextContainerStyle>
            </ProjectCard>
        </DisplayConatiner>
        </>
    );
}
 
export default ProjectsItem;

// This grid container will take up the entirety of the viewport since 
// it’s the outermost parent of our webpage. 
// We can do this by setting the height and width of the 
// container using the viewport units 100vh and 100vw.

