import React from 'react'
import './footer.css'
import { assets } from '../../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt='' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quis eveniet, cumque amet fuga harum cupiditate necessitatibus, consectetur reprehenderit nisi nihil vitae voluptates veniam natus deleniti a rerum dolore ducimus?</p>

          <div className='footer-social-icon'>
            <img src={assets.facebook_icon} alt='' />
            <img src={assets.linkedin_icon} alt='' />
            <img src={assets.twitter_icon} alt='' />

          </div>

        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
           <li>Home</li>
           <li>About us</li>
           <li>Delivery</li>
           <li>Privacy policy</li>
          </ul>

        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+9746218795</li>
            <li>milanwagle12@gmail.com</li>
          </ul>

        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright 2026 @tomato.com .ALL Right Reserved.
      </p>
    </div>
  )
}

export default Footer;
