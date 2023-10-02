import "../styles/FDM.css";
import "../styles/Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { useRef } from "react";
import Logo from "../Assets/fdm-logo-white.png";

const Navbar = (props) => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("fdm__navbar-is-responsive");
  }

  return (
    <header class="fdm__navbar">
        <h3 className="fdm__navbar-logo"><Link className="link" to="/homepage"><img className="fdm__navbar-logo-image" src={Logo} alt="FDM"/></Link></h3>
        <nav ref={navRef}>
            {props.links.map(l => <Link className="fdm__navbar-link" to={l.to} onClick={l.handler}>{l.text}</Link>)}
            <button className="fdm__navbar-action fdm__navbar-action-close" onClick={showNavbar}>
                <FaIcons.FaTimes/>
            </button>
        </nav>
        <button className="fdm__navbar-action" onClick={showNavbar}>
            <FaIcons.FaBars/>
        </button>
    </header>
  )
}

export default Navbar
