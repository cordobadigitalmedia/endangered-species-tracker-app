import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <div className="navbar">
        <NavLink to="/">Home </NavLink> <br></br> 
        <NavLink to="/about">About this project  </NavLink><br></br>
        <NavLink to="/species">Species List </NavLink><br></br><br></br>  
        <NavLink to="/form"> Add an Endangered Species </NavLink><br></br>
        <NavLink to="/organizations">Organizations </NavLink><br></br><br></br>  
        <NavLink to="/orgform"> Add an Organization </NavLink><br></br>
      </div>
    );
  };

  export default NavBar
