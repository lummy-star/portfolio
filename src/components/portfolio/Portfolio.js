import React from 'react'
import AIRBNB from '../../assets/airbnb.png'
import ALAN from '../../assets/ALan-Api.png'
import Avatar from '../../assets/avatar.png'
import TWITTER from '../../assets/Twitter-Clone.png'
import ECOMMERCE from '../../assets/my-Ecommerce.png'
import './portfolio.css'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Some Of My Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ALAN} alt="post" />
          </div>
          <h3>This is portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://lummynewsapp.netlify.app"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              Netlify
            </a>
            <a
              href="https://dribble.com/Allien_pixel"
              className="btn btn-primary"
              target="_blank"
              rel="noopener"
            >
              live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={AIRBNB} alt="post" />
          </div>
          <h3>This is portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://air-bnbclonee.netlify.app"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              Netlify
            </a>
            <a
              href="https://dribble.com/Allien_pixel"
              className="btn btn-primary"
              target="_blank"
              rel="noopener"
            >
              live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ECOMMERCE} alt="post" />
          </div>
          <h3>This is portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://lummy-store.netlify.app"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              Netlify
            </a>
            <a
              href="https://dribble.com/Allien_pixel"
              className="btn btn-primary"
              target="_blank"
              rel="noopener"
            >
              live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={TWITTER} alt="post" />
          </div>
          <h3>This is portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://twitter-cloneee.netlify.app"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              Netlify
            </a>
            <a
              href="https://dribble.com/Allien_pixel"
              className="btn btn-primary"
              target="_blank"
              rel="noopener"
            >
              live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Avatar} alt="post" />
          </div>
          <h3>This is portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://lummy-store.netlify.app"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              Netlify
            </a>
            <a
              href="https://dribble.com/Allien_pixel"
              className="btn btn-primary"
              target="_blank"
              rel="noopener"
            >
              live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Avatar} alt="post" />
          </div>
          <h3>This is portfolio</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://lummy-store.netlify.app"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              Netlify
            </a>
            <a
              href="https://dribble.com/Allien_pixel"
              className="btn btn-primary"
              target="_blank"
              rel="noopener"
            >
              live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio