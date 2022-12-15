import React from "react";
import "./Portfolio.css";
import { FiGithub } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import luxury from "./../../Assets/luxury/Luxury1.png"
import pixel from "./../../Assets/pixel/Home-Pixel-Click-Photographer.png"
import coder from "./../../Assets/coder/cover.PNG"

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";


const Portfolio = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio_container project">
        {/* Luxury Portfolio */}
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="project__section"
        >
          <div className="project__left project-name">
            <PhotoProvider>
              <PhotoView className='project-name' src={luxury}>
                <img className="project__img" src={luxury} alt="color palette" />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div className="project__right">
            <p className="project__headingTertiary">
              <small>Featured Project</small>
            </p>
            <a
              href="https://github.com/Creativecoder11/Luxury_Wheel_Used_Car-Client-Side"
              target="_blank"
              rel="noreferrer"
              className="project__headingSecondary"
            >
              <h2>Luxury Wheel</h2>
            </a>
            <div className="project__descriptionContainer">
              <p className="project__description">
                Luxury Wheel is a used product's resale website with a dedicated
                admin panel. User, Seller, and admin roles added with the Google
                authentication system. Buyer can see their order and pay, Seller
                can see their uploaded product and add a new product and admin
                can see all buyers, all sellers, and reported products.
              </p>
              <div className="flex ml-5 justify-between">
                <div>
                  <div className="flex">
                    <a
                      href="https://github.com/Creativecoder11/Luxury_Wheel_Used_Car-Client-Side"
                      target="_blank"
                      rel="noreferrer"
                      style={{ marginRight: "1rem" }}
                    >
                      <FiGithub className="icons" />
                    </a>
                    <a
                      href="https://luxury-wheel.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink className="icons" />
                    </a>
                  </div>
                </div>
                <div>
                  <Link to='/luxury-wheel'><button  className="btn-primary p-2 text-xs mt-2 rounded-lg">Details</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pixel Click Portfolio */}
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="project__section middle"
        >
          <div className="project__right__middle">
            <p className="project__headingTertiary">
              <small>Featured Project</small>
            </p>
            <a
              href="https://github.com/Creativecoder11/Pixel_Click_Photographer-Client-Side"
              target="_blank"
              rel="noreferrer"
              className="project__headingSecondary"
            >
              <h2>Pixel Click Photographer</h2>
            </a>
            <div className="project__descriptionContainer">
              <p className="project__description__middle">
                Service Website including add or remove services. Form to leave
                reviews for the clients to show on the details page. Option to
                add more services to all service page.
              </p>
              <div className="flex ml-5 justify-between">
                <div>
                  <div className="flex">
                    <a
                      href="https://github.com/Creativecoder11/Pixel_Click_Photographer-Client-Side"
                      target="_blank"
                      rel="noreferrer"
                      style={{ marginRight: "1rem" }}
                    >
                      <FiGithub className="icons" />
                    </a>
                    <a
                      href="https://pixel-click-photographer.web.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink className="icons" />
                    </a>
                  </div>
                </div>
                <div>
                  <Link to='/pixel-click'><button  className="btn-primary p-2 text-xs mt-2 rounded-lg">Details</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="project__left project-name">
            <PhotoProvider>
                <PhotoView className='project-name' src={pixel}>
                  <img className="project__img rounded-lg" src={pixel} alt="color palette" />
                </PhotoView>
            </PhotoProvider>
          </div>
        </div>

        {/* Coder Brain */}
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="project__section"
        >
          <div className="project__left project-name">
            <PhotoProvider>
                <PhotoView src={coder}>
                  <img className="mt-10 project__img" src={coder} alt="color palette" />
                </PhotoView>
            </PhotoProvider>
          </div>
          <div className="project__right">
            <p className="project__headingTertiary">
              <small>Featured Project</small>
            </p>
            <a
              href="https://github.com/Creativecoder11/Coder_Brain_Tutorial_React_Firebase-Client"
              target="_blank"
              rel="noreferrer"
              className="project__headingSecondary"
            >
              <h2>Coder Brain</h2>
            </a>
            <div className="project__descriptionContainer">
              <p className="project__description">
                E-learning Website for web developers. Log In method with
                private route feature. Option to download course details page as
                a pdf.
              </p>
              <div className="flex justify-between">
                <div>
                  <div className="flex ml-5">
                    <a
                      href="https://github.com/Creativecoder11/Coder_Brain_Tutorial_React_Firebase-Client"
                      target="_blank"
                      rel="noreferrer"
                      style={{ marginRight: "1rem" }}
                    >
                      <FiGithub className="icons" />
                    </a>
                    <a
                      href="https://coder-brain-learning-platfrom.web.app"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FiExternalLink className="icons" />
                    </a>
                  </div>
                </div>
                <div>
                  <Link to='/coder-brain'><button  className="btn-primary p-2 text-xs mt-2 rounded-lg">Details</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
