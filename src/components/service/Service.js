import React from 'react'
import {BsCheck} from 'react-icons/bs'
import './service.css'

const Service = () => {
  return (
    <section id="services">
      <h5>What i offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className=" service__list-icon" />
              <p>Develop the overall look and design of website</p>
            </li>
            <li>
              <BsCheck className=" service__list-icon" />
              <p>
                Writing Code With programming Languages not limited to HTML/CSS and
                React
              </p>
            </li>
            <li>
              <BsCheck className=" service__list-icon" />
              <p>
                Producing, Maintaining and Modifying Website and User Interface
              </p>
            </li>
            <li>
              <BsCheck className=" service__list-icon" />
              <p>
                Ensuring Websites are accessible across many platforms,
                including Laptops/Tablets and Smartphones
              </p>
            </li>
            <li>
              <BsCheck className=" service__list-icon" />
              <p>intergration of API`s </p>
            </li>
            <li>
              <BsCheck className=" service__list-icon" />
              <p>Fixing Websites issues or Bugs that Arises</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT  */}

        <article className="service">
          <div className="service__head">
            <h3>Mobile App Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Developing new applications for mobile devices</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Building applications from existing code</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Writing new code using JavaScript</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                {" "}
                Ensuring that the user interfaces for all applications are
                smooth and visually appealing
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Working with other development teams to complete all parts of an
                application's infrastructure
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Writing automated tests to ensure that all new applications
                function correctly
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Troubleshooting issues and bugs that arise while testing new
                applications
              </p>
            </li>
          </ul>
        </article>
        {/* END OF MOBILE DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>BACKEND Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Developing and maintaining all server-side network components
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Ensuring optimal performance of the central database and
                responsiveness to front-end requests
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Collaborating with front-end developers on the integration of
                elements
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Developing high-performance applications by writing testable,
                reusable, and efficient code
              </p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>
                Recommending and implementing improvements to processes and
                technologies
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Service
