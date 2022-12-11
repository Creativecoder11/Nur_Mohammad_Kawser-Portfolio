import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBriefcase } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#header");
  return (
    <nav className="flex justify-between items-center">
      <div>
        <p className="">Kawser Portfolio</p>
      </div>
      <div className="flex">
        <a
          href="#header"
          onClick={() => setActiveNav("#header")}
          className={activeNav === "#header" ? "active" : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={activeNav === "#experience" ? "active" : ""}
        >
          <BiBriefcase />
        </a>
        <a
          href="#service"
          onClick={() => setActiveNav("#service")}
          className={activeNav === "#service" ? "active" : ""}
        >
          <RiServiceLine />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <BiMessageSquareDetail />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
