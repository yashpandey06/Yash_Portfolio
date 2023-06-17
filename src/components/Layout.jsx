import { Outlet } from "react-router"
import Header from "./Header"
import { useState } from "react"
import { createContext } from 'react';
import Menuitems from "../components/MenuBar/Menuitems"


export const Navbaritems = createContext();


const Layout = () => {

  const [navitems] = useState([

    {
      id: 2,
      item: "About",
      path: "/about"
    },

    {
      id: 2,
      item: "Projects",
      path: "/projects"
    },
    {
      id: 4,
      item: "Skills",
      path: "/skills"
    },
    {
      id: 5,
      item: "Contact",
      path: "/contact"
    },

  ])
  const [bar, setBar] = useState(false);

  function handelbar() {
    setBar(prev => !prev);
    console.log(bar)
  }
  return (
    <Navbaritems.Provider value={navitems}>
      {
        bar ? <Menuitems bar={bar} handelbar={handelbar}/> : <>
          <Header bar={bar} handelbar={handelbar} />
          <Outlet />
        </>

      }

    </Navbaritems.Provider>
  )
}

export default Layout