import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext=createContext();

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [user, setUser] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);   
    const storetokenInLS=(serverToken)=>{
        localStorage.setItem("token",serverToken);
        setToken(serverToken);
        setIsLoggedIn(true);

    }
    
   
    console.log("isLoggedin ", isLoggedIn);
    const LogoutUser=()=>{
        
         localStorage.removeItem('token');
         setToken('');
         setIsLoggedIn(false);
    }
    const userAuthentication=async()=>{
        try {
            const response= await fetch("http://localhost:5000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            if(response.ok){
                const data=await response.json();
                console.log('user data',data);
                setUser(data.userData)
            }
        } catch (error) {
            console.log("Error fetching user data",error)
        }
    }

    useEffect(()=>{
        userAuthentication();
    })
    return <AuthContext.Provider value={{storetokenInLS,LogoutUser,isLoggedIn,token,user}}>
        {children}
    </AuthContext.Provider>
}

export const useAuth = () => {
    const authContextValue=useContext(AuthContext);
    if(!authContextValue){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return authContextValue;
}