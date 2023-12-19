/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
const Header = ({ bar, handelbar }) => {


    return (
        <header id="header" className="p-4 ">
            <nav className="flex flex-row justify-between grow items-center my-2 mx-auto bg-fixed ">

                <NavLink className="flex gap-4" to="/">
                    <div className="text-3xl font-medium flex flex-row gap-5 ">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-b from-blue-500 via-purple-400 to-pink-400"></div>
                        <div className="w-5 h-5 rounded-full bg-gradient-to-b from-blue-500 via-purple-400 to-pink-400"></div>
                    </div>
                </NavLink>

                <button className="p-1" onClick={() => {
                    handelbar(bar)
                }}>
                    <MenuOpenIcon fontSize="large" />
                </button>

            </nav>
        </header>
    )
}

export default Header