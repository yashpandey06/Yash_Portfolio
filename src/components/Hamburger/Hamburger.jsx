/* eslint-disable react/prop-types */
import { useState } from "react";
import Sidebar from "./Sidebar";


const Hamburger = ({navitems}) => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState((prevState) => !prevState);
  };

  return (
    <div>
      {state ? (
        <Sidebar handleClick={handleClick} navitems={navitems}/>
      ) : (
        <button onClick={handleClick} className="duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Hamburger;
