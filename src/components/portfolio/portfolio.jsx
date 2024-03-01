import React from "react";
import IMG from "/src/images/pexels-josh-sorenson-1714205.jpg";
import IMG2 from "/src/images/pexels-lisa-fotios-16129877.jpg";
import IMG3 from "/src/images/pexels-luis-gomes-546819.jpg";
import Francis from "/src/images/francis.jpg";
import Thumbnail from "/src/images/thumbnail.jpeg";
import "./portfolio.css";

function portfolio() {
  return (
    <section id="portfolio" className="mt-18 w-full h-auto ">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className=" container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG} alt="portfolio" />
          </div>
          <h3>Website for information about scholarships</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/franckpolla/YOUUBT-WEBSITE"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://franckwebdevbourse.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="portfolio" />
          </div>
          <h3>Quote Generator</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/franckpolla/MyPortfolio.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://franckpolla.github.io/Mixed-Message/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="portfolio" />
          </div>
          <h3>TODO App</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/franckpolla/Todoapp"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://franckpolla.github.io/Todoapp/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Francis} alt="portfolio" />
          </div>
          <h3>Tribute to Francis Ngannou</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://github.com/franckpolla/TributePage"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://dancing-puffpuff-fbf2ea.netlify.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={Thumbnail} alt="portfolio" />
          </div>
          <h3>E-commerce webapp</h3>
          <div className="portfolio_item-cta">
            <a
              href="https://super-queijadas-2d8f31.netlify.app/#"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default portfolio;
