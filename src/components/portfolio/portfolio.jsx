import React from "react";
import IMG from "C:/Users/usr186/Desktop/franckportofolio/public/images/pexels-josh-sorenson-1714205.jpg";
import IMG2 from "C:/Users/usr186/Desktop/franckportofolio/public/images/pexels-lisa-fotios-16129877.jpg";
import IMG3 from "C:/Users/usr186/Desktop/franckportofolio/public/images/pexels-luis-gomes-546819.jpg";
import "./portfolio.css";

function portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG} alt="portfolio" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG2} alt="portfolio" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={IMG3} alt="portfolio" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default portfolio;
