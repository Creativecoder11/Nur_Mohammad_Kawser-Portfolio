import React, { useRef } from "react";
import toast from "react-hot-toast";
import { BiEnvelope } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { RiMessengerLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import './Contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const contactForm = e.target;
    emailjs
      .sendForm(
        "service_f84mblo",
        "template_riyckov",
        form.current,
        "b-LTWDJrlrz81olFa"
      )
      .then(
        (result) => {
          if (result.text) {
            contactForm.reset();
            toast.success("Message sent");
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="contact_options"
        >
          <article className="contact_option">
            <BiEnvelope className="contact_icon" />
            <h4>Email</h4>
            <h5 className="text-sm">nurmohammadkawser11@gmail.com</h5>
            <a
              href="mailto:nurmohammadkawser11@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_icon" />
            <h4>Messenger</h4>
            <h5>Nur Mohammad Kawser</h5>
            <a
              href="https://m.me/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_icon" />
            <h4>WhatsApp</h4>
            <h5>+8801931927452</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+8801931927452"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form
          data-aos="fade-up"
          data-aos-duration="1500"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="text"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" value="Send" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
