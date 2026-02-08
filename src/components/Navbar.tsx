import { NavLink } from "react-router-dom";
import Image from "./Image";


export default function Navbar() {
  return (
    <>
      <nav>
        <NavLink to="/home" id="navbarLogo" className={({ isActive }) => isActive ? "active-link" : ""}>
          <Image src="Nav-LOGO-2025-70.png" alt="Jay Kammen logo"/>
        </NavLink>
        <ul>
          {/* <li><Link to="/graphics"/>GRAPHICS</li> */}
          {/* <li><Link to="/architecture"/>ARCHITECTURE</li>
          <li><Link to="/photography"/>PHOTOGRAPHY</li>
          <li><Link to="/contact"/>CONTACT</li> */}
          <li><NavLink to="/graphics" className={({ isActive }) => isActive ? "active-link" : ""}>GRAPHICS</NavLink></li>
          <li><NavLink to="/architecture" className={({ isActive }) => isActive ? "active-link" : ""}>ARCHITECTURE</NavLink></li>
          <li><NavLink to="/photography" className={({ isActive }) => isActive ? "active-link" : ""}>PHOTOGRAPHY</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>CONTACT</NavLink></li>
        </ul>
      </nav>
    </>
  )
}