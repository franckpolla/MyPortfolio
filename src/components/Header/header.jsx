import React from "react";
import CTA from "./CTA";
import "./header.css";
import Me from "C:/Users/usr186/Desktop/franckportofolio/src/images/me.png";
import Headersocial from "./headersocial";

function header() {
  return (
    <header>
      <div className="container header_container ">
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
