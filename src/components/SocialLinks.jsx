
import { NavLink } from "react-router-dom"
import { RxLinkedinLogo } from "react-icons/rx";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";


const SocialLinks = () => {
    return (
        <div className="flex flex-row gap-4 items-center">
            <NavLink className="hover:scale-x-105 duration-200"><RxLinkedinLogo size={30} /></NavLink>
            <NavLink className="hover:scale-x-105 duration-200"><BsGithub size={30} /></NavLink>
            <NavLink className="hover:scale-x-105 duration-200"><BsTwitter size={30} /></NavLink>
            {/* <BsFillPersonLinesFill /> */}
        </div>
    )
}

export default SocialLinks