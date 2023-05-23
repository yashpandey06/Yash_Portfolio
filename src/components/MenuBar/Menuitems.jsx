/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const Menuitems = ({ state, handleClick }) => {
  return (
    <div>
      {state ? (
        <ul className={`flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8  duration-200 `}>
          <button onClick={handleClick} className="absolute top-5 right-3 m-2">
            <CloseIcon />
          </button>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Menuitems;
