import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

const AdminContacts = () => {
  const { authorizationToken,API } = useAuth();
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getContactData = async () => {
    try {
      setLoading(true);
      console.log("Authorization Token:", authorizationToken);
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      console.log("Response Status:", response.status);
      const text = await response.text();
      console.log("Raw Response:", text);

      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = JSON.parse(text);
          console.log("Parsed Data:", data);
          setContacts(data);
        } else {
          throw new Error("Response is not JSON");
        }
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      setError(error.message);
      console.error("Error fetching contact data:", error);
    } finally {
      setLoading(false);
    }
  };
  const deleteContact = async (id) => {
    try {
      await fetch(`${API}/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: authorizationToken },
      });
      setContacts(contacts.filter((contact) => contact._id !== id));
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  useEffect(() => {
    getContactData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}. Please check if the API endpoint is correct and the server is running.</p>;

  return (
    <>
    return (
  <>
    <section className="admin-contacts">
      <h1>Admin Contact Data</h1>
      <div className="container admin-users">
        {contacts.length > 0 ? (
          contacts.map((curr, index) => {
            const { username, email, message } = curr;
            return (
              <div key={index}>
                <p>{username}</p>
                <p>{email}</p>
                <p>{message}</p>
                <button className="btn1" onClick={() => deleteContact(curr._id)}>Delete</button>              </div>
            );
          })
        ) : (
          <p>No contacts found.</p>
        )}
      </div>
    </section>
  </>
);
    </>
  );
};

export default AdminContacts;