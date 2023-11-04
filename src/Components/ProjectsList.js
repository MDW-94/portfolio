import React from "react";
import ProjectItem from './ProjectItem'
import SearchBar from "./SearchBar";
import styled from "styled-components";

const ProjectsPageContainer = styled.div`
display: flex;
flex-direction: column;
height: 76vh;
width: 100vw;
padding: 1em;
align-items: center;
margin-top: auto;
/* margin: auto; */

`

const DisplayContainerMain = styled.div`
display: grid;
height: 80vh;
width: 80vw;
align-items: center;

/* grid-template-columns: minmax(300px, 3fr) minmax(300px, 3fr) minmax(300px, 3fr) ; */
/* grid-template-columns: 1fr 2fr;
padding: 2em;
grid-gap: 15px; */
/* overflow-y: scroll; */
`
const SearchBarElement = styled.div`
display: flex;
flex-direction: column;
border-radius: 30em;
align-items: center;
border: 2.75px solid antiquewhite;
width: 50vw;
margin-left: 5em;
/* padding: 0.5em; */

@media screen and (max-width: 600px){
    margin-left: 0%;
}
`

const ProjectsList = ({projects, loadQuery}) => {

    const projectsList = projects.map((project, index) => {
        return <ProjectItem key={index} project={project}/>
    })

    return ( 
        <ProjectsPageContainer>
            <br/>
            <br/>
            <SearchBarElement>
                <SearchBar loadQuery={loadQuery}/>
                </SearchBarElement>
                <DisplayContainerMain>
                    {projectsList}
                </DisplayContainerMain>
        </ProjectsPageContainer>
     );
}
 
export default ProjectsList;

// My phone screen is 395x610px