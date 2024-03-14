import React, { useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import courseData from "../../Data/courseData";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import educationData from "../../Data/educationData";
import selfData from "../../Data/selfData.js";
import "./About.css";

function CreateIcon({ src }) {
  return <img src={src} alt="" />;
}

function HighlightText({ children }) {
  return (
    <strong className="">
      <em className="text-green-500">{children}</em>
    </strong>
  );
}

function About() {
  useEffect(() => {
    const slider = document.querySelector(".slider");
    function activate(e) {
      const items = document.querySelectorAll(".card");
      e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
      /* e.target.matches(".prev") && slider.prepend(items[items.length - 2]); */
    }

    document.addEventListener("click", activate, false);
  });
  return (
    <div className="bg-[url(../aboutBg.jpg)] bg-no-repeat bg-center bg-cover overflow-auto">
      {/* User Info */}
      <div className="h-full flex shadow-[0px_2px_200px_10px_#000_inset] overflow-hidden tablet:flex-col-reverse tablet:h-max">
        <div className="w-1/2 justify-end items-center flex flex-col gap-6 mid-desktop:gap-4 tablet:w-full tablet:gap-2 text-xl large-mobile:text-base p-8 text-justify tablet:py-0 tablet:px-2 z-10 text-[#B5BEC6]">
          <div className="text-center text-9xl drop-shadow-[-7px_0px_1px_#000] tablet:text-8xl">Hello!</div>
          <div className="drop-shadow-[-7px_0px_1px_#000]">
            I'm <strong><em className="text-green-400 underline" >{selfData.firstName}</em></strong> <HighlightText>, a self-taught web developer </HighlightText>{" "} passionate with a knack for building<HighlightText> dynamic and responsive web applications.</HighlightText>
          </div>
          <div className="drop-shadow-[-7px_0px_1px_#000]"> My journey in the tech world is marked by a continuous quest for learning and an unwavering commitment to excellence.</div>
          <div className="drop-shadow-[-7px_0px_1px_#000]"> I specialize in <HighlightText> Full Stack Development, </HighlightText> with a keen interest in <HighlightText> both backend logic and frontend aesthetics.</HighlightText>I've embarked on a journey to transform ideas into digital realities.</div>
        </div>
        <div className="w-1/2 flex justify-center overflow-hidden tablet:w-full">
          <img
            src={selfData.src}
            alt=""
            className="m-auto w-full object-contain drop-shadow-[0px_0_100px_#000]"
          />
        </div>
      </div>

      {/* Education */}
      <div className="flex text-white flex-col gap-4 shadow-[0px_2px_200px_10px_#000_inset] mt-4">
      <div className="flex  w-full justify-center overflow-hidden py-4">
          <h1 className="w-full text-7xl small-tablet:text-6xl large-mobile:text-5xl  text-center drop-shadow-[5px_5px_2px_#000] ">Education</h1>
        </div>
        <VerticalTimeline className="max-w-1/2" lineColor="black">
          {educationData.map((value) => (
            <VerticalTimelineElement
              key={Math.random()}
              date={value.date}
              icon={<CreateIcon src={value.src} />}
              iconStyle={{ overflow: "hidden", border: "4px solid black" }}
              contentStyle={{
                background: "#F9DEC9",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "1rem",
              }}
              dateClassName="text-[#EBEBD3]"
            >
              <div className="font-cursive shadow-[0px_0px_20px_20px_#000_inset] drop-shadow-[3px_0px_1px_#000] text-[#1F0812] rounded-lg flex flex-col gap-4 p-8 border border-black text-2xl">
                <h1 className="text-center underline text-5xl large-mobile:text-4xl drop-shadow-[5px_0px_1px_#000] text-[#232C33] tracking-wider">
                  {value.id}
                </h1>
                <h1>{value.institute}</h1>
                <div>
                  <h1>{value.place}</h1>
                  <span>{value.pincode}</span>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      {/* Certification */}
      <div className="h-full mt-4 flex flex-col large-mobile:h-1/2 shadow-[0px_2px_200px_10px_#000_inset] p-4">
      <div className="flex text-white w-full justify-center overflow-hidden py-4">
          <h1 className="w-full text-7xl small-tablet:text-6xl large-mobile:text-5xl  text-center drop-shadow-[5px_5px_2px_#000] ">Certifications</h1>
        </div>
        <div className="relative mt-8 h-full w-full">
          <div className="slider w-full h-full">
            {
              courseData.map((value) => <div key={Math.random()} className="card ">
              <div className=" w-1/2 mid-desktop:w-[60%] tablet:w-full h-full flex justify-center items-center object-contain large-mobile:p-2 m-auto">
                <img
                  src={value.src}
                  alt=""
                  className="w-max m-auto h-full object-contain rounded-md shadow-[10px_0px_10px_5px_#000]"
                />
              </div>
            </div>)
            }
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 ">
            <button className="border text-center px-8  flex justify-center items-center prev bg-white bg-opacity-50 backdrop-blur-sm  text-3xl" name="arrow-back-outline">
              &gt;&gt;
            </button>
          </div>
          </div>
        </div>
        
      </div>

    </div>
  );
}

export default About;
