import FoodShopTemplate from "../assets/videos/Food-Shop-Template.mp4";
import UniversitySiteTemplate from "../assets/videos/University-Site-Template.mp4";
import ZomatoLandingPage from "../assets/videos/Zomato-Landing-Page.mp4";
import AnimatedLandingPage from "../assets/videos/Animated-Landing-Page.mp4";
import NetflixTemplateClone from "../assets/videos/Netflix-Template-Clone.mp4";
import CustomMusicPlayer from "../assets/videos/Custom-Music-Player.mp4";
import TicTacToe from "../assets/videos/Tic-Tac-Toe.mp4";
import GoogleChromeTemplate from "../assets/images/Google-Chrome-Template.png";
import Calculator from "../assets/images/Calculator.png";
import newsApp from '../assets/videos/news-app.mp4'
import weatherApp from '../assets/videos/weather-app.mp4'
import todoApp from '../assets/videos/todo-app.mp4'

import html from "../assets/svg/html-1.svg";
import css from "../assets/svg/css-3.svg";
import js from "../assets/svg/logo-javascript.svg";
import react from "../assets/svg/react-2.svg";
import tailwind from "../assets/svg/tailwind-css-2.svg";

let i = 1;
const projectData = [
  {
    number : i++,
    isVideo : true,
    skills: [html, css],
    link: "https://patilkhushal.github.io/Food-Shop/",
    src: FoodShopTemplate,
    title: "Food-Shop-UI-Template",
  },
  {
    number : i++,
    isVideo : true,
    skills: [react, tailwind],
    link: "https://patilkhushal.github.io/Custom-Music-Player/",
    src: newsApp,
    title: "News-App",
  },
  {
    number : i++,
    isVideo : true,
    skills: [react, tailwind],
    link: "https://patilkhushal.github.io/Custom-Music-Player/",
    src: weatherApp,
    title: "Weather-App",
  },
  {
    number : i++,
    isVideo : true,
    skills: [react, tailwind],
    link: "https://patilkhushal.github.io/Custom-Music-Player/",
    src: todoApp,
    title: "Todo-App",
  },
  {
    number : i++,
    isVideo : true,
    skills: [html, tailwind, js],
    link: "https://patilkhushal.github.io/Custom-Music-Player/",
    src: CustomMusicPlayer,
    title: "Basic-Music-Player",
  },
  {
    number : i++,
    isVideo: false,
    skills: [html, tailwind, js],
    link: "https://patilkhushal.github.io/Calculator/",
    src: Calculator,
    title: "Functional-Calculator",
  },
  {
    number : i++,
    isVideo : true,
    skills: [html, tailwind, js],
    link: "https://patilkhushal.github.io/Tic-Tac-Toe/",
    src: TicTacToe,
    title: "Tic-Tac-Toe",
  },
  {
    number : i++,
    isVideo : true,
    skills: [html, css],
    link: "https://patilkhushal.github.io/Netflix-Clone/",
    src: NetflixTemplateClone,
    title: "Netflix-UI-Clone",
  },
  {
    number : i++,
    isVideo : true,
    skills: [html, css],
    link: "https://patilkhushal.github.io/Animated-Landing-Page/",
    src: AnimatedLandingPage,
    title: "Animated-Landing-Page-Clone",
  },
  {
    number : i++,
    isVideo : true,
    skills: [html, css],
    link: "https://patilkhushal.github.io/Zomato-Landing-Page/",
    src: ZomatoLandingPage,
    title: "Zomato-Landing-Page-Clone",
  },
  {
    number : i++,
    isVideo: false,
    skills: [html, css],
    link: "https://patilkhushal.github.io/Google-Chrome-Home-Page/",
    src: GoogleChromeTemplate,
    title: "Google-Chrome-UI-Template",
  },
  {
    number : i++,
    isVideo : true,
    skills: [html, css],
    link: "https://patilkhushal.github.io/Responsive-University-Site-Template/",
    src: UniversitySiteTemplate,
    title: "University-Site-UI-Template",
  },
];

export default projectData;
