import React from "react";
import "./experience.css";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { TbBrandTailwind } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";

const exprerience = () => {
  return (
    <section id="experience">
      <h5>My Stack Skills</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experince__frontend">
          <h3> Frontend Developement</h3>
          <div className="exeperience__content">
            <article className="experience__details">
              <TiHtml5 style={{ fontSize: 40 }} />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>
            <article className="experience__details">
              <FaCss3Alt style={{ fontSize: 40 }} />
              <div>
                {" "}
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>{" "}
            </article>
            <article className="experience__details">
              <IoLogoJavascript style={{ fontSize: 40 }} />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <FaBootstrap style={{ fontSize: 40 }} />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandTailwind style={{ fontSize: 40 }} />
              <div>
                <h4>TAILWIND</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact style={{ fontSize: 40 }} />
              <div>
                {" "}
                <h4>REACT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        {/* =====backend ===== */}
        <div className="experince__backend">
          <h3> Backend Developement</h3>
          <div className="exeperience__content">
            <article className="experience__details">
              <FaNode style={{ fontSize: 40 }} />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>{" "}
            </article>
            <article className="experience__details">
              <SiMongodb style={{ fontSize: 40 }} />
              <div>
                {" "}
                <h4>MongoDB</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <SiMysql style={{ fontSize: 40 }} />
              <div>
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </div>{" "}
            </article>
            <article className="experience__details">
              <TbBrandPython style={{ fontSize: 40 }} />
              <div>
                {" "}
                <h4>Python</h4>
                <small className="text-light">Bacis</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default exprerience;