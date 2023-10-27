import styled from "styled-components"

const SearchBarStyle = styled.input`
font-family: 'Courier New', Courier, monospace;
border-radius: 30em;
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

const SearchBar = ({loadQuery}) => {

    const handleChange = (e) =>{
        e.preventDefault()
        loadQuery(e.target.value)
    }

    return ( 
        <>
        <SearchBarStyle type="text" onChange={handleChange} placeholder="Search by programming language"/>
        </>
     );
}
 
export default SearchBar;