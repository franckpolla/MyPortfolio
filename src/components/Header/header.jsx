import React from "react";
import CTA from "./CTA";
import "./header.css";
import Me from "/src/images/me.png";
import Headersocial from "./headersocial";

function header() {
  return (
    <header className="w-full h-auto pb-5">
      <div className="header_container m-20">
        <h5> hello I'm </h5>
        <h1> Franck polla</h1>
        <h5 className="text-light"> Fullstack Engineer </h5>
        <CTA />
        <Headersocial />
        <div className="mecenter">
          <div className="me">
            <img src={Me} alt="me" />
          </div>
        </div>

        <a href="#contact" className="Scroll_down">
          scroll Down
        </a>
      </div>
    </header>
  );
}

export default header;
