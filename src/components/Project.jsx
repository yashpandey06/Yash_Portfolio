/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import MediaCard from "./ProjectImages/MediaCard";


const Project = () => {
  const [projects, setProjects] = useState([
    {
      id: 66,
      name: "Bluff",
      image: "",
      explain: "A diarywriting web app with proper function of frontend and backened, user  authentication is required so that they can  keep their stories secretly. ",
      repo: <a target="blank" href="https://github.com/yashpandey06/BlogAppFrontend">Show</a>
    },
    {
      id: 1,
      name: "Convo Bot",
      image: "Talkbot.png",
      explain: "A talkbot built solely on python and its two renowned library name Pytxx3 and Sound-Recognition library, used Bard API library of javascript.",
      repo: <a target="blank" href="https://github.com/yashpandey06/TALKBOT">Show</a>
    },
    {
      id: 2,
      name: "Trell",
      image: "",
      explain: "A KanBan based project where we can  perform CRUD operations and summarise our daily tasks Frontend - ReactJs ,React Router, Talwind CSS and Backened - ExpressJs, NodedeJs, MongoDB",
      repo: <a target="blank" href="https://github.com/yashpandey06/Task-Manager">Show</a>
    },
    {
      id: 3,
      name: "Crypto Webapp",
      image: "Crypto.png",
      explain: "This Web App shows the current market rates of top 100 cryptocurrencies here the results are fetched from Coingecko API.",
      repo: <a target="blank" href="https://crypto-app-git-crypto-yashpandey06.vercel.app/">Show</a>
    },
    {
      id: 4,
      name: "Landing Page (Retink Media)",
      image: "Rethink.png",
      explain: "A landing page of a social marketing agency.",
      repo: <a target="blank" href="https://retinkmedia.netlify.app/">Show</a>
    },
    {
      id: 5,
      name: "Link Tree",
      image: "LinkTree.png",
      explain: "A single page webApp kindoff similar to LinkTree where I can keep my professional and social links.",
      repo: <a target="blank" href="https://yash-link-tree.netlify.app/">Show</a>
    },

  ])
  return (
    <div
      name="About"
      id="about"
      className="">
      <MediaCard projects={projects} />
    </div>
  );
};

export default Project;
