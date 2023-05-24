import { NavLink } from "react-router-dom"
import Hamburger from "./Hamburger/Hamburger"
import { Navbaritems } from "./Layout"

import { useContext } from "react"

const Header = () => {
    const navitems = useContext(Navbaritems)

    return (
        <header id="header" className="p-4 ">
            <nav className="flex flex-row justify-between grow items-center my-2 mx-auto bg-fixed ">
                <NavLink className="flex gap-4" to="/">
                    <div className="text-3xl font-medium flex flex-col ">
                        <div>yash</div>
                        {/* <div className=" hidden md:flex text-sm ">(home)</div> */}
                    </div>

                </NavLink>
                <div className="flex     lg:hidden w-6 h-6"><Hamburger navitems={navitems} /></div>
                <ul className="hidden lg:flex justify-center items-center gap-4 ">
                    {
                        navitems.map((item) => {
                            // { console.log(item) }
                            return (
                                <NavLink key={item.id} className=" hover:text-white hover:duration-200  rounded-xl  px-3  py-1 text-xl  hover:shadow-md hover:shadow-slate-500 " to={item.path}>{item.item}</NavLink>
                            )
                        })
                    }

                </ul>
            </nav>
        </header>
    )
}

export default Header