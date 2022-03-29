import React, { useRef } from "react";
import "./contact.css";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import emailjs from "emailjs-com";

const Contact = () => {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_816m8tg",
        "template_l52684s",
        form.current,
        "F6ZBeeO_aoac6oDbl"
      )
     e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="contact__option-text">
              interpercelservice<br></br>@gmail.com
            </h5>
            <a
              href="mailto:interpercelservice@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Ayodeji</h5>
            <a
              href="https://m.me/lummyayodeji"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>Whatapp</h4>
            <h5>+2348064180322</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+2348064180322"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
