import { NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaHome } from "react-icons/fa";

const AdminLayout=()=>{
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