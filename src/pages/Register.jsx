import React, { useState } from 'react'
import registerImage from '/images/register.png';
import { useAuth } from '../store/auth';
import { useNavigate } from "react-router-dom";

const Register = () => {
const navigate = useNavigate();
  const[user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    password:"",

  });
  const {storetokenInLS,API}=useAuth();
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setUser({
      ...user,
      [name]:value
    })
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try {
      const response=await fetch(`${API}/api/auth/register`,{
        method:"POST",
        credentials: 'include', // For cookies/auth headers

        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(user)
      })
      const responseData = await response.json();
      console.log(responseData);
      if (response.ok) {
       
        storetokenInLS(responseData.token);
        alert("registration successful");
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/")
        console.log(responseData);
      } else {
       alert(responseData.extraDetails?responseData.extraDetails:responseData.message)
      }
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div>
       <section>
        <main>
          <div className="section-registration">
           <div className='container grid grid-two-cols'>
            <div className='registration-image'>
                 <img src={registerImage} alt="a girl trying to fill register" width="500" height="500" />
            </div>
                {/* let tacle register for */}
                <div className='registration-form'>
                  <h1 className='main-heading mb-3'>registration form</h1>
                  <br/>
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label htmlFor="username">username</label>
                      <input type="text" name='username' placeholder='Enter the username' id='username' required autoComplete='off' value={user.username} onChange={handleInput}/>
                    </div>
                    <div>
                      <label htmlFor="email">email</label>
                      <input type="email" name='email' placeholder='Enter the email' id='email' required autoComplete='off' value={user.email} onChange={handleInput}/>
                    </div>
                    <div>
                      <label htmlFor="phone">phone</label>
                      <input type="number" name='phone' placeholder='Enter the phone' id='phone' required autoComplete='off' value={user.phone} onChange={handleInput}/>
                    </div>
                    <div>
                      <label htmlFor="password">password</label>
                      <input type="password" name='password' placeholder='Enter the password' id='password' required autoComplete='off' value={user.password} onChange={handleInput}/>
                    </div>
                    <br/>
                    <button type='submit' className='btn btn-submit'>Register Now</button>
                  </form>
                </div>
           </div>

          </div>
        </main>
       </section>
    </div>
  )
}

export default Register
