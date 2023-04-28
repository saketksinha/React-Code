import React,{useContext} from 'react'
import {Button, TextField} from '@mui/material'
import { multiStepContext } from '../StepContext'
import Box from '@mui/material/Box';

function BasicDetails() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
  return (
    <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '20ch' },
        }}
    >
        <div><h1>Basic Details</h1></div>
        <div className="basic-details-container">
            <TextField label="First name" 
            value={userData.firstName} 
            onChange={(event) => 
            setUserData({...userData, firstName: event.target.value })} 
             />
        
            <TextField label="Last name" 
            value={userData.lastName} 
            onChange={(event) => 
            setUserData({...userData, lastName: event.target.value })} />
        </div>
        <div>
            <TextField label="Email"  
            value={userData.email} 
            onChange={(event) => 
            setUserData({...userData, email: event.target.value })} />
        
            <TextField label="Mobile"
            value={userData.mobile} 
            onChange={(event) => 
            setUserData({...userData, mobile: event.target.value })} />
        </div>
        <div>
            <Button variant='contained' onClick={() => setStep(2)} color='primary'>Next</Button>
        </div>
    </Box>
  )
}

export default BasicDetails