import React, { useState } from 'react'
import './loginPopup.css'
import { assets } from '../../../assets/assets'

const loginPopup = ({setShowLogin}) => {
const [currState, setCurrState] = useState("Sign up")

  return (
    <div className='loginPopup'>
    <form  className="login-popup-container">
      <div className="login-popup-title">
        <h2>{currState}</h2>
        <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt='' />
      </div>
      <div className="login-popup-inputs">
        <input type="text" placeholder='Your name' required />
        <input type='email' placeholder='your email' required />
        <input type="text" placeholder='password' required />
      </div>
      <button>{currState=== "sign up" ? "Create account": "Login"}</button>
    </form>
    </div>
  )
}

export default loginPopup
