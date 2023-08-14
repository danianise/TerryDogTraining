import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import "../css/TestimonialCard.css"

export default function TestimonialCard() {

    let testimonialArray = [
        {
            name: 'Mason Gilligan',
            paragraph: 'Terry goes above and beyond to make both owner and dog feel comfortable and capable. She focuses on the individual needs and priorities and has a very patient and productive approach. After just one session she gave us the tools we needed to continue training on a daily basis on our own and we almost immediately saw results. She is extremely knowledgeable and I would recommend her to anyone!',
            abbreviated: 'She is extremely knowledgeable and I would recommend her to anyone!'
        },
        {
            name: 'Steve Papa',
            paragraph: 'Terry Cormier’s ability with dogs is impressive ! I have watched her first hand transform my stubborn Swiss Mountain Dog into a managable 140lb dog. Her knowledge and experience make her an asset for even the most challenging dogs.',
            abbreviated: 'Her knowledge and experience make her an asset for even the most challenging dogs.'
        },
        {
            name: 'Heather Holmes',
            paragraph: 'I am a first time giant breed owner and through Maisie dog’s puppyhood I quickly found out I had much to learn! With Terry’s experience with giant breeds as well as her knowledge in [her] therapy dog career I immediately felt reassured. Training with Terry has been such a rewarding and exciting journey for Maisie and I!',
            abbreviated: 'Training with Terry has been such a rewarding and exciting journey!'
        },
        {
            name: 'Brenda Potter',
            paragraph: 'Terry was very eager to help with our 4 month old Rottweiler puppy. In four weeks we had an obedient dog. Thank you, Terry.',
            abbreviated: 'In four weeks we had an obedient dog.'
        },
        {
            name: 'Jordan Muztafago',
            paragraph: 'Terry was great with my dog! I have one dog named Kadence. She is 5. Our biggest problem with Kadence used to be that she was a huge puller on a leash. Terry helped us so much! Kadence now walks constantly by our side, and is great with ignoring distractions. I would definitely recommend Terry to people struggling with dogs walking on their leash.',
            abbreviated: 'I would definitely recommend Terry.'
        },
        {
            name: 'Christina Korney',
            paragraph: 'I had been planning to get my first puppy alone- a yellow lab purebred. I was excited, yet overwhelmed to say the least. Once I met Terry, we went through the basics with my dog- sit, stay, heel- utilizing treats and using a slow progression week by week while doing my homework. She and her dog Sebastian helped make me feel at home and comfortable with expecting the unexpected. She’s an excellent dog trainer. After I met Terry I referred several of my friends for dog training. I would recommend Terry to anyone you’ll be lucky to have her. She’s experienced (over 25 years), she’s knowledgeable, she gives great advice, she’s patient and kind, and she doesn’t make you feel silly with questions at all.',
            abbreciated: 'After I met Terry I referred several of my friends for dog training.'
        },
        // {
        //     name: '',
        //     paragraph: ''
        // },
    ]

    return (<>
            {testimonialArray.map((eachTestimonial) => {
                return(
                    <div className='testimonial_card'>
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
