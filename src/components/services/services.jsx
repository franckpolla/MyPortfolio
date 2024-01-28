import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import "./services.css";

function services() {
  return (
    <section id="services">
      <h5>What I Offer </h5>
      <h2> Services</h2>
      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* ======end of UI/UX design */}
        <article className="service">
          <div className="service_head">
            <h3> Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
        {/* ======= end of web development ====== */}
        <article className="service">
          <div className="service_head">
            <h3>Web Maintenance</h3>
          </div>
          <ul className="service_list">
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default services;
