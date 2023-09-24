import React from "react";

import styled from "styled-components";
import logo16 from '../Images/logo16.png'
import logo17 from '../Images/logo17.png'
import logo18 from '../Images/logo18.png'
import logo19 from '../Images/logo19.png'
import logo20 from '../Images/logo20.png'
import logo21 from '../Images/logo21.png'

const HyperLinksStyle = styled.div`
display: flex;
flex-direction: column;
/* height: 15% */
`

const ImageItem = styled.img`
width: 50px;
`

const HyperLinks = () => {
    return ( 
        <HyperLinksStyle>
            <div><ul><a href=""><ImageItem src={logo21}/></a></ul></div>
            <div><ul><a href=""><ImageItem src={logo20}/></a></ul></div>
            <div><ul><a href=""><ImageItem src={logo17}/></a></ul></div>
            <div><ul><a href=""><ImageItem src={logo18}/></a></ul></div>
            <div><ul><a href=""><ImageItem src={logo16}/></a></ul></div>
        </HyperLinksStyle>
     );
}
 
export default HyperLinks;

{/* <div><ul><a href=""><ImageItem src={logo19}/></a></ul></div> */}