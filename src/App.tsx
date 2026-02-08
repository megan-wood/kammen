import { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom"; 
import Logo from "./pages/Logo";
import Home from "./pages/Home";
import Graphics from "./pages/Graphics";
import Architecture from "./pages/Architecture";
import Photography from "./pages/Photography";
import Contact from "./pages/Contact";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Image from "./components/Image";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Define routes */}
      <Routes>
        <Route path="/" element={<Logo/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/graphics" element={<Graphics/>}/>
        <Route path="/architecture" element={<Architecture/>}/>
        <Route path="/photography" element={<Photography/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      {/* <Link to="/Home"><Image src="LOGO_2021_splash_small_copy.png" alt="Logo for Jay Kammen"/></Link> */}
      {/* gallery component?  */}
      {/* <div className="gallery">
        <Image src="SR-vio-final2.jpg" alt="graphic for 100th anniversary of Santa Rosa Symphony with violin"/>
        <Image src="SR-piano-final2.jpg" alt="graphic for 100th anniversary of Santa Rosa Symphony with piano"/>
        <Image src="RC_LONG53-web.jpg" alt="graphic for farro from Italian Harvest"/>
        <Image src="RC_LONG53-web.jpg" alt="graphic for farro from Italian Harvest"/>
        <Image src="RC_LONG53-web.jpg" alt="graphic for farro from Italian Harvest"/>

      </div> */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App;
