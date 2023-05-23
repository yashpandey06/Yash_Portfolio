/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import MediaCard from "./ProjectImages/MediaCard";

const Project = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "TalkBot",
      explain: "explain",
      livelink: "#",
      repo: "repolink"
    },
    {
      id: 2,
      name: "ChatBot",
      explain: "explain",
      livelink: "deploylink",
      repo: "repolink"
    },
    {
      id: 3,
      name: "Crypto Webapp",
      explain: "",
      livelink: "deploylink",
      repo: "repolink"
    },
    {
      id: 4,
      name: "Landing Page",
      explain: "explain",
      livelink: "deploylink",
      repo: "repolink"
    },
    {
      id: 5,
      name: "Link Tree",
      explain: "explain",
      livelink: "deploylink",
      repo: "repolink"
    },

  ])
  return (
    <div
      name="About"
      id="about"
      className="flex grow  ">
      <MediaCard projects={projects} />
    </div>
  );
};

export default Project;
