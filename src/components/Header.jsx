/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
const Header = ({bar,handelbar}) => {


    return (
        <header id="header" className="p-4 ">
            <nav className="flex flex-row justify-between grow items-center my-2 mx-auto bg-fixed ">
                <NavLink className="flex gap-4" to="/">
                    <div className="text-3xl font-medium flex flex-col ">
                        <div className="font-extrabold">Yash</div>
                        {/* <div className=" hidden md:flex text-sm ">(home)</div> */}
                    </div>
                </NavLink>
                <button className="p-1" onClick={() => {
                    handelbar(bar)
                }}>
                    <MenuOpenIcon fontSize="large" />
                </button>
                {/* <ul className="hidden lg:flex justify-center items-center gap-4 ">
                    {
                        navitems.map((item) => {
                            // { console.log(item) }
                            return (
                                <NavLink key={item.id} className=" hover:text-white hover:duration-200  rounded-xl  px-3  py-1 text-xl  hover:shadow-md hover:shadow-slate-500 " to={item.path}>{item.item}</NavLink>
                            )
                        })
                    }
                </ul> */}
            </nav>
        </header>
    )
}

export default Header