import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import '../css/ContactForm.css'
import Swal from 'sweetalert2'
import Header from './Header'
import { useLocation } from 'react-router-dom'

export const ContactForm = () => {

  const location = useLocation()
  const {pathname} = location
  let title = pathname.substr(1, pathname.length)
  console.log(title)

  const SERVICE_ID = "service_geyr7xg";
  const TEMPLATE_ID = "template_1mzgvd4";
  const USER_ID = "Fu7cNyKZuJb1UyamB";

  const form = useRef()

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // const form = useRef()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  }

  return (<>
    <Header title={title}/>

    <div className='pricing'>
        <p>
            $35 per 1 hour session
            <br />
            For dog households in Cheshire, Lanesborough, Pittsfield, Lenox, Lee, Great Barrington and North Adams
        </p>
    </div>

    <div className='contactForm'>
      <Form
       onSubmit={handleOnSubmit}
       ref={form}
      >
        
        <Form.Field
          id='form-input-control-name'
          control={Input}
          label='Name'
          name='from_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='reply_to'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-phone'
          control={Input}
          label='Phone Number'
          name='phone'
          placeholder='Phone Number…'
          required
          icon='phone'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-town'
          control={Input}
          label='Town of Residence'
          name='town'
          placeholder='Town of Residence...'
          required
          icon='map marker alternate'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-dog-breed'
          control={Input}
          label='Dog Name, Breed, Age, Gender'
          name='dog_description'
          placeholder='Dog Name, Breed, Age, Gender...'
          required
          icon='paw'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-message'
          control={TextArea}
          label='Briefly describe why you need dog training'
          name='message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='black'>Submit</Button>
      </Form>
    </div>
  </>)
}

// export default ContactForm