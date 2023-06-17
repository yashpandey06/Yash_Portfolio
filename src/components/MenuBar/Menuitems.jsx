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
        <button onClick={() => handelbar(bar)} className="absolute top-5 right-3 m-2">
          <CloseIcon className="" fontSize="large" />
        </button>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
          className="font-medium text-2xl  lg:text-3xl text-yellow-100"
        >
          <NavLink to="/" onClick={handleNavLinkClick}>
            Home
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
          className="font-medium text-2xl lg:text-3xl  text-yellow-100"
        >
          <NavLink to="/about" onClick={() => navigateTo("/about")}>
            About
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
          className="font-medium text-2xl lg:text-3xl text-yellow-100"
        >
          <NavLink to="/skills" onClick={() => navigateTo("/skills")}>
            Skills
          </NavLink>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
          className="font-medium text-2xl lg:text-3xl text-yellow-100"
        >
          <NavLink to="/projects" onClick={() => navigateTo("/projects")}>
            Project
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

export default Menuitems;
