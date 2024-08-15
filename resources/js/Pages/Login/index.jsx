import React from 'react'
import { Card } from '../../Components'
import './index.css'

export default function Login() {
  return (
    <div className='login'>
      <h1 className='header'>Select User to Login</h1>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', alignItems: "center", marginTop: '24px' }}>
        <Card style={{ width: '300px', height: '200px', textAlign: 'center', padding: '32px' }}>
          <a href="/managed">
          <h4 className='subheader'>Login as</h4>
          <h2 className='option'>Managed User</h2>
          </a>
        </Card>
        <Card style={{ width: '300px', height: '200px', textAlign: 'center', padding: '32px' }}>
          <a href="/personal">
          <h4 className='subheader'>Login as</h4>
          <h2 className='option'>Personal User</h2>
          </a>
          </Card>
      </div>
    </div>
  )
}
