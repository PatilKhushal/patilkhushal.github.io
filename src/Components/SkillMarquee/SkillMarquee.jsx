import React from "react";
import Marquee from "react-fast-marquee";
import SkillCard from "./SkillCard";
import skillData from "../../Data/skillData";

/* import html from '../../assets/images/html.png'
import css from '../../assets/images/css.png' */

/*
 * websocket
 * webrtc
 */

function SkillMarquee() {
  return (
    <div className="w-full h-full">
      <div className="flex mb-4 w-full justify-center overflow-hidden py-4">
        <h1 className="w-full text-7xl small-tablet:text-6xl large-mobile:text-[2.5rem] small-mobile:text-4xl text-center drop-shadow-[5px_5px_2px_#000] ">Technology Palette</h1>
      </div>
      <Marquee
        speed={200}
        pauseOnHover
        className="p-10 shadow-[0px_0px_10px_5px_#000] "
      >
        {
          skillData.map((value) => <SkillCard imgSrc={value.src} text={value.title} key={Math.random()}/>)
        }
      </Marquee>
    </div>
  );
}

export default SkillMarquee;
