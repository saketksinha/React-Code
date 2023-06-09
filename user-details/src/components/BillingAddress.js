import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useNavigate} from "react-router-dom"

function BillingAddress() {

  // const [check, setcheck, state, ] = useState(false);
    // const navigate = useNavigate()
    // function gotoShipping(){
    //   navigate("/shipping")
    // }
    // function gotoReview(){
    //     navigate("/review")
    // }
    


  return (
    <Form>
        <h1>Billing Details</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="email" placeholder="Enter your full name" 
          // value={check ? state.ShippingName: ""}
          />
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
        <Form.Control placeholder="Address" 
        // value={check ? state.ShippingAddress: ""}
        />
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
          <Form.Control 
          // value={check ? state.ShippingCity: ""}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control 
          // value={check ? state.ShippingZip: ""}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Fill it from my Shipping Address" 
        // onChange={() => setcheck(!check) }
        />
      </Form.Group>

      {/* <Button variant="secondary" onClick={gotoShipping}>Back</Button>{' '} 
      <Button variant="primary" onClick={gotoReview}>Next</Button>{' '} */}
      
    </Form>
  );
}

export default BillingAddress