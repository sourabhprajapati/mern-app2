import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact " element={<Contact />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
