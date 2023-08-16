import React, { useState } from "react";
import "../index";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";

const Title= ()=>{

  return(

    <a href="/">
         <img className="logo" src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" 
         alt="Food Villa" />
    </a>

  )
 
}

const Header = () => {
 
    return(
      <>
      <div className="header">
        
        <Title/>
        
        <div className="nav-items" >
        <ul>
          <li><Link to="/" style={{textDecoration:"none", color:"black"}}>Home</Link></li>
          <li><Link to="/about" style={{textDecoration:"none", color:"black"}}>About</Link> </li>
          <li><Link to="/contact" style={{textDecoration:"none", color:"black"}}>Contact</Link></li>
          <li><Link to="/cart" style={{textDecoration:"none", color:"black"}}>Cart</Link></li>
         </ul>
        </div>
  
      </div>
      </>
    )
  }

  export default Header;
  