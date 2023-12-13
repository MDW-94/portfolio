import styled from "styled-components"
import { useProjects } from "../hooks/useProjects"

const SearchBarStyle = styled.input`
font-family: 'Courier New', Courier, monospace;
border-radius: 0.5em;
height: 1.5em;
width: 99.5vw;
font-size: 1.3em;
font-weight: 800;
text-align: center;
color: white;

background: rgba(4, 59, 92, 0.10);
border: 2px solid antiquewhite;

@media screen and (max-width: 750px){
    border-radius: 0.2em;
    font-size: 1em;
}

@media screen and (max-width: 650px){
    font-size: 1em;
}

&::placeholder{
    color: whitesmoke;
    font-weight: 500;
}
&:hover{
    opacity: 0.7
}
`

const SearchBar = () => {

    const {loadQuery} = useProjects();

    const handleChange = (e) =>{
        e.preventDefault()
        loadQuery(e.target.value)
    }

    return ( 
        <>
        <SearchBarStyle type="text" onChange={handleChange} placeholder="- Search by Tech Stack -"/>
        </>
     );
}
 
export default SearchBar;