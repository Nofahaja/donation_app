import React, { useState } from 'react'
import "./Homepage.css"
import axios from 'axios';

import Donationnavbar from './Donationnavbar';
import Donateclothes from './Donateclothes';

import Donationfoods from './Donationfoods'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


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
export default function Homepage() {

  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Viewbooks = () => {
    // console.log(id);
    navigate('/Viewbooks')
  }
  const [state, setState] = useState({

  });
  const setRegister = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value })
    console.log(state);

  }
  const Register = (e) => {
    e.preventDefault();
    const tokenValue = JSON.parse(localStorage.getItem("logdata"))
    const token = tokenValue.token



    axios.post('http://localhost:5000/api/book/add-book', state,
      {
        headers: {
          "Authorization": token
        }
      }
    ).then(response => {
      console.log(response)

      // if (success==true{
      //   navigate('/Viewbooks')
      // })



    })
  }


  return (

    <div className='maindon'>
      <Donationnavbar />

      <div class="donate">
        <img src="https://images.unsplash.com/photo-1494832944834-a08818c634b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cG92ZXJ0eXxlbnwwfHwwfHw%3D&w=1000&q=80" class="img-fluid" alt="..." />

        <h1 className='head1'> <b>The best way to find yourself  <br />is to lose yourself in the <br />  services of others!!</b></h1>
        <button className='head2'> ❤️ Make A Donation </button>
      </div>
      <div className='pro'>
        <img src='https://www.bhf.org.uk/-/media/news-images/2020/june/news-page-june-2020/stock-gen-2-640-x410.png?rev=99ee78c1b58d43f889c6213fbed17181' className='book'></img>
        <div className='lit'>
          <h3 className='book1'><b>Upcoming programs</b></h3>
          <p className='don1'> <b>Donate Books supply program</b></p>
          <p className='edu'><b>Literacy is a bridge from misery to hope.</b><br />Cultivation to the mind is as necessary as food <br />to the body.The best way to fight poverty is to <br />empower people through access to education.So<br />if the boy cannot come to education,education<br /> must go to him.So give a helping hand to those <br />who need it!! </p>
          <div className='pad'>
            <button className='head3' onClick={handleOpen}> Donate now</button>
            <button className='head7' onClick={Viewbooks}> View Books</button>
          </div>
        </div>


      </div>
      <br /><br />
      {/* <div className='pro'>
      <img src='https://www.thespruce.com/thmb/zMYux9ypGplvXe_S0Gck1sbd7LI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/laundry-tips-before-you-donate-clothes-4046404-01-ca8bf91d0b9f418689cec82662381c09.jpg' className='book2'></img>
      
      <p className='donclo'> <b>Donate clothes supply program</b></p>
       <p className='educlo'><b>Charity sees the need, not the cause</b><br/>We make a living by what we get,but we <br/> make a life by what we give. No one has<br/> ever become poor by giving.No one is use <br/>less in this world who lightens the burdn <br/> of anothers.</p>
    
      <button className='head4' onClick={handleOpen}> Donate now</button> 
      <button className='head5'onClick={Viewclothes}> View clothes</button> 

     </div> */}
      <Donateclothes />
      <br /><br />
      {/* <div className='pro'>
      <img src='https://thumbs.dreamstime.com/b/donation-box-food-products-table-indoors-114513416.jpg' className='book'></img>
      <h3 className='book1'><b></b></h3>
      <p className='don1'> <b>Donate Foods supply program</b></p>
      <p className='edu'><b>Be the change you want to see in the world.</b> <br/>If you cant feed a hundred people,then feed <br/>just one. Don't waste food because so many <br/> needy hands are waiting for it sleeping with <br/>empty stomach. The day hunger disappears<br/>the world will see the greatest spiritual <br/>explosion humanity that has ever seen!! </p>
      <div className='pad'>
      <button className='head3' onClick={handleOpen}> Donate now</button> 
      <button className='head7' onClick={Viewfoods}> View foods</button> 
      
      </div>


     </div> */}
      <Donationfoods />
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
                    <option value="novel">Novel</option>
                    <option value="textbook">Textbook</option>
                    <option value="notebook">Notebook</option>
                  </select>
                </div>
              </div>
              <br />
              <div class="form_wrap">
                <div class="form_item">
                  <label><b>Language:</b></label>
                  <input type="text" name='language' onChange={setRegister} placeholder='Malayalam' />

                </div>
              </div>
              <br />
              <div className='btn'>
                <button className='sub' onClick={Register}>Submit</button>
              </div>

            </form>
          </Typography>
        </Box>
      </Modal>
      <div>
        
      </div>
      
     
 
    </div>
    


  )
}    