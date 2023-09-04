import React from 'react'
import "../css/About.css"
import Header from './Header'
import { useLocation } from 'react-router-dom'

function About() {

    const location = useLocation()
    const {pathname} = location
    let title = pathname.substr(1, pathname.length)
    console.log(title)

  return (<>
    <Header title={title} />

    <div className='pricing'>
        <p>
            $35 per 1 hour session
            <br />
            For dog households in Cheshire, Lanesborough, Pittsfield, Lenox, Lee, Great Barrington and North Adams
        </p>
    </div>
    <div className='about'>
        <h2 id='firstH2'>
            Unleash Your Dog's Potential with Positive Training Methods
        </h2>
        <p>
        Welcome to Dog Training with Terry Cormier, where tails wag, and bonds strengthen 
        through positive and effective training methods. I believe that every 
        dog possesses untapped potential, and my mission is to help you bring out the best 
        in your furry companion. With a wealth of experience and a heart full of passion, 
        I'm here to guide you and your dog on a journey of growth, learning, and fun.
        </p>

        <h2>
            Experience that Matters
        </h2>
        <p>
        I have had the privilege of working with several dogs in water rescue training.
         I also served as the Pet Therapy Program Organizer for the Berkshire Medical Center and Berkshire Humane Society 
         from 2001 to 2023, and as the Safe Pet Program Liaison for the Berkshire Medical Center from 2015 to 2023. 
         This extensive experience has equipped me with insights into the unique needs of each dog, allowing me to 
         tailor my approach for maximum results with an emphasis on a harmony between dog and owner.
        </p>

        <h2>
            Positive Training for Lasting Results
        </h2>
        <p>
        My training philosophy is rooted in positivity and encouragement. I firmly believe that nurturing a strong 
        bond between you and your dog is the key to successful training. Through a repertoire of engaging games 
        and activities, we make learning an exciting journey for both you and your dog. By focusing on positive 
        reinforcement, we foster behaviors that are not only obedient but also reflective of the strong 
        connection you share.
        </p>
            
        <h2>
            Personalized Approach
        </h2>
        <p>
        No two dogs are the same, which is why I tailor my training programs to suit your dog's unique personality,
         temperament, and learning pace. Whether you have a high-energy pup or a more reserved companion, I have 
         the expertise to develop a training plan that aligns with your goals and your dog's individual needs.
        </p>

        <h2>
            Unleash the Joy in Your Relationship with Your Dog
        </h2>
        <p>
        I am all about making training a delightful adventure. Watching tails wag and witnessing those "aha" 
        moments as your dog develops positive behaviors is what fuels my passion. I invite you to join me on this
         journey of growth, companionship, and harmony as we unlock your dog's full potential together.
        </p>

        <h2>
            <a href='/contact'>
                Contact Me
            </a>
        </h2>
        <p>
        Ready to embark on a training experience that's as enriching as it is enjoyable? Reach out to me today by filling out <a href='/contact'><b>THIS FORM</b></a>, 
        and let's start a partnership that will empower your dog to shine. 
        </p>

    </div>
    </>)
}

export default About