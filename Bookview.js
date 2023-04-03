import React,{useEffect,useState,useParams} from 'react'
import { useNavigate } from 'react-router-dom';
import  axios from 'axios';
import './Bookview.css'
import Donationnavbar from "./Donationnavbar";
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


export default function Bookview() {
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [state,setState]=useState([])
    const [editBook,setEditBook]=useState({})

console.log(editBook);
        useEffect(()=>{
      axios.get('http://localhost:5000/api/book/view-book').then (response=>{
        console.log("response===>",response)
        setState(response.data.data)
        
      })
        },[])

     const deletebook=(id)=>{
      console.log(id)
      axios.get(`http://localhost:5000/api/book/delete-book/${id}`).then(response=>{
        window.location.reload()
      })

     }
     const Editbook=(id)=>{
      console.log(id)
      axios.get(`http://localhost:5000/api/book/edit/${id}`).then(response=>{
        console.log(response.data.message);
        setEditBook(response.data.message)
        
      })

     }  
     const setEdit=(event)=>{
      const name=event.target.name;
       const value=event.target.value;
       setEditBook({...editBook,[name]:value})
      console.log(editBook);
  
    }
    const Updatebook=(id)=>{
      console.log(editBook)
      const bookinfo ={
        category:editBook.category,
        language:editBook.language,
        id:editBook._id
      }
      console.log(bookinfo)
      axios.post('http://localhost:5000/api/book/update-book',bookinfo).then(response=>{ 
        
      console.log(response);
          
        })
    } 
  return (
    
<>
<div>
  <Donationnavbar/>
  {state.map((product)=>(
    <div class="card" style={{width: "18rem"}}>
        

    <img src="https://tapintohope.org/wp-content/uploads/2019/09/iStock-846754592.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">category: {product.category}</h5>
      <p class="card-text">Language: {product.language}</p>
      <button  onClick={()=>{deletebook(product._id)}}class="bat">Delete</button>
      <button  onClick={()=>{Editbook(product._id);setOpen(true)}}class="but">Edit</button>
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
       
            <div className='form_wrap'>
            <div className='form_item'>
             <label className='lab'><b>Category: </b></label>
             <select name='category' onChange={setEdit}>
              <option>story</option>
              <option>salar</option>
              
              </select>
             </div>
             </div>
             <br/>
             <div class="form_wrap">
            <div class="form_item">
                <label className='lab'><b>Language:</b></label>
                <input type="text" name='language' value={editBook.language||""} onChange={setEdit} />
          
            </div>
        </div>
        
                  <br/>
<div className='btn7'>
             <button onClick={Updatebook} className='submitt'>Submit </button>
             </div>

          
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
