import React from "react";
import Typewriter from "typewriter-effect";
export const About = () => {
  return (
    <div className="w-full h-screen  md:p-8 lg:p-8">
      <div className=" flex flex-col justify-center items w-full  items-start px-16 pt-16">
        <div className="Intro  md:flex lg:flex md:text-xl text-lg font-medium">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: ["Hy, I am Yash Pandey"],
            }}
          />
        </div>
        <div className="name text-2xl md:text-3xl lg:text-6xl my-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum porro,
        </div>
        <div className="about_sec text-xl md:text-2xl  lg:w-8/12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum porro,
          in impedit eveniet omnis culpa! Consequuntur, minima qui!
        </div>
        <button className="mt-6 hover:mb-2  text-xl bg-yellow-300 text-black py-2 h-fit w-fit px-14 rounded-full border-black border-2 hover:border-b-8 duration-150 ">
        <a href="">
          Resume
        </a>
        </button>
      </div>
    </div>
  );
};
