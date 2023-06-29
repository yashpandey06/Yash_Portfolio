
import { NavLink } from "react-router-dom"
import { RxLinkedinLogo } from "react-icons/rx";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion"

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
        {
            id: 5,
            img: <BsMedium size={30} />,
            link: "https://medium.com/@pandeyyash7052",
            name: "Medium",
        },
    ]);
    return (
        <motion.div className="flex flex-row gap-5 md:gap-6 items-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 70, duration: 0.5 }}
        >

            {
                links.map((link) => (

                    <NavLink key={link.id} to={link.link} target="blank" className="hover:scale-x-105 duration-200">{link.img}</NavLink>

                ))
            }

        </motion.div>
    )
}

export default SocialLinks