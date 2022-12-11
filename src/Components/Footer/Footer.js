import React from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
// import './Footer.css'

const Footer = () => {
  return (
    <div>
      <footer className="py-20">
        <ul className="flex-none lg:flex justify-center gap-16">
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#timeline">Education</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="flex justify-center gap-16 mt-10">
          <a
            href="https://www.linkedin.com/in/sakib08/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/sakib-xrz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://www.facebook.com/itsonlysakib"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare />
          </a>
        </div>

        <div className="footer_copyright">
          <small className="copy">
            &copy; Md Sakibul Islam. All right reserved.
          </small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
