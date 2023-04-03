import React from 'react'
import Donationnavbar from './Donationnavbar'
import "./About.css"

export default function About() {
  return (
    <div>
    <Donationnavbar/>
<div className='nit'>
    <div id="container">	
    {/* Start	Product details */}
    <div className="product-details">
      {/* 	Product Name */}
      <h1>About Us</h1>
     
      <span className="hint-star star">
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star" aria-hidden="true" />
        <i className="fa fa-star-half-o" aria-hidden="true" />
        <i className="fa fa-star-o" aria-hidden="true" />
      </span>
      {/* The most important information about the product */}
      <p className="information"><b>We are tender heart charity foundation</b> <br/> it's easier to take than to give.It's nobler to give than to take.The thrill of taking lasts a day.The thrill giving lasts a lifetime. Sed do eiusmod tempor incididunt dolore magna aliqua.</p>
      {/* 		Control */}
      <div className="control">
        {/* Start Button buying */}
        <button className="btn">
          {/* 		the Price */}
          {/* <span className="price">49 $</span> */}
          {/* 		shopping cart icon*/}
          <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></span>
          {/* 		Buy Now / ADD to Cart*/}
          {/* <span className="buy">Buy Now</span> */}
        </button>
        {/* End Button buying */}
      </div>
    </div>
    {/* 	End	Product details   */}
    {/* 	Start product image & Information */}
    <div className="product-image">
      <img src="https://www.verywellfamily.com/thmb/UbunHMxsiCkTP0fascQ__UALBAg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1306629971-ac046b93a1f74306b65b079aed470cf6.jpg" alt="Omar Dsoky" />
      {/* 	product Information*/}
      {/* <div className="info">
        <h2>The Description</h2>
        <ul>
          <li><strong>Sun Needs: </strong>Full Sun</li>
          <li><strong>Soil Needs: </strong>Damp</li>
          <li><strong>Zones: </strong>9 - 11</li>
          <li><strong>Height: </strong>2 - 3 feet</li>
          <li><strong>Blooms in: </strong>Mid‑Summer - Mid‑Fall</li>
          <li><strong>Features: </strong>Tolerates heat</li>
        </ul>
      </div> */}
    </div>
    {/*  End product image  */}
  </div>
  </div>
  </div>
  )
}
