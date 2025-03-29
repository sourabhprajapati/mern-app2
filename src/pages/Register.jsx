import React, { useState } from 'react'

const Register = () => {

  const[user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    password:"",

  });
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setUser({
      ...user,
      [name]:value
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(user)
  }

  return (
    <div>
       <section>
        <main>
          <div className="section-registration">
           <div className='container grid grid-two-cols'>
            <div className='registration-image'>
                 <img src="/images/register.png" alt="a girl trying to fill register" width="500" height="500" />
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
