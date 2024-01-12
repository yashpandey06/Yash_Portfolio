/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { NavLink, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const Menuitems = ({ bar, handelbar }) => {
  const navigate = useNavigate();

  const handleNavLinkClick = () => {
    handelbar(bar);
  };

  const navigateTo = (route) => {
    handelbar(bar);
    navigate(route);
  };

  return (
    <div>
      <div className="flex-col font-sans flex items-center fixed inset-0 uppercase bg-black/10 bg-opacity-30 backdrop-blur-md gap-12 justify-center p-8 duration-200">
        <button
          onClick={() => handelbar(bar)}
          className="absolute top-5 right-3 m-2"
        >
          <CloseIcon className="" fontSize="large" />
        </button>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
          className="font-medium text-4xl bg-gradient-to-b from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text"
        >
          <NavLink to="/" onClick={handleNavLinkClick}>
            Home
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
          className="font-medium text-4xl  bg-gradient-to-b from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text"
        >
          <NavLink to="/about" onClick={() => navigateTo("/about")}>
            About
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
          className="font-medium  text-4xl bg-gradient-to-b from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text"
        >
          <NavLink to="/skills" onClick={() => navigateTo("/skills")}>
            Skills
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
          className="font-medium  text-4xl bg-gradient-to-b from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text"
        >
          <NavLink to="/projects" onClick={() => navigateTo("/projects")}>
            Projects
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
          className="font-medium  text-4xl bg-gradient-to-b from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text"
        >
          <NavLink
            target="_blank"
            to="https://drive.google.com/file/d/1tU_CHx6g1bBbrD-cIEmtA192R3DasQ11/view?google_abuse=GOOGLE_ABUSE_EXEMPTION%3DID%3D96c070bad1214aa9:TM%3D1705073251:C%3Dr:IP%3D2401:4900:56b0:e8bd::822:64be-:S%3DAe3JXzwQMQysg1SHLbOE38E;+path%3D/;+domain%3Dgoogle.com;+expires%3DFri,+12-Jan-2024+18:27:31+GMT"
            onClick={() => navigateTo("/")}
          >
            Resume
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

export default Menuitems;
