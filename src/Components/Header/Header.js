import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import img from '../../Assets/my-img.png'
import CVD from "./CVD";
import './Header.css'
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <div>
      <header id="header" clas>
        <div className="container heder-content header_container">
          <div className="animate__animated animate__slideInDown">
            <div className="me">
              <img src={img} alt="" />
            </div>
            <h5>Hello I'm</h5>
            <h1>Nur Mohammad Kawser</h1>
            <h5 className="text-light">Front-End Developer</h5>
            <CVD />
          </div>
          <HeaderSocial />

          <a className="scroll_down" href="#contact">
            Scroll Down <AiOutlineDoubleRight className="bounce" />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
