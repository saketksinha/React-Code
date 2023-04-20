import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router';


function ShippingAddress() {
    const navigate = useNavigate()
    function gotoBasicDetails(){
      navigate("/basicdetails")
    }
    function gotoBilling(){
        navigate("/billing")
    }
  return (
    <Form>
        <h1>Shipping Details</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="fullname" placeholder="Enter your full name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCountry">
          <Form.Label>Country</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCompleteAddress">
        <Form.Label>Complete Address</Form.Label>
        <Form.Control placeholder="Address" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
    </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="My Billing Address is same" />
      </Form.Group>

      <Button variant="secondary" onClick={gotoBasicDetails}>Back</Button>{' '} 
      <Button variant="primary" onClick={gotoBilling}>Next</Button>{' '}
      
    </Form>
  );
}

export default ShippingAddress