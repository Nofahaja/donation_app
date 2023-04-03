import React, { useEffect, useState } from 'react'
import "./Viewbooks.css"
import Donationnavbar from './Donationnavbar';
import  axios from 'axios';
import Bookview from './Bookview';



export default function Viewbooks() {
  const [state,setState]=useState([]

  )
  useEffect(()=>{
axios.get('http://localhost:5000/api/book/view-book').then (response=>{
  console.log("response===>",response)
  setState(response.data)
})
  },[])


  return (
    <div className='back'>
      <Donationnavbar/>
      
    <section>
        <div className="container1">
          <div className="carousel3">
            <input type="radio" name="slides" defaultChecked="checked" id="slide-1" />
            <input type="radio" name="slides" id="slide-2" />
            <input type="radio" name="slides" id="slide-3" />
            <input type="radio" name="slides" id="slide-4" />
            <input type="radio" name="slides" id="slide-5" />
            <input type="radio" name="slides" id="slide-6" />
            <ul className="carousel__slides">
              <li className="carousel__slide">
                <figure>
                  <div>
                    <img src="https://drsw10gc90t0z.cloudfront.net/AcuCustom/Sitename/DAM/440/Children_reading_stock.jpg" alt="" />
                  </div>
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <span className="credit">Photo: Tim Marshall</span>
                  </figcaption>
                </figure>
              </li>
              <li className="carousel__slide">
                <figure>
                  <div>
                    <img src="https://www.readingrockets.org/sites/default/files/field/image/gr-rightbook2.jpg" alt="" />
                  </div>
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <span className="credit">Photo: Christian Joudrey</span>                            
                  </figcaption>
                </figure>
              </li>
              <li className="carousel__slide">
                <figure>
                  <div>
                    <img src="https://www.goodnet.org/photos/620x0/33183_hd.jpg" alt="" />
                  </div>
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <span className="credit">Photo: Steve Carter</span>                            
                  </figcaption>
                </figure>
              </li>
              <li className="carousel__slide">
                <figure>
                  <div>
                    <img src="https://www.dplfriends.org/wp-content/uploads/2021/11/book-donations-e1635786129978.jpeg" alt="" />
                  </div>
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <span className="credit">Photo: Aleksandra Boguslawska</span>                            
                  </figcaption>
                </figure>
              </li>
              <li className="carousel__slide">
                <figure>
                  <div>
                    <img src="https://www.booksforafrica.org/dynamic-media/assets/images/photos/about-bfa/about-us-section-one-photo-agnes-igoye-uganda.jpg?v=stripe&k=oja4x8pBQMP4UGDjJn%2FOqQ" alt="" />
                  </div>
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <span className="credit">Photo: Rosan Harmens</span>                            
                  </figcaption>
                </figure>
              </li>
              <li className="carousel__slide">
                <figure>
                  <div>
                    <img src="https://static1.squarespace.com/static/5a9c2034f407b4d81c54adda/5b6556ba8a922d4284ef1834/5b6556c12b6a286b62063968/1533368005662/donate_3.jpg?format=1000w" alt="" />
                  </div>
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <span className="credit">Photo: Annie Spratt</span>                            
                  </figcaption>
                </figure>
              </li>
            </ul>    
            <ul className="carousel__thumbnails">
              <li>
                <label htmlFor="slide-1"><img src="https://drsw10gc90t0z.cloudfront.net/AcuCustom/Sitename/DAM/440/Children_reading_stock.jpg" alt="" /></label>
              </li>
              <li>
                <label htmlFor="slide-2"><img src="https://www.readingrockets.org/sites/default/files/field/image/gr-rightbook2.jpg" alt="" /></label>
              </li>
              <li>
                <label htmlFor="slide-3"><img src="https://www.goodnet.org/photos/620x0/33183_hd.jpg" alt="" /></label>
              </li>
              <li>
                <label htmlFor="slide-4"><img src="https://www.dplfriends.org/wp-content/uploads/2021/11/book-donations-e1635786129978.jpeg" alt="" /></label>
              </li>
              <li>
                <label htmlFor="slide-5"><img src="https://www.booksforafrica.org/dynamic-media/assets/images/photos/about-bfa/about-us-section-one-photo-agnes-igoye-uganda.jpg?v=stripe&k=oja4x8pBQMP4UGDjJn%2FOqQ" alt="" /></label>
              </li>
              <li>
                <label htmlFor="slide-6"><img src="https://static1.squarespace.com/static/5a9c2034f407b4d81c54adda/5b6556ba8a922d4284ef1834/5b6556c12b6a286b62063968/1533368005662/donate_3.jpg?format=1000w" alt="" /></label>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      </div>
      
      
  )
}
