import { Route, Routes } from "react-router"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Project from "./components/Project"
import Layout from "./components/Layout"
import { useEffect, useState } from "react"
import Loader from "./components/Loader/Loader"
import { createContext } from "react"
import Skills from "./components/Skills"



export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
    }, 5000)
  }, []);
  useEffect(() => {
    const curtheme = window.localStorage.getItem("pagetheme")
    setTheme(JSON.parse(curtheme))
    
  }, []);

  useEffect(() => {
    window.localStorage.setItem("pagetheme", JSON.stringify(theme));
   
  }, [theme]);


  return (
    <ThemeContext.Provider value={theme}>


  
    <>
      {
        load ? <Loader load={load} setLoad={setLoad} /> :
          <>
            <div className="App  ">
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/projects" element={<Project />} />
                  <Route path="/skills" element={<Skills />} />
                </Route>
              </Routes>
            </div>
          </>
      }
    </>
    </ThemeContext.Provider>
  )
}

export default App