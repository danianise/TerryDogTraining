import React from 'react'
import '../css/FAQ.css'
import Header from './Header'
import { useLocation } from 'react-router-dom'

function FAQ() {

    const location = useLocation()
    const {pathname} = location
    let title = pathname.substr(1, pathname.length)
    console.log(title)

  return (<>
    <Header title={title}/>
    <div className='faq'>
        <h2 id='first_faq_h2'>
            What training methods do you use?
        </h2>
        <p>
            I exclusively use positive reinforcement training methods. This means I reward desired 
            behaviors with treats, praise, or play, promoting a healthy and trusting relationship between
             you and your dog.
        </p>

        <h2>
            How long will it take to see results?
        </h2>
        <p>
            The timeline for seeing results can vary depending on factors like your dog's temperament,
             your consistency in practicing the training techniques, and the specific behaviors we're 
             working on. Generally, though, you can expect to see progress within a few weeks.
        </p>

        <h2>
            Can you come to my house for training if I live in Lenox?
        </h2>
        <p>
            Yes, I will travel to many towns in the Berkshires, such as Cheshire, Lanesborough, 
            Pittsfield, Lenox, Lee, Great Barrington and North Adams. 
        </p>

        <h2>
            Can you help with specific behavior problems like barking or leash pulling?
        </h2>
        <p>
            Absolutely! My training program is tailored to address a wide range of behavior issues, 
            including barking, leash pulling and more. We'll work together to understand the root causes 
            and develop effective strategies for improvement.
        </p>
        
        <h2>
            Do you offer group classes or only individual sessions?
        </h2>
        <p>
            Currently, I offer individual sessions. This allows me to provide personalized attention 
            to your dog's unique needs and helps in minimizing distractions during training.
        </p>

        <h2>
            How do I schedule a training session?
        </h2>
        <p>
            Scheduling a training session is easy! Simply reach out to me by filling out 
            <a href='/contact'>THIS FORM</a>, and I will get back to you to discuss your 
            needs, preferences, and availability to find a suitable time for both you and your dog.
        </p>

        <h2>
            Can you help with puppy training?
        </h2>
        <p>
            Absolutely. Puppy training is a crucial foundation for your dog's behavior. 
            I offer puppy training sessions to teach basic commands, socialization, and house manners.
        </p>

        <h2>
            What happens if I need to reschedule a training session?
        </h2>
        <p>
            I understand that life can be unpredictable. If you need to reschedule a session, 
            please contact me as soon as possible, preferably with at least 24-hour's notice.
             I'll do my best to accommodate your new schedule.
        </p>

    </div>
  </>)
}

export default FAQ