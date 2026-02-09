import Navbar from "../components/Navbar";
import Image from "../components/Image";


export default function Contact() {
  return (
    <>
      <section id="contactPage">
        <Navbar/>
        <Image src="DSC_7856_bw-1-sharp-web.jpg"/>
        <div className="divider"></div>
        <div id="description">
          <p>Jay Kammen is a graphic designer, photographer, and recovering architect. He is often found frolicking amongst the many shades between light/dark, nature/culture, head/heart, western/eastern, music/silence, human/animal, digital/analog, words/gestures, desert/dessert...</p>
          <p id="noPadding"></p>
        </div>

      </section>
    </>
  )
}