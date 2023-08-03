import React, {useContext} from 'react';
import './App.css';
import Form from './components/Form';
import {Stepper, StepLabel, Step} from '@mui/material';
import { multiStepContext } from './StepContext';

function App() {

  const {currentStep, finalData} = useContext(multiStepContext);
  return (
    <div className="App">
      <div className="center-stepper">
    <Stepper style={{width: '18%'}} activeStep={currentStep - 1} orientation="horizontal">
      <Step>
        <StepLabel></StepLabel>
      </Step>
      <Step>
        <StepLabel></StepLabel>
      </Step>
      <Step>
        <StepLabel></StepLabel>
      </Step>
      <Step>
        <StepLabel></StepLabel>
      </Step>
    </Stepper>
    </div>
      <Form />      
    </div>
  );
}
export default App;
