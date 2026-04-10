import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {link} from 'react-router-dom'

const Navbar = () => {
  const [Menu,setMenu] =useState("Menu"); 
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />
     <ul className="navbar-menu" >
      <link to='/' onClick={()=>setMenu("Home")} className={Menu==="Home"?"active":""}>Home</link>
      <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={Menu==="Menu"?"active":""}>Menu</a>
      <a href='#app-download' onClick={()=>setMenu("Mobile-app")} className={Menu==="Mobile-app"?"active":""}>Mobile-app</a>
      <a href='#footer' onClick={()=>setMenu("Contact us")} className={Menu==="Contact us"?"active":""}>Contact us</a>
     </ul>
      <div className="navbar-right">
           <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className='dot'></div>
        </div>
          <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
