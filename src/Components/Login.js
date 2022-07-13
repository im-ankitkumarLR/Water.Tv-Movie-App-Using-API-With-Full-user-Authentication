 import './CSS/LoginStyle.css'
import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';



const Login = (props) => {

    const [credentials, setCredentials] = useState({ email: "", password: "" });

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const navigate = useNavigate();  // For redrect
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        
        const json = await response.json()
        console.log(json);
        if (json.success) {   // agar user valid hai or wo phle signup kr chuka hai to use login krke home page pe le aao or local storage me uska token stre krlo
            // Save the auth token and redirect 


            localStorage.setItem('token', json.authtoken);   // login  ke baad hum token ko save kr rhe hai or usee  nicche waali line me 24 redirect kr rhe hai
            props.showAlert("Loggedin Successfully", "success")
            navigate("/");// For redrect


        }
        else {
            props.showAlert("Invalid Details", "danger")
        }
    }


  return (
    <>

    <div className='Problem-1'>
    <div className="main_div">
  <div className="box">
    <h1>Login Form</h1>
    <form onSubmit={handleSubmit}>
      <div className="input-box">
        <input type="email" name="email" id="email" autoComplete="off" required="" value={credentials.email} onChange={onChange}/>
        <label htmlFor="email">Email Address</label>
      </div>
      <div className="input-box">
        <input type="password" name="password" id="password" autoComplete="off" required="" value={credentials.password} onChange={onChange}/>
        <label htmlFor="Password">Password</label>
      </div>
      <input type="submit" defaultValue="Login" />
    </form>
  </div>
</div>

        
     </div>

        </>
  )
}

export default Login