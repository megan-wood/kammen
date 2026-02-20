import Navbar from "../components/Navbar";
import Image from "../components/Image";
import { useInView } from "../useInView";
import { useState } from "react"


export default function Contact() {
  const { ref, isInView } = useInView<HTMLDivElement>({
    threshold: 0.4,
  });
  const [ imageLoaded, setImageLoaded ] = useState(false); 

  return (
    <>
      <section id="contactPage">
        <Navbar/>
        <div id="contactImage" className="fadeIn">
          <Image src="DSC_7856_bw-1-sharp-web.jpg" onLoad={() => setImageLoaded(true)}/> 
        </div>
        <div className="dividerWrapper">
          <div className="divider"><p><br/></p></div>
        </div>
        <div id="description" className="fadeIn">
          <p>Jay Kammen is a graphic designer, photographer, and recovering architect. He is often found frolicking amongst the many shades between light/dark, nature/culture, head/heart, western/eastern, music/silence, human/animal, digital/analog, words/gestures, desert/dessert...</p>
          <p id="noPadding"><br></br></p>
        </div>
        {/* <section id="contactWrapper">  centers on the page */}
          {/* <div id="contactInfo" ref={ref} className={`contactSection ${isInView ? "visible" : ""}`}> */}
          <div id="contactInfo" ref={ref} className={`contactSection ${ isInView && imageLoaded ? "visible" : ""}`}>
            <div className="contactColumn">
              <h2><span>VIRTUAL</span></h2>
              <p><br></br></p>
              <p><a href="mailto:jay@kammen.com" data-link-type="mailto" data-link-value="jay@kammen.com">jay@kammen.com</a></p>
              <p>insta <a href="https://www.instagram.com/jaykammen/" data-link-type="external" data-link-value="https://www.instagram.com/jaykammen/" target="_blank">@jaykammen</a></p>
            </div>
            <div className="contactColumn">
              <h2><span>ACTUAL</span></h2>
              <p><br></br></p>
              <p>Jay Kammen</p>
              <p>255 Steiner #504</p>
              <p>San Francisco, CA</p>
              <p>94117 USA</p>
            </div>
            <div className="contactColumn">
              <h2><span>MOBILE</span></h2>
              <p><br/></p>
              <p>415-252-0200</p>
            </div>
          </div>

          <div id="footerText"></div>
        {/* </section> */}
      </section>
    </>
  )
}