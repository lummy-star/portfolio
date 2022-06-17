import React from 'react'
import './about.css'
import ME from  '../../assets/Me.jpeg'
import {FiAward} from 'react-icons/fi'
import {HiUsers} from 'react-icons/hi'
import {AiFillFolder} from 'react-icons/ai'

const About = () => {
  return (
    <section id="about">
      <h5> Want To know </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small> Some Years Of  Working Experience</small>
            </article>
            <article className="about__card">
              <HiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>over 20 Clients WorldWide</small>
            </article>
            <article className="about__card">
              <AiFillFolder className="about__icon" />
              <h5>Projects</h5>
              <small>More than 15 Projects</small>
            </article>
          </div>
          <p>
            i build responsive web pages and a personal React web application,
            following SEO principles, effectively debug, understand and resolve
            issues within my code, work with data-handling via AJAX, JSON, fetch
            API and Axios, Git versioning, pagination, Google Oauth and
            cloudinary for images and video uploads. Provide creative ideas and
            i collaborate to design and build a web application in accordance
            with best practices and user experience using both ReactJS and
            NodeJS, i deploy and maintain network applications. also manage the
            exchange of data between servers and users, develop back-end
            components, and connect applications with other web services. as
            well as support front-end developers by integrating web-based
            applications
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk About Your Projects</a>
        </div>
      </div>
    </section>
  );
}

export default About
