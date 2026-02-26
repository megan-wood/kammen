import { Link, useNavigate } from "react-router-dom"; 
import { useEffect } from "react";
import Image from "../components/Image";


export default function Splash() {
  const navigate = useNavigate(); 

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 1000);  // 1 second

    return () => clearTimeout(timer); 
  }, [navigate]);
  
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