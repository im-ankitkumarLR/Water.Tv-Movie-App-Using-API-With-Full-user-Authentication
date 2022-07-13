import './App.css';

import React,{ useState } from "react";

// import Contact from './Components/Contact';
// import About from './Components/About';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Alert from './Components/Alert';


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  const [alert, setAlert] = useState(null)

  const showAlert=(message,type)=>{
     
    setAlert(
      {
        msg: message,
        type: type
      },
      setTimeout(() => {
        setAlert(null);
        
      }, 1500) 
  
    )


   }

  return (
    <>

 

       

       
          <Router>
          <NavBar />
          <Alert alert={alert}/>
         


            <Routes>
              <Route path='/' element={<Home showAlert={showAlert}/>} />

               <Route exact path='/login' element={<Login showAlert={showAlert}/>} />
              <Route exact path='/signup' element={<Signup showAlert={showAlert}/>} />

            </Routes>
           
      
        </Router>


      </>
      );
}




      export default App;
