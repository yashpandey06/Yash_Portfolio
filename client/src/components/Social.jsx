import React from "react";
import { useState } from "react";
import { RxLinkedinLogo } from "react-icons/rx";
import { BsTwitter } from "react-icons/bs";
import { ImDribbble } from "react-icons/im";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Social = () => {
  const [social, setSocial] = useState([
    {
      id: 1,
      item: (
        <a
          href="https://www.linkedin.com/in/yash-pandey-53aa3a21b/"
          className=" flex justify-between items-center w-full "
          target="_blank"
        >
          <>
            LinkedIn
            <RxLinkedinLogo className="" size={30} />
          </>
        </a>
      ),
    },

    {
      id: 2,
      item: (
        <a
          href="https://twitter.com/Yashpandey7052"
          className=" flex justify-between items-center w-full "
          target="_blank"
        >
          <>
            Twitter
            <BsTwitter className="" size={30} />
          </>
        </a>
      ),
    },

    {
      id: 3,
      item: (
        <a
          href="https://github.com/yashpandey06"
          className=" flex justify-between items-center w-full "
          target="_blank"
        >
          <>
            Github
            <BsGithub className="" size={30} />
          </>
        </a>
      ),
    },

    {
      id: 4,
      item: (
        <a
          href="/resume.pdf"
          //   download="true"
          className=" flex justify-between items-center w-full "
          target="_blank"
        >
          <>
            Resume
            <BsFillPersonLinesFill className="" size={30} />
          </>
        </a>
      ),
    },
   
  ]);
  return (
    <div className="md:flex md:flex-col md:top-[35%] md:left-0 md:fixed text-black h-fit hidden">
      <ul>
        {social.map((link) => (
          <li
            className="bg-yellow-300 flex justify-between w-40 h-14 items-center px-4
                    ml-[-100px]  hover:rounded-md duration-300 hover:ml-[-10px] shadow-md
                   "
            key={link.id}
          >
            {link.item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
