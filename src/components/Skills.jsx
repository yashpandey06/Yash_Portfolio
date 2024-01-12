import { useState } from "react";
import { NavLink } from "react-router-dom";
import ExpressJs from "./SkillsSvgs/Backend/ExpressJs";
import FastApi from "./SkillsSvgs/Backend/FastApi";
import Firebase from "./SkillsSvgs/Backend/Firebase";
import NodeJs from "./SkillsSvgs/Backend/NodeJs";
import MongoDB from "./SkillsSvgs/Database/MongoDB";
import MySql from "./SkillsSvgs/Database/MySql";
import MaterialUI from "./SkillsSvgs/Frontend/MaterialUI";
import ReactLogo from "./SkillsSvgs/Frontend/ReactLogo";
import Tailwind from "./SkillsSvgs/Frontend/Tailwind";
import Java from "./SkillsSvgs/Programming/Java";
import Js from "./SkillsSvgs/Programming/Js";
import Python from "./SkillsSvgs/Programming/Python";
import Ts from "./SkillsSvgs/Programming/Ts";
import Docker from "./SkillsSvgs/Tools/Docker";
import Git from "./SkillsSvgs/Tools/Git";
import Github from "./SkillsSvgs/Tools/Github";
import PostMan from "./SkillsSvgs/Tools/PostMan";
import Figma from "./SkillsSvgs/Tools/Figma";
import Canva from "./SkillsSvgs/Tools/Canva";

const Skills = () => {
  const [skills] = useState([
    {
      category: "Languages",
      skills: [
        { id: 1, item: <Ts /> },
        { id: 2, item: <Js /> },
        { id: 3, item: <Python /> },
        { id: 4, item: <Java /> },
      ],
    },
    {
      category: "Tools",
      skills: [
        { id: 5, item: <PostMan /> },
        { id: 6, item: <Docker /> },
        { id: 7, item: <Git /> },
        { id: 8, item: <Github /> },
        { id: 9, item: <Figma /> },
        { id: 10, item: <Canva /> },
      ],
    },
    {
      category: "Database",
      skills: [
        { id: 9, item: <MongoDB /> },
        { id: 10, item: <MySql /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        { id: 11, item: <ExpressJs /> },
        { id: 12, item: <NodeJs /> },
        { id: 13, item: <Firebase /> },
        { id: 14, item: <FastApi /> },
      ],
    },
    {
      category: "Frontend",
      skills: [
        { id: 15, item: <ReactLogo /> },
        { id: 16, item: <Tailwind /> },
        { id: 17, item: <MaterialUI /> },
      ],
    },
  ]);

  return (
    <div className="w-full h-full grid grid-rows-4 place-items-center gap-10">
      {skills.map((category) => (
        <NavLink
          key={category.id}
          to={`/skills/${category.category}`}
          className="font-medium text-2xl bg-gradient-to-b from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text"
        >
          <div className="flex flex-col gap-5 items-center my-2">
            <div className="text-3xl font-bold">{category.category}</div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Skills;
