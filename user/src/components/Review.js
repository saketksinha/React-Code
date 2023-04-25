import React, {useContext} from 'react'
import {Button, TextField} from '@mui/material'
import { multiStepContext } from '../StepContext'

function Review() {
    const {setStep, userData, setUserData, submitData} = useContext(multiStepContext);
  return (
    <div>
        <div>
            <h1>Review</h1>
        </div>
        <div>
            <Button variant='contained' onClick={() => setStep(3)} color='secondary'>Back</Button>
            <Button variant='contained'onClick={submitData} color='primary'>Submit</Button>
        </div>
    </div>
  )
}

export default Review