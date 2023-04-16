import React from "react";
import Typewriter from "typewriter-effect";

const Quoutes = ({ qoutes }) => {
  var qoutes_text = [];
  var qoutes_author = [];

  qoutes_text = qoutes.map((item) => {
    console.log("inside");
    return item.text;
  });
  {
    qoutes_author = qoutes.map((item) => {
      return item.author;
    });
  }
  const arr = ["yash"];
  // console.log(qoutes_text)
  // console.log(qoutes_author)
  return (
    <div className="p-4 md:p-8 lg:p-8 font-cursive text-xl">
      <div className="flex flex-col justify-center items w-full  items-start px-16 pt-16">
        <h1 className=" my-4 font-bold lg:text-3xl md:text-2xl text-lg">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 80,
              strings: qoutes_text,
            }}
          />
        </h1>
      </div>
    </div>
  );
};

export default Quoutes;
