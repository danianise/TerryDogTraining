import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import '../css/ContactForm.css'
import Swal from 'sweetalert2'

export const ContactForm = () => {

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

  return (
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
  )
}

// export default ContactForm