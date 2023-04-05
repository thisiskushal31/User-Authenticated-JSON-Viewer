import React from 'react'

export default function Login() {
  return (
    <div className='form-container'>
      <div className="form-main-container" id="sign-in-cont">
        <div className="form-wrapper-container">
            <form action="#" className='form-input-container'>
                <h1>Sign in</h1>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign In</button>
                <p>Don't have an account? <a href="signup">Sign up here</a></p>
            </form>
        </div>
      </div>
    </div>
  )
}
