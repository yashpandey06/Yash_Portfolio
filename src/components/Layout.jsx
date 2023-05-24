import { Outlet } from "react-router"
import Header from "./Header"
import { useState } from "react"
import { createContext } from 'react';


export const Navbaritems = createContext();


const Layout = () => {

  const [navitems] = useState([
    
    {
      id: 2,
      item: "About",
      path:"/about"
    },
    {
      id: 3,
      item: "Contact",
      path:"/contact"
    },
    {
      id: 4,
      item: "Projects",
      path:"/projects"
    },
    {
      id: 5,
      item: "Skills",
      path:"/skills"
    },

  ])
  return (
    <Navbaritems.Provider value={navitems}>
      <Header />
      <Outlet />
    </Navbaritems.Provider>
  )
}

export default Layout