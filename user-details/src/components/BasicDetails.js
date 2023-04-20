import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useNavigate} from 'react-router-dom'

function Customer() {
  const navigate = useNavigate()
  function gotoShipping(){
    navigate("/shipping")
  }
  return (
    <Form>
      <h1>Basic Details</h1>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="firstname" placeholder="Enter Your First Name" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="lastname" placeholder="Enter Your Last Name" />
      </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control placeholder="abc@gmail.com" />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridMobileNumber">
      <Form.Label>Mobile Number</Form.Label>
      <Form.Control placeholder="Mobile Number" />
    </Form.Group>

    <Form.Group className="mb-3" id="formGridCheckbox">
      <Form.Check type="checkbox" label="Remember me" />
    </Form.Group>

    <Button variant="primary" type="next" onClick={gotoShipping}>
      Next
    </Button>
  </Form>
);
}

export default Customer