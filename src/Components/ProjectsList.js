import React from "react";
import ProjectItem from './ProjectItem'


const ProjectsList = ({projects}) => {

    const projectItemsList = projects.map((project, index) => {
        return <ProjectItem key={index} project={project}/>
    })

    return ( 
        <div>
        <h1>I am the ProjectsList - Howdy.</h1>
        <ul>
            {projectItemsList}
        </ul>
        </div>
     );
}
 
export default ProjectsList;