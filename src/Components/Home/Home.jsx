import React from "react";
import SkillMarquee from "../SkillMarquee/SkillMarquee";
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";
import selfData from "../../Data/selfData.js"; // import user data

/* text-[#FA8334]
text-[#FFB17A] */
function Home() {
  return (
    <div className={`text-white overflow-auto`}>
      {/* Basic Introduction */}
      <div className="relative w-full mx-auto gap-8 h-full flex justify-center items-center">
        <div className="left scale w-full flex gap-6 justify-center items-center">
          <div className="left flex overflow-hidden w-full text-center flex-col justify-center items-center gap-8 large-mobile:gap-4 small-mobile:gap-2">
            <h1 className="w-full font-bold text-9xl tablet:text-8xl drop-shadow-[5px_5px_1px_#000] large-mobile:text-6xl mid-mobile:text-5xl small-mobile:text-4xl  text-[#FF9914]">
              {selfData.lastName + " " + selfData.firstName}
            </h1>
            <h1
              className="w-full font-bold drop-shadow-[5px_5px_1px_#000] text-5xl tablet:text-4xl large-mobile:text-2xl small-mobile:text-lg  text-[#DAFFEF]"
              id="element"
            >
              WEB DEV | JAVA | DSA
            </h1>
            <h2 className="w-full font-bold text-2xl drop-shadow-[5px_5px_2px_#000] tablet:text-xl large-mobile:text-base small-mobile:text-sm text-purple-300 ">
              And A Part-Time Poet!!
            </h2>
          </div>
        </div>
        <div className="w-full object-cover h-full absolute bg-black top-0 left-0 -z-10"></div>
        {/* <video className="w-full object-cover blur-md h-full absolute bg-black top-0 left-0 -z-10" src="../bg.mp4" autoPlay={true} muted loop></video> */}
        {/* <img className="w-full object-cover blur-sm h-full absolute bg-black top-0 left-0 -z-10" src="../bg.png" /> */}
        {/* <img className="w-full object-cover blur-sm h-full absolute bg-black top-0 left-0 -z-10" src="../bg2.jpg" /> */}
      </div>

      {/* Skills */}
      <div className="flex justify-center w-full mx-auto py-10 gap-8">
        <SkillMarquee />
      </div>

      {/* Projects Carousel */}
      <div className="flex flex-col w-full max-h-dvh">
        <div className="flex  w-full justify-center overflow-hidden py-4">
          <h1 className="w-full text-7xl small-tablet:text-6xl large-mobile:text-[2.5rem] small-mobile:text-4xl text-center drop-shadow-[5px_5px_2px_#000] ">Projects</h1>
        </div>
        <div className="flex  justify-center items-center w-full mx-auto gap-8">
          <div className="flex w-1/2 tablet:hidden justify-center items-center">
            <img
              src="../ProjectBG.png"
              alt=""
              className="w-3/4 tablet:3/4 transition-all duration-1000 drop-shadow-[0px_0px_50px_#000]"
            />
          </div>
          <div className="w-1/2 flex tablet:w-full overflow-hidden">
            <div className="w-full">
              <ProjectCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
