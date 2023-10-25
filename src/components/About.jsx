import Typewriter from "typewriter-effect";
import SocialLinks from "./SocialLinks";
import { motion } from "framer-motion"

const About = () => {
    return (
        <div
            name="About"
            id="about"
            className="flex grow m-8"
        >
            <div className="max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full gap-6">

                <p className="mt-14 text-4xl md:text-4xl text-white">
                    {/* I am <NavLink to="/" className="text-yellow-200 font-medium"> Yash Pandey</NavLink> */}
                    {
                        <motion.div
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
                            className="bg-gradient-to-b from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text  text-3xl md:text-5xl  "
                        >
                            <Typewriter
                            className=""
                                options={{
                                    
                                    strings: ["Software Development"],
                                    delay: 20,
                                    deleteSpeed: 40,
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </motion.div>

                    }


                </p>
                <div className="Line-break "></div>
                <motion.p
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
                    className="text-2xl md:text-3xl   text-slate-300 "
                >
                    I am currently exploring   <span className="text-yellow-200"> </span> my tech stack that is <span className="bg-gradient-to-b from-blue-500 via-purple-400 to-pink-400 text-transparent bg-clip-text"> MERN </span> , I consider myself a web enthusiast. I am constantly intrigued by the ever-changing technology landscape and strive to stay updated by actively building and learning new things.
                </motion.p>
                <SocialLinks />
            </div>
        </div>
    )
}

export default About