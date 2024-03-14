import React from "react";
import imac from "../../assets/images/imac.png";
import { Link } from "react-router-dom";

function ProjectCard({
  src,
  title,
  isVideo = true,
  link,
  className,
  borderOn = "border border-0 ",
  skills,
}) {
  return (
    <div className={`${borderOn} flip-card h-max aspect-square`}>
      <div className="flip-card-inner  flex flex-col justify-center items-center rounded-2xl">
        <div className="flip-card-front h-max w-full">
          <div className="relative mx-auto flex h-max justify-center items-center">
            <img
              src={imac}
              alt=""
              className="mx-auto aspect-square object-cover drop-shadow-[-10px_15px_10px_#000]"
            />
            {isVideo ? (
              <video className="projectVideo" autoPlay loop muted>
                <source src={src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={src}
                alt=""
                className="projectVideo"
                style={{ width: "88.2%" }}
              ></img>
            )}
            <h1 className={`absolute text-3xl z-10 w-full h-full drop-shadow-[0.5px_0px_0.3px_#000] bg-[url(../ProjectTextBg.jpg)] bg-center bg-cover bg-no-repeat top-0 text-transparent bg-clip-text large-mobile:text-lg small-mobile:text-sm`}>{title}</h1>
          </div>
          
        </div>
        <div className={`flip-card-back h-max w-full`}>
          <div className="flex flex-col p-8 gap-8 transition-all justify-center items-center">
          <div className="flex gap-4 p-10 w-full justify-center">
            {skills.map((data) => (
              <img key={Math.random()} src={data} className="w-full drop-shadow-[0px_0px_30px_#000]" />
            ))}
          </div>
          <Link to={link}>
            <button className="py-2 px-6 border">Visit</button>
          </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default ProjectCard;
