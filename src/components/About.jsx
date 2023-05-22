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

                <p className="mt-20 text-2xl md:text-4xl">
                    {/* I am <NavLink to="/" className="text-yellow-200 font-medium"> Yash Pandey</NavLink> */}
                    {
                        <Typewriter
                            options={{
                                strings: ["  I am currently exploring MERN stack."],
                                delay: 20,
                                deleteSpeed: 30,
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    }


                </p>
                <div className="Line-break "></div>
                <p className="text-2xl  text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quisquam quibusdam cumque assumenda sapiente maiores amet odio nobis dolores beatae.
                </p>
                <SocialLinks />
            </div>
        </div>
    )
}

export default About