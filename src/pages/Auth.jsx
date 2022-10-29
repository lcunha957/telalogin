import React from 'react'
import '../styles/Auth.css'
import LoginForm from '../components/LoginForm'
import Register from '../components/Register'

function Auth() {
  return (
    <div id='Auth' className='show'>
        <a href='#!' className='close'>
        <i className='fas fa-times'></i>
        </a>
        
        <div className="content">
            <LoginForm/>
            <Register/>
        </div>
    </div>
  )
}

export default Auth