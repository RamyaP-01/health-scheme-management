import React from 'react'
import './regis.css'

const regis = () => {
  return (
    <div className='wrapper'>
        <form action=''>
            <h1>Registration</h1>
            <div className='input_box'></div>
                <input type='text' placeholder='Name' required/>
            <div className='input_box'></div>
                <input type='text' placeholder='Age' required/>
            
        </form>
    </div>
  )
}

export default regis