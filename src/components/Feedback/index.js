import React from "react";
import { Wrapper } from "../../pages/styles";
import Swal from "sweetalert2";
import { Container, Heading, FormContent } from "./Feedback.styles";
import emailjs from "emailjs-com";
import { Button, Form } from "react-bootstrap";

const SERVICE_ID="service_9hcoo5d"
const TEMPLATE_ID="template_xfxqvzf"
const USER_ID="_18x-b3Mjjzcoe4mV"
function Feedback() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };
  return (
    <Wrapper>
      <Container>
        <Heading>Feedback</Heading>
        <FormContent>
          <Form style={{ padding: "20px" }} onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label style={{ color: "White" }}>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{ color: "White" }}>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicContact">
              <Form.Label style={{ color: "White" }}>Contact</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Contact"
                name="contact"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicNotifications">
              <Form.Check
                type="checkbox"
                label="Get Notification from Us"
                style={{ color: "white" }}
                name="notification"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicFeeback">
              <Form.Label style={{ color: "White" }}>Feedback</Form.Label>
              <Form.Control
                as="textarea"
                name="feedback"
                placeholder="Feedback"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: "10px" }}
            >
              Submit
            </Button>
          </Form>
        </FormContent>
      </Container>
    </Wrapper>
  );
}

export default Feedback;
