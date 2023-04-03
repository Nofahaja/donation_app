import React,{useState} from 'react'
import axios from "axios"
import "./Register.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    const [state,setInputs]=useState(
        {
          
          
        }
      );
      const setRegister=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs({...state,[name]:value})
        console.log(state);
    
      }
      
    const Register=(e)=>{
      e.preventDefault();
     
      console.log(state)
      axios.post(`http://localhost:5000/api/register`,state).then(response=>{ 
             console.log("response====>",response.data.message)
             
             
             toast.success(response.data.message, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              
              });
    })
    }
    
  return (
    <div class="wrapper">

		
    <div class="form_container">
      <form name="form">
    <div class="heading">
    <h5>Registration Form</h5>
  </div>
        <div class="form_wrap">
            <div class="form_item">
                <label>Username</label>
                <input type="text" name='username' onChange={setRegister}/>
                <div class="error" id="name"></div>  
            </div>
            
            <div class="form_item">
                <label>Password</label>
                <input type="text"  name='password' onChange={setRegister} />
                <div class="error" id="email"></div>  
            </div>
        </div>
        <div class="form_wrap">
            <div class="form_item">
                <label>Name</label>
                <input type="text" name='name' onChange={setRegister}/>
                <div class="error" id="mobile-number"></div>  
            </div>
        </div>
        <div class="form_wrap">
            <div class="form_item">
                <label>Address</label>
                <input type="text" name='address' onChange={setRegister}/>
                <div class="error" id="place"></div>  
            </div>
        </div>
        <div class="form_wrap">
            <div class="form_item">
                <label>Phone</label>
                <input type="text" name='phone' onChange={setRegister}/>
                <div class="error" id="post"></div>  
            </div>
        </div>
        
       
       
        

        <div class="btn1">
          <input type="submit"  value="Submit" onClick={ Register}/>
        </div>
      </form>
    </div>
    <ToastContainer/>

  </div>


  )
}

  

