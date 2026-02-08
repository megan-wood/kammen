import { Link } from "react-router-dom";
import Image from "./Image";


export default function Navbar() {
  return (
    <>
      <nav>
        <Image src="Nav-LOGO-2025-70.png" alt="Jay Kammen logo"/>
        <ul>
          <li><Link to="/graphics"/>GRAPHICS</li>
          <li><Link to="/architecture"/>ARCHITECTURE</li>
          <li><Link to="/photography"/>PHOTOGRAPHY</li>
          <li><Link to="/contact"/>CONTACT</li>
        </ul>
      </nav>
    </>
  )
}