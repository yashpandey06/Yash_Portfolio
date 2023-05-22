import { Route, Routes } from "react-router"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Project from "./components/Project"
import Layout from "./components/Layout"


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Project />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App