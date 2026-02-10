import Navbar from "../components/Navbar";
import Image from "../components/Image";


export default function Contact() {
  return (
    <>
      <section id="contactPage">
        <Navbar/>
        <Image src="DSC_7856_bw-1-sharp-web.jpg"/>
        <div className="dividerWrapper">
          <div className="divider"><p><br/></p></div>
        </div>
        <div id="description">
          <p>Jay Kammen is a graphic designer, photographer, and recovering architect. He is often found frolicking amongst the many shades between light/dark, nature/culture, head/heart, western/eastern, music/silence, human/animal, digital/analog, words/gestures, desert/dessert...</p>
          <p id="noPadding"><br></br></p>
        </div>
        {/* <section id="contactWrapper">  centers on the page */}
          <div id="contactInfo">
            <div className="contactColumn">
              <h2><span>VIRTUAL</span></h2>
              <p><br></br></p>
              <p><a href="mailto:jay@kammen.com" data-link-type="mailto" data-link-value="jay@kammen.com">jay@kammen.com</a></p>
              <p>insta <a href="https://www.instagram.com/jaykammen/" data-link-type="external" data-link-value="https://www.instagram.com/jaykammen/" target="_blank">@jaykammen</a></p>
            </div>
            <div className="contactColumn">
              <h2><span>ACTUAL</span></h2>
              <p></p>
            </div>
            <div className="contactColumn">
              <h2><span>MOBILE</span></h2>
            </div>
          </div>

          <div id="footerText"></div>
        {/* </section> */}
      </section>
    </>
  )
}