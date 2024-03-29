import React from "react";
import "./About.css";
import Me from "/src/images/IMG_20220516_152419.jpg";
import { FaAward } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi2";
import { FaProjectDiagram } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="h-auto pt-14 w-full ">
      <div className="p-10">
        <h5 className=" text-center text-blue-300">Get to know</h5>
        <h2 className=" text-center text-bold mb-10 text-blue-500">
          {" "}
          About Me
        </h2>

        <div className="about_container ">
          <div className="about_me">
            <div className="about__me-image">
              <img src={Me} alt="Me" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5> Experience</h5>
                <small> 1 year working </small>
              </article>

              <article className="about__card">
                <HiUsers className="about__icon" />
                <h5> Clients</h5>
                <small> 2 Clients </small>
              </article>

              <article className="about__card">
                <FaProjectDiagram className="about__icon" />
                <h5> Projects</h5>
                <small> 10+ Completed</small>
              </article>
            </div>
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
              deserunt, exercitationem consequatur laboriosam cum illo esse?
              Voluptatibus quam harum id corrupti. Repudiandae voluptatem optio
              architecto! Ipsam laboriosam repellendus ratione soluta.
            </p>
            <a href="#contact" className="btn btn-primary">
              {" "}
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
