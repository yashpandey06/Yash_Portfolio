/* eslint-disable react/prop-types */
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import Menuitems from "../MenuBar/Menuitems";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';


// eslint-disable-next-line no-unused-vars
const Hamburger = ({ navitems }) => {
  const [state, setState] = useState(false);

  const handleClick = () => {
    setState((prevState) => !prevState);
    console.log(state)
  };

  return (
    <>

      {state ?

        <Menuitems state={state} handleClick={handleClick}/> :
        <button onClick={handleClick} className="duration-200">
          <MenuOpenIcon />
        </button>
      }

    </>




  );
};

export default Hamburger;
