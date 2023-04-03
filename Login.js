import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import "./Login.css"


export default function Login() {
    const navigate = useNavigate();
    const [state,setInputs]=useState(
        {
         
        }
      );
      const setRegister=(event)=>{
        const username=event.target.name;
        const password=event.target.value;
        setInputs({...state,[username]:password})
        console.log(state);
    
      }
     
    const Register=(e)=>{
      e.preventDefault();
      axios.post('http://localhost:5000/api/login/logindata',state).then(response=>{ 
        console.log(response)
        const data = {
          token:response.data.token,
          loginId:response.data.loginId
          
        }
        localStorage.setItem("logdata",JSON.stringify(data))
        


        console.log("response====>",response)
        navigate('/')
      
      console.log(state)
    })
    .catch((err)=>{
        console.log(err)
        if(err)
        {toast.success(err.response.data, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
             progress: undefined,
            theme: "colored",
            
            });}
        
    

    }
    )
    
    }
  return (
    <div className='log'>
    <title>Login Form</title>    
    <link rel="stylesheet" type="text/css" href="css/style.css" />    
    <h2>Login Page</h2><br />    
    <div className="loginreg">    
      <form id="login" method="get" action="login.php">    
        <label><b>User Name     
          </b>    
        </label>    
        <input type="text" name="username" id="Uname1" placeholder="Username" onChange={setRegister} />    
        <br /><br />    
        <label><b>Password     
          </b>    
        </label>    
        <input type="Password" name="password" id="Pass1" placeholder="Password" onChange={setRegister} />    
        <br /><br />    
        <input type="button" name="log" id="log1"  defaultValue="Log In Here" onClick={Register} />       
        <br /><br />    
        
      </form>     
    </div>  
    <ToastContainer/>  
  </div>
  )
}
