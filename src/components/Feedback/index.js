import React,{useState} from 'react'
import {Wrapper} from '../../pages/styles'
import Swal from 'sweetalert2';
import { Container } from './Feedback.styles';
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_8yb4fau";
const TEMPLATE_ID = "template_uha3mra";
const USER_ID = "user_CuuCousr83FhJjcKAnbG7";

function Feedback() {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID,e.target, USER_ID)
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
      };
    return (
        <Wrapper>
          <Container>
            <form action="Post" onSubmit={handleOnSubmit}>
                <label for="Name">Name</label>
                <input type="text" placeholder='Name' id='form-input-control-name' name='name'/>
                <label for="Email">Email</label>
                <input type="text" placeholder='Email' id='form-input-control-email' name='email'/>
                <label for="Contact">Name</label>
                <input type="text" placeholder='Contact' id='form-input-control-contact' name='contact'/>
                <button type='submit'> Submit</button>
            </form>
          </Container>
        </Wrapper>
    )
}

export default Feedback
