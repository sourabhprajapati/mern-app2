import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";
import Footer from "./components/footer/Footer";
import Logout from "./pages/Logout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />  {/* Fixed: removed space */}
          <Route path="/service" element={<Service />} />  {/* Fixed: lowercase to match NavLink */}
          <Route path="/register" element={<Register />} />  {/* Fixed: lowercase to match NavLink */}
          <Route path="/login" element={<Login />} /> 
          <Route path="/logout" element={<Logout/>} /> 
          <Route path="*" element={<Error />} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;