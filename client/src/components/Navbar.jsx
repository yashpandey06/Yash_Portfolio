import React from "react";
import { useState } from "react";
import Hamburger from "hamburger-react";
export const Navbar = ({ tog, setTog, handelTog }) => {
  const [isOpen, setOpen] = useState(false);

  function handelHamburgerState() {
    handelTog();
  }
  return (
    <header className=" h-24 bg-gradient-to-b from-amber-100 to-amber-500 w-fullw-full shadow-md ">
      <nav className="flex justify-between items p-8">
        <section className="flex lg:hidden " onClick={handelHamburgerState}>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </section>
        <section className="hidden lg:flex w-14 h-14 ">
          {/* <img src={pic} className="rounded-full" alt="" /> */}
        </section>
        <ul className="lg:flex lg:justify-between hidden">
          <li className="mx-4 hover:mb-2 cursor-pointer text-xl bg-yellow-300 text-black py-2 h-fit w-fit px-4 rounded-full border-black border-2 hover:border-b-8 duration-150  ">
            About
          </li>
          <li className="mx-4 hover:mb-2 cursor-pointer text-xl bg-yellow-300 text-black py-2 h-fit w-fit px-4 rounded-full border-black border-2 hover:border-b-8 duration-150  ">
            Projects
          </li>
          <li className="mx-4 hover:mb-2 cursor-pointer text-xl bg-yellow-300 text-black py-2 h-fit w-fit px-4 rounded-full border-black border-2 hover:border-b-8 duration-150  ">
            Contact
          </li>
        
        </ul>
      </nav>
    </header>
  );
};
