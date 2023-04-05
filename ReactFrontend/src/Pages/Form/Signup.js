import React from 'react'

export default function Signup() {
  return (
    <div className='form-container'>
      <div className="form-main-container" id="sign-up-cont">
        <div className="form-wrapper-container">
            <form action="#" className='form-input-container'>
                <h1>Sign Up</h1>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
                <p>Already have an account? <a href="/signin">Sign in here</a></p>
            </form>
        </div>
      </div>
    </div>
  )
}