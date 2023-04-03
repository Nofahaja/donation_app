import React,{useState} from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default function Donateclothes() {
  const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Viewclothes=()=>{
    // console.log(id);
    navigate('/Viewclothes')
  }
  const[state,setState]=useState({

  });
  const setRegister=(event)=>{
    const name=event.target.name;
     const value=event.target.value;
    setState({...state,[name]:value})
    console.log(state);

  }
  const Register=(e)=>{
    e.preventDefault();
    axios.post('http://http://localhost:5000/api/cloth/add-cloth',state).then(response=>{ 
      console.log(response)
    
        
      })
  }
      
  
  return (
    <div className='pro'>
      <img src='https://www.thespruce.com/thmb/zMYux9ypGplvXe_S0Gck1sbd7LI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/laundry-tips-before-you-donate-clothes-4046404-01-ca8bf91d0b9f418689cec82662381c09.jpg' className='book2'></img>
      
      <p className='donclo'> <b>Donate clothes supply program</b></p>
       <p className='educlo'><b>Charity sees the need, not the cause.</b><br/>We make a living by what we get,but we <br/> make a life by what we give. No one has<br/> ever become poor by giving.No one is use <br/>less in this world who lightens the burdn <br/> of anothers.</p>
    
      <button className='head4' onClick={handleOpen}> Donate now</button> 
      <button className='head5'onClick={Viewclothes}> View clothes</button> 
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <form>
            <div className='form_wrap'>
            <div className='form_item'>
             <label><b>Gender: </b></label>
             <select name='gender' onChange={setRegister}>
              <option>Male</option>
              <option>Female</option>
              {/* <option>Notebook</option> */}
              </select>
             </div>
             </div>
             <br/>
             <div class="form_wrap">
            <div class="form_item">
                <label><b>Type:</b></label>
                <input type="text" name='type'  onChange={setRegister}/>
          
            </div>
        </div>
        <div class="form_wrap">
            <div class="form_item">
                <label><b>Quantity:</b></label>
                <input type="text" name='quantity'onChange={setRegister}  />
          
            </div>
        </div>
                  <br/>
<div className='btn'>
             <button onClick={Register} className='sub'>Submit</button>
             </div>

          </form>
          </Typography>
        </Box>
      </Modal> 


     </div>
     
  )
}
