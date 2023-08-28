import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import "../css/TestimonialCard.css"

export default function TestimonialCard({testimonialArray}) {

    return (<>
            {testimonialArray.map((eachTestimonial) => {
                return(
                    <div className='testimonial_card'>

                        <div id='testimonial_main'>
                            <div id='testimonial_text'>
                                <span id='left_quote'>
                                    <FaQuoteLeft />
                                </span>
                                <br />
                                <br />
                                <p id='testimonial_card_p'>
                                    {eachTestimonial.paragraph}
                                    <span id='right_quote'>
                                        <FaQuoteRight />
                                    </span>
                                </p>
                            </div>

                            <div id='testimonial_dog'>
                                <img src={eachTestimonial.image}/>
                            </div>
                        </div>    

                        <p id='testimonial_card_name'>
                            {eachTestimonial.name}
                        </p>

                    </div>
                )
            })}
        </>)

//   return (
//     <div className='testimonial_card'>
//         <span id='left_quote'>
//             <FaQuoteLeft />
//         </span>
//         <br />
//         <br />
//         <p id='testimonial_card_p'>
//             Terry goes above and beyond to make both owner and dog feel comfortable
//             and capable. She focuses on the individual needs and priorities and has 
//             a very patient and productive approach. After just one session she gave us 
//             the tools we needed to continue training on a daily basis on our own and we 
//             almost immediately saw results.
//             She is extremely knowledgeable and I would recommend her to anyone!
//             <span id='right_quote'>
//                 <FaQuoteRight />
//             </span>
//         </p>
//         <p id='testimonial_card_name'>
//             -Mason Gilligan
//         </p>
//     </div>
//   )
}
