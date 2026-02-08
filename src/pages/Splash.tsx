import { Link } from "react-router-dom"; 
import Image from "../components/Image";


export default function Splash() {
  return (
    <>
    <section id="splashPage">
        <div id="splashLogo">
          <Link to="/home">
            {/* <div id="splashLogo"> */}
              <Image src="LOGO_2021_splash_small_copy.png" alt="Logo for Jay Kammen"/>
            {/* </div> */}
          </Link>
        </div>
      </section>
    </>
  )
}