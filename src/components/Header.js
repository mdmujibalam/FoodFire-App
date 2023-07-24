import React from "react"
import "../index"

const Header = () => {
    return(
      <>
      <div className="header">
  
         <a href="/">
         <img className="logo" src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj" 
         alt="Food Villa" />
          </a>
  
  
        <div className="nav-items">
         <ul>
          <li>Home</li>
          <li>About </li>
          <li>Contact</li>
          <li>Cart</li>
         </ul>
        </div>
  
      </div>
      </>
    )
  }

  export default Header;
  