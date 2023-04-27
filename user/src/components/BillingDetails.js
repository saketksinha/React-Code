import React,{useContext} from 'react'
import {Button, TextField, FormGroup} from '@mui/material'
import { multiStepContext } from '../StepContext'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';

function BillingDetails() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    const [setChecked] = React.useState(true);


    const handleChange = (event) => {
        setChecked(event.target.value);
      };
  return (
    <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '20ch' },
        }}
    >
        <div><h1>Billing Details</h1></div>
        <div>
            <TextField label="Name"
            value={userData.firstName + " " + userData.lastName} 
            onChange={(event) => 
            setUserData({...userData, name: event.target.value })}/>
        
            <TextField label="Address"
            value={userData.address} 
            onChange={(event) => 
            setUserData({...userData, address: event.target.value })}/>
        </div>
        <div>
            <TextField label="City" 
            value={userData.city} 
            onChange={(event) => 
            setUserData({...userData, city: event.target.value })}/>
        
            <TextField label="State"
            value={userData.state} 
            onChange={(event) => 
            setUserData({...userData, state: event.target.value })}/>
        </div>
        <div>
            <TextField label="Zip"
            value={userData.zip} 
            onChange={(event) => 
            setUserData({...userData, zip: event.target.value })}/>
        
            <TextField label="Country"  
            value={userData.country} 
            onChange={(event) => 
            setUserData({...userData, country: event.target.value })}/>
        </div>
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} 
      label="My Shipping Address is same as my billing address" 
      onChange={handleChange}/>
        </FormGroup>
            
        <div>
            <Button variant='contained' onClick={() => setStep(2)} color='secondary'>Back</Button>
            <Button variant='contained' onClick={() => setStep(4)} color='primary'>Next</Button>
        </div>
        </Box>
  )
}

export default BillingDetails