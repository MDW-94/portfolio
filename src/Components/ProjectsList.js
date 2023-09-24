import React from "react";
import ProjectItem from './ProjectItem'
import styled from "styled-components";

const ProjectsPageContainer = styled.div`
display: flex;
flex-direction: column;
height: 76vh;
width: 100vw;
padding: 1em;
align-items: center;
margin-left: -4.5em;
/* justify-content: center; */
`

const DisplayConatinerMain = styled.div`
display: grid;
height: 80vh;
width: 80vw;
/* align-items: center; */
/* grid-template-columns: minmax(300px, 3fr) minmax(300px, 3fr) minmax(300px, 3fr) ; */
/* grid-template-columns: 1fr 2fr;
padding: 2em;
grid-gap: 15px; */
/* overflow-y: scroll; */
`
const SearchBarElement = styled.div`
border: 3px solid antiquewhite;
width: 80vw;
margin-left: 5em;
padding: 0.5em;
`

const ProjectsList = ({projects}) => {

    const projectItemsList = projects.map((project, index) => {
        return <ProjectItem key={index} project={project}/>
    })

    return ( 
        <ProjectsPageContainer>
            <SearchBarElement>
                <h3>Search Bar?</h3>
                </SearchBarElement>
                <DisplayConatinerMain>
                    {projectItemsList}
                    {projectItemsList}
                    {projectItemsList}
                </DisplayConatinerMain>
        </ProjectsPageContainer>
     );
}
 
export default ProjectsList;