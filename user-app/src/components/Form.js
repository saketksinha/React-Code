import React, {useState, useContext} from 'react'
import BasicDetails from './BasicDetails'
import ShippingDetails from './ShippingDetails';
import Review from './Review';
import BillingDetails from './BillingDetails';
import { multiStepContext } from '../StepContext';

function Form() {

    const{setStep, userData, setUserData} = useContext(multiStepContext)

    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        mobileNumber:"",
        emailId:"",
        name:"",
        address:"",
        city:"",
        state:"",
        zip:"",
        country:"",
        
    })

    const FormTitles = ["Basic Details", "Shipping Details","BillingDetails","Review"]

    const PageDisplay = () => {
        if (page === 0) {
            return <BasicDetails formData={formData} setFormData={setFormData}/>
        } else if (page === 1){
            return <ShippingDetails formData={formData} setFormData={setFormData}/>
        } else if (page === 2){
            return <BillingDetails formData={formData} setFormData={setFormData}/>
        } else{
            return <Review formData={formData} setFormData={setFormData}/>
        }
    };
  return (
    <div className="form">
        <div className="form-container"></div>
        <div className="header"></div>
            <h1>{FormTitles[page]}</h1>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
        <button 
        disabled={page === 0}
        onClick={() => {setPage((currPage) => currPage - 1)}}>
            Prev
            </button>
        <button 
        onClick={() => {
            if(page === FormTitles.length - 1){
                alert("Form Submitted")
            }else{
                setPage((currPage) => currPage + 1)
                setStep((2))}}
            }
            >
            {page === FormTitles.length -1 ? "Submit" : "Next"}
            </button>
        </div>
    </div>
  )
}

export default Form