import React from 'react'
import Carousel from './Carousel'

function LandingPage({testimonialArray}) {
  return (
    <div>
        <h1>What is it you don't like about your dog?</h1>
        <h3>Let's work together to fix it.</h3>
        <Carousel testimonialArray={testimonialArray} />
    </div>
  )
}

export default LandingPage