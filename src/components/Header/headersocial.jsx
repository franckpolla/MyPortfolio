import React from "react";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const headersocial = () => {
  return (
    <div className="header_socials">
      <a
        href="https://www.linkedin.com/in/franck-polla-ba9976288/"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/franckpolla" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://discord.com/channels/605859344243884081/804048256170065960"
        target="_blank"
      >
        <FaDiscord />
      </a>
    </div>
  );
};

export default headersocial;
