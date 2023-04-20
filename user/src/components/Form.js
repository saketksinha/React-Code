import React, { useEffect, useState } from 'react'

function Form() {
    const data ={Fname:"",Lname:"",email:""};
    const[inputData, setInputData]=useState(data)
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        console.log("Registered")
    },[flag])
    function handleData(e){
        setInputData({...inputData, [e.target.name]:e.target.value})
        console.log(inputData)
    }
    function handleSubmit(e){
        e.preventDefault();
        if(!inputData.Fname || !inputData.Lname || !inputData.email){
            alert("All fields are mandatory")
        }else{
            setFlag(true)
        }
    }
  return (
    <>
    <pre>{(flag)?<h2 className='ui-define'> Hello {inputData.Fname}, Success</h2>:""}</pre>
    <div>
        <form className='container' onSubmit={handleSubmit}>
            <div className='header'>
                <h1>Registration Form</h1>
            </div>
            <div>
                <input type='text' placeholder='Enter your First name'
                name="Fname" value={inputData.Fname} onChange={handleData}></input>
                {/* <input type='text' placeholder='Enter your Last name'
                name="Lname" value={inputData.Lname} onChange={handleData}></input> */}
            </div>
            <div>
                <input type='text' placeholder='Enter your Last name'
                name="Lname" value={inputData.Lname} onChange={handleData}></input>
            </div>
            <div>
                <input type='text' placeholder='Enter your Email'
                name="email" value={inputData.email} onChange={handleData}></input>
            </div>
            <div>
                {/* <button type='submit'>Submit</button> */}
                <button as="input" type="submit" value="Submit">Submit</button>{' '}
                <button>Next</button>
            </div>
        </form>
    </div>
    </>
  )
}

export default Form