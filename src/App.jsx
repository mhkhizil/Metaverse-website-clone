import React from "react";
import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import ContactUs from "./Components/ContactUs/ContactUs";
import Login from "./Components/Login/Login";
import LoginEmail from "./Components/Login/LoginEmail";
import Soultion from "./Components/Solution";
import Blog from "./Components/Blog";

const App = () => {
  const location = useLocation();
  const isLogin =
    location.pathname == "/login" || location.pathname == "/loginemail";
  return (
    <div>
      {!isLogin && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginemail" element={<LoginEmail />} />
        <Route path={`/blog/page/:id`} element={<Blog />} />
        <Route path="/solution" element={<Soultion />} />
      </Routes>
    </div>
  );
};

export default App;
