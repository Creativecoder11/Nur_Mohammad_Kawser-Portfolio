import React from "react";
import { AiFillCustomerService } from "react-icons/ai";
import { BiBriefcase } from "react-icons/bi";
import { RiFolderSettingsLine } from "react-icons/ri";
// import img from '../../Assets/programming.gif'
import img from '../../Assets/my-img.jpg'
import Line from "./Line";

const About = () => {
  return (
    <div>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="container about_container flex"
        >
          <div className="about_me">
            <div className="about_me_image">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="about_content">
            <div className="about_cards">
              <article className="about_card">
                <BiBriefcase className="about_icon" />
                <h5>Experience</h5>
                <small>1 Year</small>
              </article>
              <article className="about_card">
                <AiFillCustomerService className="about_icon" />
                <h5>Clients</h5>
                <small>10+ Worldwide</small>
              </article>
              <article className="about_card">
                <RiFolderSettingsLine className="about_icon" />
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
            </div>

            <p>
              I'm a frontend-based full-stack developer from Bangladesh. I'm a passion for developing innovative web operations. Who's well-clued in
              technology and jotting laws to produce systems that are dependable and visitor friendly. I'm a confident
              prophet, strategic thinker, and innovative creator to develop software that's customized to meet a company’s
              organizational requirements, punctuate its core capabilities, and further its success.
            </p>

            <a className="btn btn-primary" href="#contact">
              Contact Me
            </a>
          </div>
          
        </div>
        <Line></Line>
      </section>
    </div>
  );
};

export default About;
