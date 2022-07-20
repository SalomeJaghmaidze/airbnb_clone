import React from "react";
import Logo from '../../images/logo.png'
import './Header.css';

function Header() {
  return (
    <div className="header">
        <div className="nav">
        <img src={Logo} alt="" />
        </div>
    </div>
  )
}

export default Header