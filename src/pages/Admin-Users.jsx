import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import {Link} from "react-router-dom"
const AdminUsers = () => {
  const [users, setUser] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllUserData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(`users ${data}`);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };
const deleteUser=async(id)=>{
  try {
    const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: authorizationToken,
      },
    });
    const data = await response.json();
    console.log(`users after delete ${data}`);
    if(response.ok){
      getAllUserData();
    }
  } catch (error) {
    console.log(error)
  }
  
}
  useEffect(() => {
    getAllUserData();
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1 style={{ color: "white" }}>Admin Users data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser, index) => {
                return (
                  <tr key={index}>
                    <td>{curUser.username}</td>
                    <td>{curUser.email}</td>
                    <td>{curUser.phone}</td>
                    <td><Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link></td>
                    <td><button onClick={()=>deleteUser(curUser._id)}>Delete</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  ); 
};

export default AdminUsers;
