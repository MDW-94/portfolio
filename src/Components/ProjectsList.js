import React, {useEffect} from "react";
import ProjectItem from './ProjectItem'
import SearchBar from "./SearchBar";
import styled from "styled-components";
import { useProjects } from "../hooks/useProjects";

const ProjectsPageContainer = styled.div`
display: flex;
flex-direction: column;
height: 80vh;
width: 100vw;
padding: 1em;
align-items: center;
justify-content: center;
margin-top: auto;

`
const DisplayContainerMain = styled.div`
display: grid;
height: 65vh;
width: 80vw;
align-items: center;
`
const SearchBarElement = styled.div`
display: flex;
position: absolute;
top: 20%;
flex-direction: column;
border-radius: 30em;
/* align-items: top; */
/* justify-content: start; */

width: 50vw;

@media screen and (max-width: 600px){
    margin-left: 0%;
}
@media screen and (max-width: 895px){
    top: 35%;
}
@media screen and (max-width: 460px){
    top: 30.5%;
}

@media screen and (max-width: 400px){
    top: 35.5%;
}
`

const ProjectsList = () => {

    const {projects} = useProjects();

    const projectsList = projects.map((project, index) => {
        return <ProjectItem key={index} project={project}/>
    })

    // console.log(projects)

    return ( 
        <ProjectsPageContainer>
            {/* <SearchBarElement> */}
                {/* <SearchBar loadQuery={loadQuery}/>
                </SearchBarElement> */}
                <DisplayContainerMain>
                    {projectsList}
                    <br></br>
                </DisplayContainerMain>
        </ProjectsPageContainer>
     );
}
 
export default ProjectsList;

// My phone screen is 395x610px