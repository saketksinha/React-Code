import React,{useContext} from 'react'
import {Button, TextField} from '@mui/material'
import { multiStepContext } from '../StepContext'

function ShippingDetails() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
  return (
    <div>
        <h1>Shipping Details</h1>
        <div>
            <TextField label="Name" margin="normal" variant="outlined" color="secondary" 
            value={userData.firstName + " " + userData.lastName} 
            onChange={(event) => 
            setUserData({...userData, name: event.target.value })}/>
        </div>
        <div>
            <TextField label="Address" margin="normal" variant="outlined" color="secondary" 
            value={userData.address} 
            onChange={(event) => 
            setUserData({...userData, address: event.target.value })}/>
        </div>
        <div>
            <TextField label="City" margin="normal" variant="outlined" color="secondary" 
            value={userData.city} 
            onChange={(event) => 
            setUserData({...userData, city: event.target.value })}/>
        </div>
        <div>
            <TextField label="State" margin="normal" variant="outlined" color="secondary" 
            value={userData.state} 
            onChange={(event) => 
            setUserData({...userData, state: event.target.value })}/>
        </div>
        <div>
            <TextField label="Zip" margin="normal" variant="outlined" color="secondary" 
            value={userData.zip} 
            onChange={(event) => 
            setUserData({...userData, zip: event.target.value })}/>
        </div>
        <div>
            <TextField label="Country" margin="normal" variant="outlined" color="secondary" 
            value={userData.country} 
            onChange={(event) => 
            setUserData({...userData, country: event.target.value })}/>
        </div>
        <div>
            <Button variant='contained' onClick={() => setStep(1)} color='secondary'>Back</Button>
            <Button variant='contained' onClick={() => setStep(3)} color='primary'>Next</Button>
        </div>
    </div>
  )
}

export default ShippingDetails