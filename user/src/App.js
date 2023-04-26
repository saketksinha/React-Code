import React, {useContext} from 'react';
import './App.css';
import BasicDetails from './components/BasicDetails';
import BillingDetails from './components/BillingDetails';
import ShippingDetails from './components/ShippingDetails';
import {Stepper, StepLabel, Step} from '@mui/material';
import { multiStepContext } from './StepContext';
import Review from './components/Review';
import DisplayData from './components/DisplayData';

function App() {

  const {currentStep, finalData} = useContext(multiStepContext);

  function showStep(step){
    switch(step){
      case 1:
        return <BasicDetails />

        case 2:
          return <ShippingDetails />

          case 3:
            return <BillingDetails />
            case 4:
              return <Review />
    }
  }
  return (
    <div className="App">
      <header className="App-header">
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
    {showStep(currentStep)}
    <br/>
    {finalData.length > 0 ? <DisplayData /> : ''}
      </header>
    </div>
  );
}

export default App;
