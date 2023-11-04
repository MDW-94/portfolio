import styled from "styled-components"

const SearchBarStyle = styled.input`
font-family: 'Courier New', Courier, monospace;
border-radius: 40em;
height: 1.5em;
width: 49.7vw;
font-size: 1.2em;
font-weight: 800;
text-align: center;

background: rgba(249, 105, 14, 0.30);
border: rgba(255, 255, 255, 0);
color: white;

@media screen and (max-width: 750px){
    width: 50vw;
    font-size: 1em;
}

@media screen and (max-width: 650px){
    width: 50vw;
    font-size: 1em;
}

&::placeholder{
    color: white;
    font-weight: 500;
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