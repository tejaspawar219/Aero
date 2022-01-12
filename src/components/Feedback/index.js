import React,{useState} from 'react'
import {Wrapper} from '../../pages/styles'
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_4ifzcb6";
const TEMPLATE_ID = "template_uha3mra";
const USER_ID = "user_CuuCousr83FhJjcKAnbG7";

function Feedback() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [contact, setContact] = useState('')
    const [notification, setNotification] = useState(false)
    const [feedback, setFeedback] = useState('')
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log({name,email,contact})
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
      };
    return (
        <Wrapper>
            <form action="Post" onSubmit={handleOnSubmit}>
                <label for="Name">Name</label>
                <input type="text" placeholder='Name' onChange={(eve)=>setName(eve.currentTarget.value)} value={name}/>
                <label for="Email">Email</label>
                <input type="text" placeholder='Email' onChange={(eve)=>setEmail(eve.currentTarget.value)} value={email}/>
                <label for="Contact">Name</label>
                <input type="text" placeholder='Contact' onChange={(eve)=>setContact(eve.currentTarget.value)} value={contact}/>
                <button type='submit'> Submit</button>
            </form>
        </Wrapper>
    )
}

export default Feedback
