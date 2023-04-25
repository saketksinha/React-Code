import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



function ShippingAddress() {
  
    
  return (
    <Form>
        <h1>Shipping Details</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name = 'name' placeholder="Enter your full name" 
          //  onChange={handleChange}
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
        <Form.Control placeholder="address" name = 'ShippingAddress' 
        // onChange={handleChange}
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
          <Form.Control name='city' 
          // onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control name = 'zip' 
          // onChange={handleChange}
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="My Billing Address is same" 
        // onChange={handleCopyAddress}
        />
      </Form.Group>

      {/* <Button variant="secondary" onClick={gotoBasicDetails}>Back</Button>{' '} 
      <Button variant="primary" onClick={gotoBilling}>Next</Button>{' '} */}
      
    </Form>
  );
}

export default ShippingAddress