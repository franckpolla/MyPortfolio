import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineContactPhone } from "react-icons/md";
import "./nav.css";
import { useState } from "react";

function nav() {
  const [active, setactive] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setactive("#")}
        className={active === "#" ? "active" : ""}
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        onClick={() => setactive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <FaRegUserCircle />
      </a>
      <a
        href="#experience"
        onClick={() => setactive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <RiComputerLine />
      </a>
      <a
        href="#services"
        onClick={() => setactive("#services")}
        className={active === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setactive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <MdOutlineContactPhone />
      </a>
    </nav>
  );
}

export default nav;
