import React from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import "./services.css";

function services() {
  return (
    <section id="services" className="h-auto w-full m-0 pt-10">
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
              <p>
                Building intuitive and responsive UI experiences that drive
                engagement and conversions
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>
                Transforming complex data into visually compelling and
                user-friendly interfaces.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>
                Crafting pixel-perfect interfaces that captivate users and
                elevate your brand.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>
                Optimizing user flows for increased efficiency and achieving key
                business objectives.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>
                Possessing a deep understanding of both UI and UX principles to
                ensure a cohesive and engaging experience.
              </p>
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
              <p>
                Building responsive and user-friendly interfaces using modern
                frameworks like React, Angular, or Vue.js.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>
                Optimizing website performance for speed and responsiveness
                across all devices
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>
                Integrating third-party APIs and services to expand website
                functionality.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>
                Implementing interactive elements and animations to enhance user
                engagement.
              </p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>
                Developing custom server-side applications using popular
                languages like Node.js, Python, or PHP.
              </p>
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
              <p>Regular website speed tests and performance analysis.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>Code optimization and minification.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>SEO optimization of content and meta descriptions.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>Adding, editing, and updating website content.</p>
            </li>
            <li>
              <IoCheckmarkDoneSharp style={{ fontSize: 40 }} />
              <p>Server optimization and configuration.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default services;
