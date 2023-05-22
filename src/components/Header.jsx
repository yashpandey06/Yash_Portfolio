import { NavLink } from "react-router-dom"
import Hamburger from "./Hamburger/Hamburger"
const Header = () => {
    return (
        <header id="header" className="p-4">
            <nav className="flex flex-row justify-between grow items-center my-2 mx-auto bg-fixed ">
                <NavLink to="/">
                    <div className="text-2xl flex">
                        yash
                    </div>
                </NavLink>
                <div className="flex     lg:hidden w-6 h-6"><Hamburger  /></div>
                <ul className="hidden lg:flex justify-center items-center gap-4 ">
                    <NavLink className=" hover:text-white hover:duration-200  rounded-xl  px-3  py-1 text-xl  hover:shadow-md hover:shadow-slate-500 "  to="/">Home</NavLink>
                    <NavLink className=" hover:text-white hover:duration-200  rounded-xl  px-3  py-1 text-xl  hover:shadow-md hover:shadow-slate-500  "  to="/about">About</NavLink>
                    <NavLink  className=" hover:text-white hover:duration-200  rounded-xl px-3  py-1  text-xl  hover:shadow-md hover:shadow-slate-500  " to="/contact">Contact</NavLink>
                    <NavLink className=" hover:text-white hover:duration-200  rounded-xl px-3  py-1 text-xl   hover:shadow-md hover:shadow-slate-500 "  to="/projects">Projects</NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Header