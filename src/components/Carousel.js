import React, {useContext} from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import "../css/TestimonialCard.css"
import '../css/Carousel.css'

function Carousel({testimonialArray}) {

    // let abbreviated = []

    // testimonialArray.map((eachTestimonial) => {
    //   abbreviated.push(eachTestimonial.abbreviated)
    // })
  
  return (
    testimonialArray.length === 0
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
      <Fade indicators={false} canSwipe={true}>
        {testimonialArray.map((eachTestimonial, index) => (<>
          <a href='/testimonials'>
            <div className="each-fade" key={index}>
              <div className='testimonial_card'>
                          <span id='left_quote'>
                              <FaQuoteLeft />
                          </span>
                          <br />
                          <br />
                          <p id='testimonial_card_p'>
                              {eachTestimonial.abbreviated}
                              <span id='right_quote'>
                                  <FaQuoteRight />
                              </span>
                          </p>
                          <p id='testimonial_card_name'>
                              {eachTestimonial.name}
                          </p>
                      </div>
            </div>
          </a>
        </>))}
      </Fade>
    </div>
    </>
  )
}

export default Carousel