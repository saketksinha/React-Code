import React from 'react'

function ShippingDetails({formData, setFormData}) {
  return (
    <div className='shipping-details-container'>
      <input type='text' 
      placeholder='Name'
      value={formData.firstName + " " + formData.lastName} 
      onChange={(event) => 
      setFormData({...formData, name: event.target.value })}/>
      <input type='text' placeholder='Address'
      value={formData.address} 
      onChange={(event) => 
      setFormData({...formData, address: event.target.value })}/>
      <input type='text' placeholder='City'
      value={formData.city} 
      onChange={(event) => 
      setFormData({...formData, city: event.target.value })}/>
      <input type='text' placeholder='State'
      value={formData.state} 
      onChange={(event) => 
      setFormData({...formData, state: event.target.value })}/>
      <input type='text' placeholder='Zip/PinCode'
      value={formData.zip} 
      onChange={(event) => 
      setFormData({...formData, zip: event.target.value })}/>
      <input type='text' placeholder='Country'
      value={formData.country} 
      onChange={(event) => 
      setFormData({...formData, country: event.target.value })}/>
    </div>
  )
}

export default ShippingDetails