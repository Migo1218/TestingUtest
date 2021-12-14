import React from "react";
import Footer from "../components/footer/Footer";
import Home from "../components/home/Home";
import NavBar from "../components/navbar/Navbar";

const Principal = ({isAuthenticated}) => {
  return (
    <div>
      <NavBar isAuthenticated={isAuthenticated}/>
      <Home />
      <Footer/>
    </div>
  );
};

export default Principal;
