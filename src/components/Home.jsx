
import SocialLinks from "../components/SocialLinks"
import { NavLink } from "react-router-dom"
import Atropos from 'atropos/react';
const Home = () => {

    return (
        

            <div
                name="Home"
                className="home flex grow m-8 "
            >

                <div className="max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full gap-6">


                    <span className="mt-20 text-4xl flex flex-col gap-4 md:flex-row">
                        <span>Bonjour !</span>
                        <span>
                            I am <NavLink to="/" className="text-yellow-200 font-medium"> Yash Pandey</NavLink>  </span>
                    </span>
                    <div className="Line-break "></div>
                    <p className=" text-xl md:text-2xl  text-slate-300">
                        Working with my hands to make magic happen on the internet. View my <NavLink to="/projects" className="text-yellow-200 font-medium">Projects</NavLink> , Resume, <NavLink className="text-yellow-200 font-medium" to="/contact" >Contact Me</NavLink> , or send me an email at <NavLink className="text-yellow-200 font-medium" to="https://mail.google.com/mail/">pandeyyash7052@gmail.com</NavLink>.
                    </p>
                    <h1 className="text-md">Know more about me </h1>
                    
                    <SocialLinks />
                </div>
            </div>
        
    )
}

export default Home