import React from 'react'
import './index.css'

export default function Welcome({style = {}, userPersonalData, typeOfUser,  ...props}) {
  return (
    <div className='welcome' style={{...style}}>
      <h1 className='header'>Hi, {userPersonalData.name} 👋</h1>
      <p className='quote'>{typeOfUser==="managed" ? 'Manage your documents issued by SMU or track your career goal.' : 'Manage your documents'} </p>
    </div>
  )
}
