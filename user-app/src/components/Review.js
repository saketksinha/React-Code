import React from 'react'

function Review({formData, setFormData}) {
  return (
    <div className='other-info-container'>
      {/* <input type='text' placeholder='Nationality'
      value={formData.nationality} 
      onChange={(event) => 
      setFormData({...formData, nationality: event.target.value })}/> */}
      <input type='text' placeholder='other...'
      value={formData.other} 
      onChange={(event) => 
      setFormData({...formData, other: event.target.value })}/>
    </div>
  )
}

export default Review