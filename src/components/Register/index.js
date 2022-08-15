import { Button, Form, Modal } from "react-bootstrap";
import React from "react";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";

const SERVICE_ID=process.env.REACT_APP_SERVICE_ID
const TEMPLATE_ID=process.env.REACT_APP_TEMPLATE_ID
const USER_ID=process.env.REACT_APP_USER_ID

const Register = ({ show, handleClose }) => {
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
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Join Us</Modal.Title>
      </Modal.Header>
      <Form style={{ padding: "20px" }} onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" name="name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicContact">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Contact"
            name="contact"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCurrentYear">
          <Form.Label>Current Year</Form.Label>
          <Form.Control as="select" name="currentyear">
            <option value="First Year">First Year</option>
            <option value="Second Year">Second Year</option>
            <option value="Third Year">Third Year</option>
            <option value="Last Year">Final Year</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDepartment">
          <Form.Label>Department</Form.Label>
          <Form.Control as="select" name="department">
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Electronics and Telecommunication Engineering">
              Electronics and Telecommunication Engineering
            </option>
            <option value="Instrumentation Engineering">
              Instrumentation Engineering
            </option>
            <option value="Information Technology">
              Information Technology
            </option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

export default Register;
