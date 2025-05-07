import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';
import loginImage from '/images/login.png';
import { useAuth } from '../store/auth';
import {  toast } from 'react-toastify';

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storetokenInLS,API }=useAuth();

  // let handle the input field value
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add basic validation
    if (!user.email || !user.password) {
        alert("Please fill in all fields");
        return;
    }
    
    try {
        const response = await fetch(`${API}/api/auth/login`, {
            method: "POST",
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        });
        
        const responseData = await response.json();
        
        if (response.ok) {
            storetokenInLS(responseData.token)
            toast.success("Login successful");
            setUser({ email: "", password: "" });

            navigate("/")
            console.log(responseData);
        } else {
          toast.error(responseData.msg)
          console.log("Error details:", responseData);
        }
    } catch (error) {
        console.error("Network error:", error);
        toast.error ("Network error occurred");
    }
};

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src={loginImage}
                  alt="let's fill the login form"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
export default Login
