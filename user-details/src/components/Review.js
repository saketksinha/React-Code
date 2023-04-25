import React from 'react'
import Card from 'react-bootstrap/Card';
import { Route, Routes } from 'react-router';
import BasicDetails from './BasicDetails'
import ShippingAddress from './ShippingAddress';
import BillingAddress from './BillingAddress';
import {useNavigate} from "react-router-dom"
import { Button } from 'react-bootstrap';

function Review() {

  // const navigate = useNavigate()
  //   function gotoBilling(){
  //     navigate("/billing")
  //   }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Basic Details</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{BasicDetails}</Card.Subtitle>
        <Card.Text>
          
        </Card.Text>

        

      </Card.Body>

      {/* <Button variant="secondary" onClick={gotoBilling}>Back</Button>{' '} 
        <Button variant="primary">Submit</Button>{' '} */}
    </Card>
    




    
  );
}

export default Review