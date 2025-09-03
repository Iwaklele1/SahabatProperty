import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import Logo from "../assets/Logo-icon.svg"; // logo rumah tanganmu

import "../styles/Footer.css";
import { IoIosLink } from "react-icons/io";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="footer-brand">
            <div className="footer-text">
              <h1>Sahabat</h1>
              <h1>Property</h1>
            </div>
            <img src={Logo} alt="logo" className="footer-logo" />
          </div>
          <p>
            Di Sahabat Property, kami percaya bahwa rumah bukan hanya bangunan,
            tetapi tempat di mana cerita terbaik hidup Anda dimulai.
            <br />
            Dengan komitmen pada kejujuran, transparansi, dan pelayanan sepenuh
            hati, kami hadir untuk menjadi mitra terpercaya dalam setiap langkah
            perjalanan properti Anda.
          </p>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3 className="contact-label">Contact</h3>
          <div className="contact-item">
            <FaEnvelope size={20} className="contact-icon" />
            <span>Email : bapakeben@gmail.com</span>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=duckydzaki@gmail.com&su=P=Pinjam" target="_blank"  className="contact-link-icon" style={{marginTop: "2px"}}><FiSend size={20}/></a>
          </div>
          <div className="contact-item">
            <FaWhatsapp size={20} className="contact-icon" />
            <span>Phone : +62 812-7667-6350</span>
            <a href="http://wa.me/6281276676350"  className="contact-link-icon"><IoIosLink size={20}/></a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
