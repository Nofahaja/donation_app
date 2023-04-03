import React ,{useEffect,useState}from 'react'
import { useNavigate } from 'react-router-dom';
import  axios from 'axios';
import Donationnavbar from './Donationnavbar';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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




export default function Clothview() {
  
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [state,setState]=useState([])
    const [editcloth,setEditcloth]=useState({})

    
        useEffect(()=>{
      axios.get('http://localhost:5000/api/cloth/view-cloth').then (response=>{
        console.log("response===>",response)
        setState(response.data.data)
        
      })
        },[])
        const deletecloth=(id)=>{
          console.log(id)
          axios.get(`http://localhost:5000/api/cloth/delete-cloth/${id}`).then(response=>{
              window.location.reload()
          })
        }

        const Editcloth=(id)=>{
          console.log(id)
          axios.get(`http://localhost:5000/api/cloth/edit/${id}`).then(response=>{
            console.log(response.data.message);
            setEditcloth(response.data.message)
            
          })
    
         }  
         const setEdit=(event)=>{
          const name=event.target.name;
           const value=event.target.value;
           setEditcloth({...editcloth,[name]:value})
          console.log(name);
      
        }
        const Updatecloth=(id)=>{
          console.log(id)
          const clothinfo ={
            quantity:editcloth.quantity,
            gender:editcloth.gender,
            type:editcloth.type,
            id:editcloth._id
          }
          console.log(clothinfo)
          axios.post('http://localhost:5000/api/cloth/update-cloth',clothinfo).then(response=>{ 
            
          
              
            })
        } 
  return (
    <>
    <div>
      <Donationnavbar/>
      {state.map((product)=>(
    <div class="card" style={{width: "18rem"}}>
    <img src="https://www.cleanipedia.com/images/2lmwybzp5rca/7Jl3QOeebtSEfnLTFyXid5/df55392e1de62ea66ce2b6503a62a3c3/aGVyb18zLmpwZw/990w-660h/a-stack-of-folded-clothing.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      
      <p class="card-text">Gender:{product.gender}</p>

      <p class="card-text">Quantity:{product.quantity}</p>
      <p class="card-text">Type:{product.type}</p>

      <button onClick={()=>{deletecloth(product._id)}} class="btn btn-primary">Delete</button>
      <button  onClick={()=>{Editcloth(product._id);setOpen(true)}}class="but">Edit</button>

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
             <label className='lab'><b>Gender: </b></label>
             <select name='gender' onChange={setEdit}>
              <option>male</option>
              <option>female</option>
              
              </select>
             </div>
             </div>
             <br/>
             <div class="form_wrap">
            <div class="form_item">
                <label className='lab'><b>quantity:</b></label>
                <input type="text" name='quantity' value={editcloth.quantity||""} onChange={setEdit} />
          
            </div>
        </div>
        <div class="form_wrap">
            <div class="form_item">
                <label className='lab'><b>Type:</b></label>
                <input type="text" name='type' value={editcloth.type||""} onChange={setEdit} />
          
            </div>
        </div>
        
        
                  <br/>
<div className='btn7'>
             <button onClick={Updatecloth} className='submitt'>Submit </button>
             </div>

          </form>
          </Typography>
        </Box>
      </Modal> 
    </div>
  </div>
  ))}
  </div>
  </>
  )
}
