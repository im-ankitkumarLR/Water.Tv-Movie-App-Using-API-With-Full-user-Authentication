

import React from 'react';
import './NavBar.css';
import { Link,useLocation} from "react-router-dom"; 
import { useNavigate } from 'react-router-dom';

 

 


const NavBar = () => {
  const navigate = useNavigate();

  let location = useLocation();
  const handleLogout =()=>{
  
    localStorage.removeItem('token');
    navigate('/login')


  }
  

  return (

<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{color:'white'}}>Water.Tv</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{color:'white'}}>Home</Link>
        </li>
         
        
      </ul>
      {!localStorage.getItem('token')?
      <form className="d-flex">
      <Link className="btn btn-warning mx-2"  to="/login" role="button">Login</Link>
      <Link className="btn btn-warning mx-2"  to="/signup" role="button" >Signup</Link>
      </form>:<button className='btn btn-primary' onClick={handleLogout}>Logout</button>}

     </div>
  </div>
</nav>
    
  )
 }

export default NavBar;


 





