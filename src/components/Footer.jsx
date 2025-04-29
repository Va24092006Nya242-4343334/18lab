import React from "react";
import "./Footer.css";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="mailto:kn23-i.korzhenetskyi@nubip.edu.ua" className="footer-link">
          <FaEnvelope className="icon" /> kn23-i.korzhenetskyi@nubip.edu.ua
        </a>
        <a
          href="https://github.com/Va24092006Nya242-4343334"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaGithub className="icon" /> GitHub: Va24092006Nya242-4343334
        </a>
      </div>
    </footer>
  );
};

export default Footer;
