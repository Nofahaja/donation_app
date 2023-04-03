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

export default function Donationfoods() {
  const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const Viewfoods=()=>{
        // console.log(id);
        navigate('/Viewfoods')}

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
          axios.post('http://localhost:5000/api/item/add-food',state).then(response=>{ 
            console.log(response)
          
              
            })
        }
           return (
    <div className='pro'>
      <img src='https://thumbs.dreamstime.com/b/donation-box-food-products-table-indoors-114513416.jpg' className='book'></img>
      <h3 className='book1'><b></b></h3>
      <p className='don1'> <b>Donate Foods supply program</b></p>
      <p className='edu'><b>Be the change you want to see in the world.</b> <br/>If you cant feed a hundred people,then feed <br/>just one. Don't waste food because so many <br/> needy hands are waiting for it sleeping with <br/>empty stomach. The day hunger disappears<br/>the world will see the greatest spiritual <br/>explosion humanity that has ever seen!! </p>
      <div className='pad'>
      <button className='head3' onClick={handleOpen}> Donate now</button> 
      <button className='head7' onClick={Viewfoods}> View foods</button> 
      
      </div>
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
             <label><b>Category: </b></label>
             <select name='category' onChange={setRegister}>
              <option>Non veg</option>
              <option>Veg</option>
              
              </select>
             </div>
             </div>
             <br/>
             <div class="form_wrap">
            <div class="form_item">
                <label><b>Food_name:</b></label>
                <input type="text" name='food_name' onChange={setRegister} />
          
            </div>
        </div>
        <div class="form_wrap">
            <div class="form_item">
                <label><b>quantity:</b></label>
                <input type="text" name='quantity' onChange={setRegister} />
          
            </div>
        </div>
        <div class="form_wrap">
            <div class="form_item">
                <label><b>date:</b></label>
                <input type="text" name='date' onChange={setRegister} />
          
            </div>
        </div>
                  <br/>
<div className='btn'>
             <button onClick={Register} className='sub'>Submit </button>
             </div>

          </form>
          </Typography>
        </Box>
      </Modal> 

     </div>
  )  
}
 

