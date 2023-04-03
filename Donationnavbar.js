import React from 'react'
import "./Donationnavbar.css"
import {VolunteerActivism} from '@mui/icons-material';
export default function Donationnavbar() {
  return (
    <div>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Document</title>
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">Charitee <VolunteerActivism className='don'/></div>
      {/* NAVIGATION MENU */}
      <ul className="nav-links">
        {/* USING CHECKBOX HACK */}
        {/* <input type="checkbox" id="checkbox_toggle" />
        <label htmlFor="checkbox_toggle" className="hamburger">☰</label> */}
        {/* NAVIGATION MENUS */}
        <div className="menu">
          <li><a href="/">Home</a></li>
          {/* <li><a href="/">Services</a></li> */}
          {/* <li><a href="/Loginpage">Programs</a></li> */}
          {/* <li><a href="/Blog">Blog</a></li> */}
     

          <li><a href="/Login">Login</a></li>
          <li><a href="/Register">Register</a></li>
          
          {/* <a class="btn btn-secondary dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Products
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div> */}
      
      
          <li><a href="/About">About Us</a></li>


       
        </div>
      </ul>
    </nav>
  </div>
);
}
  

