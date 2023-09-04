import React from 'react'
import Carousel from './Carousel'
import Header from './Header'
import '../css/LandingPage.css'

function LandingPage({testimonialArray}) {
  return (<>
    <Header />
    <div>
      <img id='terry_image' src='/images/terry.png' />
        <p>
          <span  id='dont_like'>What is it you don't like about your dog?</span>
          <br />
          <span id='work_together'>Let's work together to fix it.</span>
        </p>
        <Carousel testimonialArray={testimonialArray} />
    </div>
  </>)
}

export default LandingPage