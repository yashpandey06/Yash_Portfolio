import Typewriter from "typewriter-effect";
import SocialLinks from "./SocialLinks";


const About = () => {
    return (
        <div
            name="About"
            id="about"
            className="flex grow m-8"
        >
            <div className="max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full gap-6">

                <p className="mt-20 text-2xl md:text-4xl text-white">
                    {/* I am <NavLink to="/" className="text-yellow-200 font-medium"> Yash Pandey</NavLink> */}
                    {
                        <Typewriter
                            options={{

                                strings: ["Software Development"],
                                delay: 20,
                                deleteSpeed: 40,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    }


                </p>
                <div className="Line-break "></div>
                <p className="text-2xl text-slate-300 ">
                    I am currently exploring the  <span className="text-yellow-200">MERN</span> and consider myself a web enthusiast. I am constantly intrigued by the ever-changing technology landscape and strive to stay updated by actively building and learning new things.
                </p>
                <SocialLinks />
            </div>
        </div>
    )
}

export default About