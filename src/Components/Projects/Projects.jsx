import React, { useEffect } from "react";
import projectData from "../../Data/ProjectData";
import { Link } from "react-router-dom";
import "./Projects.css";

function Projects() {
  useEffect(() => {
    const slider = document.querySelector(".slider");

    function activate(e) {
      let items = document.querySelectorAll(".item");
      e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
      e.target.matches(".next") && slider.append(items[0]);
    }

    document.addEventListener("click", activate, false);
  });
  return (
    <div className="h-dvh bg-black">
      <div className="relative w-full h-full overflow-hidden">
        <div className="slider">
          {projectData.map((value) => (
            <div key={Math.random()} className="item">
              <div className="relative h-full">
                {value.isVideo ? (
                  <video
                    src={value.src}
                    className="absolute w-full top-0 h-full tablet:h-max "
                    muted
                    loop
                    autoPlay={true}
                  />
                ) : (
                  <img
                    src={value.src}
                    className="absolute w-full top-0 h-full tablet:h-max"
                  />
                )}
              </div>
              <div className="content p-4 tablet:p-2">
                <h1 className="text-2xl tablet:text-base text-center">{value.title}</h1>
                <div className="flex gap-4 justify-center p-4 tablet:p-2">
                  {value.skills.map((value) => (
                    <img key={Math.random()} src={value} alt="" className="drop-shadow-[10px_-1px_10px_#000] w-full tablet:w-1/4 large-mobile:w-1/5 aspect-square" style={{clipPath:'circle(50)'}} />
                  ))}
                </div>
                <div className="flex gap-4 p-4 justify-evenly">
                  <Link to={value.link}>
                    <button className="px-4 w-max py-2 rounded-md bg-[#FF8811] shadow-[0px_0px_12px_10px_#000_inset]">
                      Demo Link
                    </button>
                  </Link>
                  <Link to={value.link}>
                    <button className="px-4 py-2 w-max rounded-md bg-[#FF8811] shadow-[0px_0px_12px_10px_#000_inset]">
                      Repo Link
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10 flex ">
        <div className="border-4 border-black text-center p-4 rounded-[50%] flex justify-center items-center bg-white bg-opacity-50 backdrop-blur-sm aspect-square text-sm prev" name="arrow-forward-outline">prev</div>
          <div className="border-4 border-black text-center p-4 rounded-[50%] flex justify-center items-center bg-white bg-opacity-50 backdrop-blur-sm aspect-square text-sm next" name="arrow-back-outline">next</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
