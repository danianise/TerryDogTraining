import React from 'react'
import Carousel from './Carousel'
import Header from './Header'

function LandingPage({testimonialArray}) {
  return (<>
    <Header />
    <div>
        <h1>What is it you don't like about your dog?</h1>
        <h3>Let's work together to fix it.</h3>
        <Carousel testimonialArray={testimonialArray} />
    </div>
  </>)
}

export default LandingPage