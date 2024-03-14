import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ProjectCard from "./ProjectCard";
import projectData from '../../Data/ProjectData'

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
        animationHandler={'slide'}
        transitionTime={'500'}
      >
      {
        projectData.slice(1).map((value, index) => (<div key={Math.random()} className={style}>
            <ProjectCard
              skills={value.skills}
              link={value.link}
              src={value.src}
              title={value.title}
              isVideo={value.isVideo}
            />
          </div>))
      }

<div className={style} key={Math.random()}>
            <ProjectCard
              skills={projectData[0].skills}
              link={projectData[0].link}
              src={projectData[0].src}
              title={projectData[0].title}
              isVideo={projectData[0].isVideo}
            />
          </div>
        
      </Carousel>
    </>
  );
}

export default ProjectCarousel;
