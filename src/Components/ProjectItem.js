import React from "react";
import styled from "styled-components";

const DisplayConatiner = styled.div`
overflow: hidden;
height: 55vh;
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
/* height: 25em; */
border-radius: 7.5%;
`

const ProjectsItem = ({project}) => {

    const programLanguages = project.languages.map((language, index) =>{
        if(index == (project.languages.length-1)){
            return language
        }
        return language + ", "
    })

    // const handleClick = (event) => {
    //     event.preventDefault()
    //     // console.log(project.name)
    //     console.log("HI!!!!!!!!!!!!!")
    //     // console.log(project.languages)
    // }
    

    return (
        <>
        <DisplayConatiner>
            <div>
                <StyledImage2 src={project.image}/>
            </div>
            <div>
                <h2>Name: {project.name}</h2>
                <h3>{project.desc}</h3>
                <br/>
                <h3>Languages: {programLanguages}</h3>
                {/* <button onClick={handleClick}></button> */}
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

