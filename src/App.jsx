// import { Outlet } from "react-router-dom";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import { gsap } from "gsap";

import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
