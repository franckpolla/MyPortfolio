import React from "react";
import "./footer.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
function footer() {
  return (
    <footer className="w-full">
      <a href="" className="footer_logo">
        {" "}
        Franck Polla
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://wa.me/+905338365434 " target="_blank">
          <BsWhatsapp />
        </a>
        <a
          href="https://www.linkedin.com/in/franck-polla-ba9976288/"
          target="_blank"
        >
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/franckpolla" target="_blank">
          <FaGithub />
        </a>
      </div>
      <div className="footer_copyright">
        <small>
          {" "}
          © {new Date().getFullYear()} Franck Polla. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default footer;
