import SocialLinks from "../components/SocialLinks";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div name="Home" className="home flex grow m-8 ">
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full gap-6 overflow-hidden">
        <motion.span
          className="mt-20 text-4xl flex flex-col gap-4 md:flex-row"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
        >
          <span>Bonjour!</span>
          <span>
            I am{" "}
            <NavLink to="/" className="text-yellow-200 font-medium">
              Yash Pandey
            </NavLink>{" "}
          </span>
        </motion.span>
        <div className="Line-break "></div>
        <motion.p
          className="text-xl md:text-2xl  text-slate-300"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
        >
          Working with my hands to make magic happen on the internet. View my{" "}
          <NavLink to="/projects" className="text-yellow-200 font-medium">
            Projects
          </NavLink>{" "}
          , Resume,{" "}
          <NavLink className="text-yellow-200 font-medium" to="/contact">
            Contact Me
          </NavLink>{" "}
          , or send me an email at{" "}
          <NavLink
            className="text-yellow-200 font-medium"
            to="https://mail.google.com/mail/"
          >
            pandeyyash7052@gmail.com
          </NavLink>
          .
        </motion.p>
        <NavLink to="/about">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
            className="hover:text-yellow-200 text-md flex items-center gap-5 border-2 w-fit p-2"
          >
            <p>Know More</p>
            <div className="animate-spin duration-200 hover:animate-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                />
              </svg>
            </div>
          </motion.div>
        </NavLink>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
        >
          <SocialLinks />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
