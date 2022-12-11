import React from "react";
import { AiFillCustomerService } from "react-icons/ai";
import { BiBriefcase } from "react-icons/bi";
import { RiFolderSettingsLine } from "react-icons/ri";
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
          className="container about_container"
        >
          <div className="about_me">
            <div className="about_me_image">
              <img src={'AboutImage'} alt="" />
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
              I'm a frontend-based full-stack developer from Bangladesh. I love
              web development because I can showcase my creativity in this work.
              I want to see myself as a skilled web developer with my hard work.
              I want to work with someone who can help me develop both my
              professional and personal abilities. Currently, I'm studying
              Computer Science and Engineering at Daffodil International
              University.
            </p>

            <a className="btn btn-primary" href="#contact">
              Let's Talk
            </a>
          </div>
        </div>
        <Line></Line>
      </section>
    </div>
  );
};

export default About;