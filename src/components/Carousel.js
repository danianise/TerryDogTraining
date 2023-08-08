import React, {useContext} from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../css/Carousel.css'

function Slideshow() {

    let fadeImages = [
      "images/dog_1.jpeg",
      "images/dog_2.jpeg",
      "images/dog_3.jpeg",
      "images/dog_4.jpeg",
      "images/dog_5.jpeg",
      "images/dog_6.jpeg"
    ]
  
  return (
    fadeImages.length === 0
  ? <>
    <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  </>
  : <>
    <div className="slide-container">
      <Fade indicators={true} canSwipe={true}>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              {/* <a href={fadeImage.href}> */}
                <img 
                src={fadeImages[index]} 
                className="slideshowImages" 
                />
              {/* </a> */}
            </div>
          </div>
        ))}
      </Fade>
    </div>
    </>
  )
}

export default Slideshow