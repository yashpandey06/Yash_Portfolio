/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';

const Menuitems = ({ state, handleClick }) => {
  return (
    <div>
      {state ? (
        <ul className={`flex-col  flex items-center fixed inset-0 left-1/4 uppercase bg-black/30 backdrop-blur-md gap-8 justify-center p-8  duration-200 `}>
          <button onClick={handleClick} className="absolute top-5 right-3 m-2">
            <CloseIcon />
          </button>
          <li><Link className="text-yellow-200" to='/'>Home</Link></li>
          <li><Link className="text-yellow-200" to='/about'>About</Link></li>
          <li><Link className="text-yellow-200" to='/contact'>Contact</Link></li>
          <li><Link className="text-yellow-200" to='/projects'>Projects</Link></li>
          <li><Link  className="text-yellow-200" to='/skills'>Skills</Link></li>
        </ul>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Menuitems;
