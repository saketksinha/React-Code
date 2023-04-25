import React from 'react'

function BasicDetails({formData, setFormData}) {
  return (
    <div className="basic-details-container">
      <input type='text' placeholder='First Name' 
      value={formData.firstName} 
      onChange={(event) => 
      setFormData({...formData, firstName: event.target.value })}/>
      <input type='text' placeholder='Last Name'
      value={formData.lastName} 
      onChange={(event) => 
      setFormData({...formData, lastName: event.target.value })}/>
      <input type='text' placeholder='Mobile Number'
      value={formData.mobileNumber} 
      onChange={(event) => 
      setFormData({...formData, mobileNumber: event.target.value })}/>
      <input type='text' placeholder='Email Id' 
      value={formData.emailId} 
      onChange={(event) => 
      setFormData({...formData, emailId: event.target.value })}/>
    </div>
  )
}

export default BasicDetails