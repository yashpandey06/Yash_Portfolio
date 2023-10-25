import { Route, Routes } from "react-router"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Project from "./components/Project"
import Layout from "./components/Layout"
import { useEffect, useState } from "react"
import Loader from "./components/Loader/Loader"

import Skills from "./components/Skills"

const App = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
    }, 7000)
  }, []);


  return (



    <>
      {
        load ? <Loader load={load} setLoad={setLoad} /> :
          <>
            <div className="App">
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
  )
}

export default App