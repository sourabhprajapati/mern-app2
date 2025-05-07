import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { useAuth } from "../../store/auth";

const AdminLayout=()=>{
  const { user ,issloading} = useAuth();
  if (issloading) {

    return <h1>
       Loading.....

       
    </h1>
  }
    if(!user.isAdmin){
        return <Navigate to="/"/>
    }
    return(
        <>
           <header>
            <div className="container">
                <nav>
                    <ul>
                        <li style={{color:"white"}}>
                        <NavLink to="/admin/users"><FaUser />
                        Users</NavLink></li>
                        <li style={{color:"white"}}>
                        <NavLink to="/admin/contacts">
                        <IoMdContact />Contacts</NavLink></li>
                        <li style={{color:"white"}}>
                        <MdMiscellaneousServices />Services</li>
                        <li style={{color:"white"}}>
                        <FaHome />Home</li>
                    </ul>
                </nav>
            </div>
            <Outlet/>
           </header> 
        </>
    )
}
export default AdminLayout;