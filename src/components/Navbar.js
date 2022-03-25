import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
      <div className="navbar">
        <NavLink to="/home">Home </NavLink> <br></br> 
        <NavLink to="/about">About  </NavLink><br></br>
        <NavLink to="/form"> Add an Endangered Species </NavLink><br></br>
        <NavLink to="/species">SpeciesList </NavLink><br></br><br></br>  
      </div>
    );
  };

  export default NavBar