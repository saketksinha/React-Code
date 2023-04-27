import React, {useState} from 'react'
import App from './App';


export const multiStepContext = React.createContext();

const StepContext = () => {
    const [currentStep, setStep] = useState(1);
    const [finalData, setFinalData] = useState([]);
    const [userData, setUserData] = useState({
      firstName:"",
      lastName:"",
      email:"",
      mobile:"",
      name:"",
      address:"",
      city:"",
      state:"",
      zip:"",
      country:"",
    })
    

    function submitData(){
      setFinalData(finalData=>[...finalData, userData]);
      setUserData('');
      setStep(1);
      alert('Form Submitted')
    }

  return (
    <div>
        <multiStepContext.Provider value={{currentStep,setStep,userData,setUserData,finalData,setFinalData, submitData}}>
        <App />
        </multiStepContext.Provider>
    </div>
  )
}

export default StepContext;