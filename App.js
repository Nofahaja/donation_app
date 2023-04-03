import logo from './logo.svg';
import './App.css';
import Donationnavbar from './Donationnavbar';
import Homepage from './Homepage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Viewbooks from './Viewbooks';
import Viewclothes from './Viewclothes';
import Viewfoods from './Viewfoods';
import Login from './Login';
import Register from './Register';
import Bookview from './Bookview';
import Clothview from './Clothview';
import Foodview from './Foodview';

import Blog from './Blog';
import About from './About';







function App() {
  return (
    
     <BrowserRouter>
     <Routes>

     <Route path="/" element={<Homepage/>}></Route>
     <Route exact path="/Bookview" element={<Bookview/>}></Route>   
     <Route exact path="/Clothview" element={<Clothview/>}></Route>   
     <Route exact path="/Foodview" element={<Foodview/>}></Route>   

     <Route exact path="/Viewbooks" element={<Viewbooks/>}></Route>
     <Route path="/Viewclothes" element={<Viewclothes/>}></Route>
     <Route path="/Viewfoods" element={<Viewfoods/>}></Route>
     <Route path="/Login" element={<Login/>}></Route>
     <Route path="/Register" element={<Register/>}></Route>
     <Route path="/Blog" element={<Blog/>}></Route>
     <Route path="/About" element={<About/>}></Route>








      </Routes>
    </BrowserRouter>

    
    
  );
}

export default App;
