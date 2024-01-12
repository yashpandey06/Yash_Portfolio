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
    {
      id:6,
      item:"Resume",
      path:"https://drive.google.com/file/d/1tU_CHx6g1bBbrD-cIEmtA192R3DasQ11/view?google_abuse=GOOGLE_ABUSE_EXEMPTION%3DID%3D96c070bad1214aa9:TM%3D1705073251:C%3Dr:IP%3D2401:4900:56b0:e8bd::822:64be-:S%3DAe3JXzwQMQysg1SHLbOE38E;+path%3D/;+domain%3Dgoogle.com;+expires%3DFri,+12-Jan-2024+18:27:31+GMT&usp=embed_facebook&usp=embed_facebook"
    }

  ])
  const [bar, setBar] = useState(false);

  function handelbar() {
    setBar(prev => !prev);
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