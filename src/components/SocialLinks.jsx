
import { NavLink } from "react-router-dom"
import { RxLinkedinLogo } from "react-icons/rx";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { useState } from "react";


const SocialLinks = () => {
    const [links] = useState([
        {
            id: 1,
            img: <BsGithub className="" size={30} />,
            link: "https://github.com/yashpandey06",
            name: "Github",
        },
        {
            id: 2,
            img: <BsTwitter className="" size={30} />,
            link: "https://twitter.com/Yashpandey7052?t=LOQ6dVSfuTHG6RWUkDpOLA&s=08",
            name: "Twitter",
        },
        {
            id: 3,
            img: <RxLinkedinLogo className="" size={30} />,
            link: "https://www.linkedin.com/in/yash-pandey-53aa3a21b",
            name: "Linkedln",
        },
        {
            id: 4,
            img: <BsInstagram size={30} />,
            link: "https://instagram.com/__yash_pandey__?igshid=MzNlNGNkZWQ4Mg==",
            name: "Instagram",
        },
    ]);
    return (
        <div className="flex flex-row gap-4 items-center">
            {
                links.map((link) => (
                    <NavLink key={link.id} to={link.link} target="blank" className="hover:scale-x-105 duration-200">{link.img}</NavLink>

                ))
            }

        </div>
    )
}

export default SocialLinks