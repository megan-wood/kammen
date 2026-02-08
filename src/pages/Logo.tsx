import { Link } from "react-router-dom"; 
import Image from "../components/Image";


export default function Logo() {
  return (
    <>
      <div id="splashLogo">
        <Link to="/Home">
          {/* <div id="splashLogo"> */}
            <Image src="LOGO_2021_splash_small_copy.png" alt="Logo for Jay Kammen"/>
          {/* </div> */}
        </Link>
      </div>
    </>
  )
}