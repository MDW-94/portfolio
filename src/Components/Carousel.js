import React, { useRef } from "react";

import me1 from '../Images/photos_me/me1.png'
import me2 from '../Images/photos_me/me2.png'
import me3 from '../Images/photos_me/me3.png'
import me4 from '../Images/photos_me/me4.png'

import styled from "styled-components";

const SlideshowContainer = styled.div`
*{box-sizing:border-box}
    
    max-width: 30%;
    position: relative;
    margin: auto;

&:fade{
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.4s;
    animation-name: fade;
    animation-duration: 1.4s;
}

@-webkit-keyframes fade {
    from {opacity: .5}
    to {opacity: 2}
}

@keyframes fade {
    from {opacity: .5}
    to {opacity: 2}
}
`

const Containers = styled.div`
    /* display: none; */
`

const BackButton = styled.div`
    cursor: pointer;
    position: absolute;
    top: 48%;
    width: auto;
    margin-top: -23px;
    padding: 17px;
    color: grey;
    font-weight: bold;
    font-size: 19px;
    transition: 0.4s ease;
    border-radius: 0 5px 5px 0;
    user-select: none;

    &:hover{
        background-color: rgba(0,0,0,0.8);
    }
`

const ForwardButton = styled.div`
    cursor: pointer;
    position: absolute;
    top: 48%;
    width: auto;
    margin-top: -23px;
    padding: 17px;
    color: grey;
    font-weight: bold;
    font-size: 19px;
    transition: 0.4s ease;
    border-radius: 0 5px 5px 0;
    user-select: none;

    right: 0;
    border-radius: 4px 0 0 4px;

    &:hover{
        background-color: rgba(0,0,0,0.8);
    }
`

const DotStyle = styled.div`
    cursor: pointer;
    height: 16px;
    width: 16px;
    margin: 0 3px;
    background-color: #acc;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.5s ease;

    text-align:center
`

const ImageStyle = styled.img`
width: 10vw;
border-radius: 2em;
`



const Carousel = () => {

    var slidePosition = 1;
    /* SlideshowContainer(slidePosition); */

    const plusSlides = (n) => {
        SlideshowContainer(slidePosition += n);
    }

    const currentSlides = (n) => {
        SlideshowContainer(slidePosition = n);
    }

    const SlideShow = (n) => {
        let i;
        let slides = Containers;
        let circles = DotStyle;

        if(n > slides.length) {slidePosition =1 }
        if(n < 1) {slidePosition = slides.length}
        for ( i = 0; i < slides.length; i++) {
            slides[i].style.display= "none";
        }
        for (i = 0; i < circles.length; i++){
            circles[i].className.replace("enable", "")
        }

        slides[slidePosition-1].style.display = "block";
        circles[slidePosition-1].className += " enable";

    }



    return ( 
        <>
         <SlideshowContainer>
                <Containers>
                    <ImageStyle src={me1} alt="A profile photo of me on holiday"></ImageStyle>
                    <div class="MessageInfo">1 / 3</div>
                </Containers>

                <Containers>
                    <ImageStyle src={me2} alt="A profile photo of me on holiday"></ImageStyle>
                    <div class="MessageInfo">2 / 3</div>
                </Containers>

                <Containers>
                    <ImageStyle src={me4} alt="A profile photo of me on holiday"></ImageStyle>
                    <div class="MessageInfo">3 / 3</div>
                </Containers>

                <BackButton onClick="plusSlides(-1)">&#10094;</BackButton>
                <ForwardButton onClick="plusSlides(1)">&#10095;</ForwardButton>
            </SlideshowContainer>
            <br></br>
            <div> {/* style="text-align:center" */}
                <DotStyle onclick="currentSlides(1)"></DotStyle>
                <DotStyle onclick="currentSlides(2)"></DotStyle>
                <DotStyle onclick="currentSlides(3)"></DotStyle>
            </div>
            
        </>
     );
}
 
export default Carousel;


/* var slidePosition = 0;
SlideShow();

function SlideShow() {
  var i;
  var slides = document.getElementsByClassName("Containers");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidePosition++;
  if (slidePosition > slides.length) {slidePosition = 1}
  slides[slidePosition-1].style.display = "block";
  setTimeout(SlideShow, 2000); // Change image every 2 seconds
}  

https://www.section.io/engineering-education/how-to-make-an-image-carousel-for-your-website/

*/