import React, { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import Social from "./components/Social";
import TogScreen from "./components/TogScreen";
import { About } from "./components/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/Footer/Contact";
import Quoutes from "./components/Quoutes";
import axios from "axios";

const App = () => {
  const [qoutes, setQoutes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000").then((response) => {
      // console.log(response.data);
      const data = response.data;
      for (var i = 0; i < 40; i++) {
        console.log(data[i]);
        qoutes.push(data[i]);
      }
      
    });
  }, []);
  const [tog, setTog] = useState(false);

  function handelTog() {
    setTog(!tog);
  }
  return (
    <div className="text-black w-screen h-screen">
      {
        // togg true render tog screen else render everything
        tog ? (
          <div className="">
            <TogScreen tog={tog} setTog={setTog} handelTog={handelTog} />
          </div>
        ) : (
          <>
            <Navbar tog={tog} setTog={setTog} handelTog={handelTog} />
            <Social />
            <About />
            <Projects />
            <Quoutes qoutes={qoutes} />
            <Contact />
          </>
        )
      }
    </div>
  );
};

export default App;
