import React from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import img from '../../Assets/my-img.png'
import CVD from "./CVD";
import './Header.css'
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <div>
      <header id="header" className=''>
        <div className="container heder-content header_container">
          <div className="animate__animated animate__slideInDown flex-none lg:flex align items-center justify-center gap-20">
            <div className="me mt-5">
              <img src={img} alt="" />
            </div>
            <div>
              <h5>Hello I'm</h5>
              <h1 className="text-2xl lg:text-4xl">Nur Mohammad Kawser</h1>
              <h5 className="text-light">Front-End Developer | MERN Stack Developer</h5>
              <CVD />
              {/* <HeaderSocial /> */}
            </div>
          </div>

          {/* <a className="scroll_down" href="#contact">
            Scroll Down <AiOutlineDoubleRight className="bounce" />
          </a> */}
        </div>
      </header>
    </div>
  );
};

export default Header;
