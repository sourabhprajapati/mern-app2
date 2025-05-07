import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [user, setUser] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));   
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const[issloading,setissloading]=useState(true)
    const [error, setError] = useState(null);
     const authorizationToken=`Bearer ${token}`;

     const API =import.meta.env.VITE_API
    const storetokenInLS = (serverToken) => {
        localStorage.setItem("token", serverToken);
        setToken(serverToken);
        setIsLoggedIn(true);
    };

    const LogoutUser = () => {
        localStorage.removeItem('token');
        setToken('');
        setIsLoggedIn(false);
    };

    const userAuthentication = async () => {
        try {
            setissloading(true)
            const response = await fetch(`${API}/api/auth/user`, {
                method: "GET",
                headers: {
                    Authorization: authorizationToken
                }
            });
            if (response.ok) {
                const data = await response.json();
                console.log('user data', data);
                setUser(data.userData);
                setissloading(false)
            }else{
                setissloading(false)
            }
        } catch (error) {
            console.log("Error fetching user data", error);
        }
    };

    const getServiceData = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const response = await fetch(`${API}/api/data/service`, {
                method: "GET",
            });
            if (response.ok) {
                const services = await response.json();
                console.log("Service data:", services); // Debug: Log API response
                setServices(services.msg || []);
            } else {
                throw new Error("Failed to fetch services");
            }
        } catch (error) {
            console.error("Error fetching services:", error);
            setError(error.message);
            setServices([]);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getServiceData();
        if (token) {
            userAuthentication();
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ storetokenInLS, LogoutUser, isLoggedIn, token, user, services, isLoading, error,authorizationToken,issloading ,API}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
};