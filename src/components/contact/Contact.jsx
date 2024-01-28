import React from "react";
import "./Contact.css";
import { IoMdMail } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_u6qo36i",
        "template_7cc5x25",
        form.current,
        "-CGFf-zpj26sDFPZm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5> GET In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <IoMdMail />
            <h4> Email</h4>
            <h1>franckpolla9@gmail.com</h1>
            <a href="mailto:franckpolla9@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h1>+905338365434</h1>
            <a href="https://wa.me/+905338365434 " target="_blank">
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            required
            placeholder="Your Full Name "
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email adress "
          />
          <textarea
            required
            name="message"
            id=""
            cols="30"
            rows="7"
            placeholder="Your Message"
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
