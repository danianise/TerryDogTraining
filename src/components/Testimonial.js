import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import "../css/Testimonial.css"

export default function Testimonial() {
  return (
    <div className='testimonial'>
        <span id='left_quote'>
            <FaQuoteLeft />
        </span>
        <br />
        <br />
        <p id='testimonial_p'>
            Terry goes above and beyond to make both owner and dog feel comfortable
            and capable. She focuses on the individual needs and priorities and has 
            a very patient and productive approach. After just one session she gave us 
            the tools we needed to continue training on a daily basis on our own and we 
            almost immediately saw results.
            She is extremely knowledgeable and I would recommend her to anyone!
            <span id='right_quote'>
                <FaQuoteRight />
            </span>
        </p>
        <p id='testimonial_name'>
            -Mason Gilligan
        </p>
    </div>
  )
}
