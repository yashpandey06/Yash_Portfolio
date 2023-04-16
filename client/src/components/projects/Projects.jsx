import React, { useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "ChatBot WebApp",
      techstack: "ReactJs, NodeJs, ExpressJs, Open AI API , Tailwind CSS",
      explain: "",
      codelink: <a href="https://github.com/yashpandey06/ChatBot">code</a>,
      deploylink: <a href="">link</a>,
    },
    {
      id: 2,
      name: "TalkBot ",
      techstack: "Python,Open AI API, Pyttx3 Library",
      explain: "",
      codelink: <a href="#">code</a>,
      deploylink: <a href="#">link</a>,
    },
    {
      id: 3,
      name: "Crypto WebApp",
      explain: "",
      techstack: "ReactJs , CoinGecko API, Node Js, Tailwind CSS",
      codelink: <a href="https://github.com/yashpandey06/Crypto_App">code</a>,
      deploylink: <a href="https://crypto-app-three-delta.vercel.app/">link</a>,
    },
    {
      id: 4,
      name: "Portfolio",
      explain: "",
      techstack: "ReactJs , ExpressJs, Node Js, MongoDB,Tailwind CSS",
      codelink: <a href="https://github.com/yashpandey06/Crypto_App">code</a>,
      deploylink: <a href="https://crypto-app-three-delta.vercel.app/">link</a>,
    },
  ]);

  return (
    <div className=" w-screen h-screen mt-8 p-6 md:pb-12 lg:pb-16">
      <div className=" w-full h-full  text-white mt-8 lg:grid-cols-3 grid grid-cols-1 gap-5   md:grid-cols-2 md:gap-4 px-16 pt-16 ">
        {projects.map((item) => {
          <div
            key={item.id}
            className=" bg-white duration-150 p-6 text-black shadow-xl hover:shadow-md flex flex-col justify-between "
          >
            <h1 className="text-3xl  mt-8">{item.name}</h1>
            <h2 className="text-2xl ">{item.explain}</h2>
            <h1 className="text-md ">
              Tech Stack- <span>{item.techstack}</span>
            </h1>
            {console.log(item)}
            <div className="w-full flex justify-around">
              <button>{item.codelink}</button>
              <button>{item.deploylink}</button>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Projects;
