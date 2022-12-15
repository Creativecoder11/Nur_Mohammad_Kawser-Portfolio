import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiWordpress } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap, FaDeskpro, FaNodeJs, FaWordpress } from "react-icons/fa";
import { SiAdobeillustrator, SiAdobepremierepro, SiExpress, SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiAdobephotoshop } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { IoLogoCodepen } from "react-icons/io";
import { FiFigma, FiTarget } from "react-icons/fi";
import { SiNetlify } from "react-icons/si";
import { ImWordpress } from "react-icons/im";
import './Experience.css'
import { AnimatePresence } from "framer-motion";

const Experience = () => {
  return (
    <div>
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience_container">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="experience_frontend"
          >
            <h3>Frontend Development</h3>
            <div className="experience_content">
              <article className="experience_details">
                <AiFillHtml5 className="experience-icons" />
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <DiCss3 className="experience-icons" />
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <IoLogoJavascript className="experience-icons" />
                <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <FaBootstrap className="experience-icons" />
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience_details">
                <SiTailwindcss className="experience-icons" />
                <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience_details">
                <FaReact className="experience-icons" />
                <div>
                  <h4>React</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="experience_tools"
          >
            <div className="experience_frontend">
              <h3>Backend Development</h3>
              <div className="experience_content">
                <article className="experience_details">
                  <FaNodeJs className="experience-icons" />
                  <div>
                    <h4>Node JS</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <SiExpress className="experience-icons" />
                  <div>
                    <h4>Express JS</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <SiMongodb className="experience-icons" />
                  <div>
                    <h4>MongoDB</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <ImWordpress className="experience-icons" />
                  <div>
                    <h4>Wordpress</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience_details">
                  <SiFirebase className="experience-icons" />
                  <div>
                    <h4>Firebase</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <VscJson className="experience-icons" />
                  <div>
                    <h4>JWT</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="experience_tools"
          >
            <div className="experience_frontend">
              <h3>Systems & Tools</h3>
              <div className="experience_content">
                <article className="experience_details">
                  <SiVisualstudiocode className="experience-icons" />
                  <div>
                    <h4>VS Code</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <AiFillGithub className="experience-icons" />
                  <div>
                    <h4>GitHub</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <SiNetlify className="experience-icons" />
                  <div>
                    <h4>Netlify</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <IoLogoCodepen className="experience-icons" />
                  <div>
                    <h4>Codepen</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience_details">
                  <SiAdobephotoshop className="experience-icons" />
                  <div>
                    <h4>Photoshop</h4>
                    <small className="text-light">Basic</small>
                  </div>
                </article>
                <article className="experience_details">
                  <FiFigma className="experience-icons" />
                  <div>
                    <h4>Figma</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="experience_tools"
          >
            <div className="experience_frontend">
              <h3>Others</h3>
              <div className="experience_content">
                <article className="experience_details">
                  <FaWordpress className="experience-icons" />
                  <div>
                    <h4>Wordpress</h4>
                    <small className="text-light">Experience</small>
                  </div>
                </article>
                <article className="experience_details">
                  <FaDeskpro className="experience-icons" />
                  <div>
                    <h4>Digi Marketing</h4>
                    <small className="text-light">Experience</small>
                  </div>
                </article>
                <article className="experience_details">
                  <FiTarget className="experience-icons" />
                  <div>
                    <h4>SEO - Basic</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
                <article className="experience_details">
                  <SiAdobephotoshop className="experience-icons" />
                  <div>
                    <h4>Photoshop</h4>
                    <small className="text-light">Experienced</small>
                  </div>
                </article>
                <article className="experience_details">
                  <SiAdobepremierepro className="experience-icons" />
                  <div>
                    <h4>Premiere Pro</h4>
                    <small className="text-light">Basic</small>
                  </div>
                </article>
                <article className="experience_details">
                  <SiAdobeillustrator className="experience-icons" />
                  <div>
                    <h4>Illustrator</h4>
                    <small className="text-light">Intermediate</small>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
