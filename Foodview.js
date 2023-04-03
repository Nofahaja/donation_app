import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import  axios from 'axios';
import "./Foodview.css"
import Donationnavbar from './Donationnavbar';
import { Delete } from '@mui/icons-material';
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



export default function Foodview() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [state,setState]=useState([])
    const [editfood,setEditfood]=useState({})
    

        
        useEffect(()=>{
      axios.get('http://localhost:5000/api/item/view-food').then (response=>{
        console.log("response===>",response)
        setState(response.data.data)
        
      })
        },[])
        const deletefood=(id)=>{
        console.log(id)
        axios.get(`http://localhost:5000/api/item/delete-food/${id}`).then(response=>{
          window.location.reload()
        })
      }
      const Editfood=(id)=>{
        console.log(id)
        axios.get(`http://localhost:5000/api/item/edit/${id}`).then(response=>{
          console.log(response.data.message);
          setEditfood(response.data.message)
          
        })
  
       }  
       const setEdit=(event)=>{
        const name=event.target.name;
         const value=event.target.value;
         setEditfood({...editfood,[name]:value})
        console.log(name);
    
      }
      const Updatefood=(id)=>{
        console.log(id)
        const foodinfo ={
          food_name:editfood.food_name,
          category:editfood.category,
          quantity:editfood.quantity,
          date:editfood.date,
          id:editfood._id
        }
        axios.post('http://localhost:5000/api/item/update-food',foodinfo).then(response=>{ 
          
        
            
          })
      } 
  return (
    <>
    <div>
        <Donationnavbar/>
        {state.map((product)=>(
    <div class="card" style={{width: "18rem"}}>
    <img src="https://media.istockphoto.com/id/1318879357/photo/portrait-of-a-mixed-race-volunteer-woman-holding-a-cardboard-box-of-food-and-drink-at-the.jpg?s=612x612&w=0&k=20&c=mLP5VRGs7tw_3xXefHdFbWjP8RjZevaBKzfLkcsGd6o=" class="card-img-top" alt="..."/>
    <div class="card-body">
      
      <p class="card-text">Food name: {product.food_name}</p>
      <p class="card-text">category: {product.food_category}</p>
      <p class="card-text">quantity: {product.quantity}</p>
      <p class="card-text">expiry date: {product.exp_date}</p>
      <button onClick={()=>{deletefood(product._id)}} class="btn btn-primary">Delete</button>
      <button  onClick={()=>{Editfood(product._id);setOpen(true)}}class="but">Edit</button>

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
             <label className='lab'><b>Category: </b></label>
             <select name='category' onChange={setEdit}>
              <option>nonveg</option>
              <option>veg</option>
              
              </select>
             </div>
             </div>
             <br/>
             <div class="form_wrap">
            <div class="form_item">
                <label className='lab'><b>foodname:</b></label>
                <input type="text" name='food_name' value={editfood.food_name||""} onChange={setEdit} />
          
            </div>
        </div>
        <div class="form_wrap">
            <div class="form_item">
                <label className='lab'><b>quantity:</b></label>
                <input type="text" name='quantity' value={editfood.quantity||""} onChange={setEdit} />
          
            </div>
        </div>
        <div class="form_wrap">
            <div class="form_item">
                <label className='lab'><b>date:</b></label>
                <input type="text" name='date' value={editfood.date||""} onChange={setEdit} />
          
            </div>
        </div>
        
                  <br/>
<div className='btn7'>
             <button onClick={Updatefood} className='submitt'>Submit </button>
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
