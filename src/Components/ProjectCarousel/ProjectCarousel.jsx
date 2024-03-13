import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ProjectCard from "./ProjectCard";

import FoodShopTemplate from "../../assets/videos/Food-Shop-Template.mp4";
import BirthdayWishAnimation from "../../assets/videos/Birthday-Wish-Animation.mp4";
import UniversitySiteTemplate from "../../assets/videos/University-Site-Template.mp4";
import ShraddhaCharacters from "../../assets/videos/Shraddha-Characters.mp4";
import ZomatoLandingPage from "../../assets/videos/Zomato-Landing-Page.mp4";
import AnimatedLandingPage from "../../assets/videos/Animated-Landing-Page.mp4";
import NetflixTemplateClone from "../../assets/videos/Netflix-Template-Clone.mp4";
import CustomMusicPlayer from "../../assets/videos/Custom-Music-Player.mp4";
import TicTacToe from "../../assets/videos/Tic-Tac-Toe.mp4";
import GoogleChromeTemplate from "../../assets/images/Google-Chrome-Template.png";
import Calculator from "../../assets/images/Calculator.png";

import html from "../../assets/svg/html-1.svg";
import css from "../../assets/svg/css-3.svg";
import js from "../../assets/svg/logo-javascript.svg";

function ProjectCarousel() {
  let style = "backdrop-blur-sm w-3/4 m-auto flex justify-center items-center";

  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        interval={20000}
        showThumbs={false}
        useKeyboardArrows={true}
        emulateTouch={true}
        stopOnHover={true}
        
      >
        <div className={style}>
          <ProjectCard
            skills={[html, css]}
            link="https://patilkhushal.github.io/Food-Shop/"
            src={FoodShopTemplate}
            title="Food-Shop-UI-Template"
          />
        </div>
        <div className={style}>
          <ProjectCard
            skills={[html, css]}
            link="https://patilkhushal.github.io/ThankYouPage/"
            src={BirthdayWishAnimation}
            title="Birthday-Wish-Animation"
          />
        </div>
        <div className={style}>
          <ProjectCard
            skills={[html, css]}
            link="https://patilkhushal.github.io/Responsive-University-Site-Template/"
            src={UniversitySiteTemplate}
            title="University-Site-UI-Template"
          />
        </div>
        <div className={style}>
          <ProjectCard
            skills={[html, css]}
            link="https://patilkhushal.github.io/Shraddha/"
            src={ShraddhaCharacters}
            title="Shraddha-Characters"
          />
        </div>
        <div className={style}>
          <ProjectCard
            skills={[html, css]}
            link="https://patilkhushal.github.io/Google-Chrome-Home-Page/"
            src={GoogleChromeTemplate}
            title="Google-Chrome-UI-Template"
            isVideo={false}
          />
        </div>
        <div className={style}>
          <ProjectCard
            skills={[html, css]}
            link="https://patilkhushal.github.io/Zomato-Landing-Page/"
            src={ZomatoLandingPage}
            title="Zomato-Landing-Page-Clone"
          />
        </div>
        <div className={style}>
          <ProjectCard
            skills={[html, css]}
            link="https://patilkhushal.github.io/Animated-Landing-Page/"
            src={AnimatedLandingPage}
            title="Animated-Landing-Page-Clone"
          />
        </div>
        <div className={style}>
          <ProjectCard
            skills={[html, css]}
            link="https://patilkhushal.github.io/Netflix-Clone/"
            src={NetflixTemplateClone}
            title="Netflix-UI-Clone"
          />
        </div>
        <div className={style}>
          <ProjectCard
            skills={[html, css, js]}
            link="https://patilkhushal.github.io/Custom-Music-Player/"
            src={CustomMusicPlayer}
            title="Basic-Music-Player"
          />
        </div>
        <div className={style}>
          <ProjectCard
            skills={[html, css, js]}
            link="https://patilkhushal.github.io/Tic-Tac-Toe/"
            src={TicTacToe}
            title="Tic-Tac-Toe"
          />
        </div>
        <div className={style}>
          <ProjectCard
            skills={[html, css, js]}
            link="https://patilkhushal.github.io/Calculator/"
            src={Calculator}
            title="Functional-Calculator"
            isVideo={false}
          />
        </div>
      </Carousel>
    </>
  );
}

export default ProjectCarousel;
