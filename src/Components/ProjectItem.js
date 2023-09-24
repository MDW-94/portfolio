import React from "react";
import styled from "styled-components";

const DisplayConatiner = styled.div`
overflow: hidden;
height: 50vh;
width: 80vw;
display: grid;
grid-template-columns: 1.5fr 3fr;
grid-gap: 3em;
padding: 3em;
align-items: center;


/* grid-template-rows: 50px 1fr 40px; */
/* grid-template-columns: repeat(6, calc(50% - 40px)); */
/* grid-template-rows: minmax(150px, 1fr); */
/* grid-column: 1/-1; */
/* padding-left: 4em; */
/* overflow-y: scroll; */
`

const GridItem = styled.div`

`

const StyledImage2 = styled.img`
width: 20em;
`

const ProjectsItem = ({project}) => {
    return (
        <>
        <DisplayConatiner>
            <div>
                <StyledImage2 src={project.image}/>
            </div>
            <div>
                <h2>Name: {project.name}</h2>
                <h3>About: {project.desc}</h3>
                <h3>Languages: {project.language}</h3>
            </div>
        </DisplayConatiner>
        </>
    );
}
 
export default ProjectsItem;

// This grid container will take up the entirety of the viewport since 
// it’s the outermost parent of our webpage. 
// We can do this by setting the height and width of the 
// container using the viewport units 100vh and 100vw.

