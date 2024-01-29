import React from "react";
import ProjectItem from './ProjectItem'
import styled from "styled-components";
import { useProjects } from "../hooks/useProjects";

const ProjectsPageContainer = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
padding: 32px;
align-items: center;
justify-content: center;
margin-top: auto;

`
const DisplayContainerMain = styled.div`
gap: 128px;
height: 150vh;
width: 80vw;
`

const ProjectsList = () => {

    const {projects} = useProjects();

    const projectsList = projects.map((project, index) => {
        return <ProjectItem key={index} project={project}/>
    })

    // console.log(projects)

    return ( 
        <ProjectsPageContainer>
                <DisplayContainerMain>
                    {projectsList}
                    <br></br>
                </DisplayContainerMain>
        </ProjectsPageContainer>
     );
}
 
export default ProjectsList;

// My phone screen is 395x610px