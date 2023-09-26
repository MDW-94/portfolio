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
margin: auto;
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
align-items: center;
border: 2.75px solid antiquewhite;
width: 50vw;
margin-left: 5em;
/* padding: 0.5em; */
`

const SearchBar = styled.input`
font-family: 'Courier New', Courier, monospace;
height: 1.5em;
width: 50vw;
font-size: 1.5em;
font-weight: 800;
text-align: center;
background: rgba(255, 255, 255, 0.1);
border: rgba(255, 255, 255, 0);
color: white;
/* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
&::placeholder{
    color: lightgray;
    font-weight: 800;
}
&:hover{
    opacity: 0.7
}
`

const ProjectsList = ({projects, filterFunction, filteredProjects}) => {

    const projectItemsList = projects.map((project, index) => {
        return <ProjectItem key={index} project={project}/>
    })

    const projectFilterList = filteredProjects.map((project, index) => {
        return <ProjectItem key={index} project={project}/>
    })



    // const filteredProjectList = filteredProjects.map((project, index) => {
    //     return <ProjectItem key={index} project={project}/>
    // })

    const handleChange = ((event) => {
        event.preventDefault();
        const lowerCase = event.target.value.toLowerCase()
        filterFunction(lowerCase)
    })
    

    return ( 
        <ProjectsPageContainer>
            <br/>
            <br/>
            <SearchBarElement>
                <SearchBar type="text" placeholder="- Search for Project Name or Program Language -" onChange={handleChange}/>
                </SearchBarElement>
                <DisplayContainerMain>
                    {filteredProjects.length > 0 ? projectFilterList : projectItemsList} {/* SOMETHING IS HAPPENING HERE*/}
                    {/* {projectFilterList} */}
                    {/* {projectItemsList}
                    {projectItemsList} */}

                </DisplayContainerMain>
        </ProjectsPageContainer>
     );
}
 
export default ProjectsList;