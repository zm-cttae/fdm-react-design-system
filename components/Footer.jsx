import "../styles/FDM.css";
import "../styles/Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () =>{
  return (
  <footer className="fdm__footer-footer">
    <a className="fdm__button fdm__button-contact-us" href="https://www.fdmgroup.com/contact">Contact</a>
    <ul class="fdm__footer-socials">
      <li><a href="https://www.facebook.com/FDMGroup/"><FaFacebookF/></a></li>
      <li><a href="https://twitter.com/FDMGroup"><FaTwitter/></a></li>
      <li><a href="https://www.linkedin.com/company/fdm-group/"><FaLinkedin/></a></li>
      <li><a href="https://www.youtube.com/FDMGroupVideos"><FaYoutube/></a></li>
      <li><a href="https://www.instagram.com/fdm_group/"><FaInstagram/></a></li>
    </ul>
    <small class="fdm__footer-copyright">&copy; FDM Group 2023</small>
  </footer>
  )
}
export default Footer
