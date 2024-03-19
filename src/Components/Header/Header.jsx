import React, { useState } from "react";
import hamburger from "../../assets/images/hamburger.png";
import { Link } from "react-router-dom";
import NavigationLinks from "../NavigationLinks/NavigationLinks";
import github from "../../assets/svg/github.svg";
import instagram from "../../assets/svg/instagram.svg";
import linkedin from "../../assets/svg/linkedin.svg";
import selfData from "../../Data/selfData";

function Logo({ imgSrc, title, link }) {
  return (
    <Link to={link} target="_blank">
      <button className="rotate-180 hover:rotate-0 transition-all large-mobile:w-[80%]">
        <img src={imgSrc} alt="" title={title} />
      </button>
    </Link>
  );
}

function Header() {
  function handleShowHamburger() {
    setIsHidden(!isHidden);
  }
  const [isHidden, setIsHidden] = useState(true);
  return (
    <header className="bg-black text-white h-auto sticky top-0 z-10">
      <nav className=" flex justify-between p-6 items-center tablet:flex-wrap tablet:gap-4 large-mobile:p-4 transition-all">
        <div className="flex tablet:w-full">
          <h2 className="text-2xl font-cursive font-bold text-center tablet:w-full  small-desktop:text-3xl small-mobile:text-2xl">
            {selfData.firstName}'s Portfolio
          </h2>
          <img
            src={hamburger}
            alt=""
            className="hidden w-[10%] large-mobile:block aspect-square"
            id="hamburger"
            onClick={handleShowHamburger}
          />
        </div>
        <ul
          className={`flex justify-between gap-4 small-tablet:w-full ${
            isHidden ? "large-mobile:hidden" : ""
          }`}
        >
          <NavigationLinks value={"Home"} to={"/"} />
          <NavigationLinks value={"Projects"} to={"/projects"} />
          <NavigationLinks value={"About Me"} to={"/about"} />
        </ul>
        <div
          className={`flex gap-4 small-tablet:justify-between small-tablet:w-full ${
            isHidden ? "large-mobile:hidden" : ""
          }`}
        >
          <a href="/resume/Patil Khushal Resume.pdf" download><button>Resume &darr;</button></a>
          <Logo
            link="https://github.com/PatilKhushal"
            imgSrc={github}
            title="github"
          />
          <Logo
            link="https://www.instagram.com/patil__khushal/"
            imgSrc={instagram}
            title="instagram"
          />
          <Logo
            link="https://www.linkedin.com/in/patilkhushal2803/"
            imgSrc={linkedin}
            title="linkedin"
          />
          {/* <Logo imgSrc={twitter} title='twitter'/> */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
