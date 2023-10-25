/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
export default function MediaCard({ projects }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
      className="grid grid-cols-1 place-items-center md:place-items-stretch md:grid-cols-2 lg:grid-cols-3 w-full gap-12 p-8 h-full overflow-x-hidden "
    >
      {projects.map((project) => (
        <>
          <div className="bg-gradient-to-b from-blue-500 via-purple-400 to-pink-400  p-[.08rem] rounded-[1.5rem]">
            <div key={project.id} className="flex flex-col justify-between   bg-black rounded-[1rem] ">
              <div className="  ">
                <div className="flex flex-col justify-between  h-72 overflow-y-auto p-4">
                  <div className="text-center text-3xl py-1 shadow-md shadow-gray-600 ">
                    {project.name}
                  </div>
                  <div className="flex flex-col h-full justify-between mt-8 ">
                    <div className="md:text-xl text-lg">{project.explain}</div>
                  </div>
                  <div className="flex justify-between items-center ">
                    <button className="  duration-200 rounded-xl text-white hover:bg-white hover:text-black border  border-gray-500 font-bold p-2 px-8">
                      {project.repo}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </motion.div>
  );
}
