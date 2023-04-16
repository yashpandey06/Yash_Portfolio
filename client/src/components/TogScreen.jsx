import React from "react";
import { useState } from "react";
import Hamburger from "hamburger-react";

const TogScreen = ({ tog, setTog, handelTog }) => {
  const [isOpen, setOpen] = useState(false);
  function handelHamburgerState() {
    handelTog();
  }
  const [links, setLink] = useState([
    {
      id: 1,
      item: "About",
    },
    {
      id: 2,
      item: "Experience",
    },
    {
      id: 3,
      item: "Contact",
    },
    
  ]);
  return (
    <div className="fixed  h-24 bg-gradient-to-l from-red-100 via-rose-300 to-red-200 w-screen   shadow-md">
      <nav className="flex justify-between items p-8 mx-4">
        <section onClick={handelHamburgerState}>
          <Hamburger toggled={!isOpen} toggle={setOpen} />
        </section>
        <div className="w-screen h-screen flex justify-center items-center  duration-200">
          <ul className="">
            {links.map((link) => (
              <li
                className="lg:mx-8 hover:mb-2  text-2xl my-8 bg-yellow-400 text-black py-2  px-8 rounded-full border-black border-2 lg:hover:border-b-8 hover:border-b-4 duration-300 lg:duration-150 "
                key={link.id}
              >
                {link.item}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TogScreen;
