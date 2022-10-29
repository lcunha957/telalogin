import React from 'react'

const LoginForm = () => {
  return (
    <div className='login'>
    <strong>Sign In</strong>
    <form >
      <label>Email<span>*</span></label>
      <div className="input-group">
      <i className='far fa-paper-plane'></i>
      <input type="email" required/>
      </div>
      
      <label>Password<span>*</span></label>
      <div className="input-group">
      <i className='fas fa-lock'></i>
      <input type="password" required/>
      </div>
      <div className='btns'>
      <button type='submit'>Login</button>
      </div>
      <a href="#!" className='forget'>Forget Your Password</a>
    </form>
    <div className='intro-text'>
    <span>Bem vindo ao L&L motors</span>
    <p>Faça seu registro para ter acesso a nossso admin e comece já o cadastro dos seus veiculos</p>
    </div>
    </div>
  )
}

export default LoginForm