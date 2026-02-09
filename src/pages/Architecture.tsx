import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";

export default function Architecture() {
  const images = [
    {
      src: "L1010334_edited-sharp-web.jpg",
      alt: ""
    },
    {
      src: "MCDS-3-sharp-web.jpg",
      alt: ""
    }, 
    {
      src: "IMG_4566_ad-mono2web.jpg",
      alt: ""
    }, 
    {
      src: "IMG_4658_adj-sharp-web.jpg",
      alt: ""
    }, 
    {
      src: "bitare2-sharp-web.jpg",
      alt: ""
    }
  ];

  return (
    <>
      <section id="architecturePage">
        <Navbar/>
        <Gallery images={images}/>
      </section>
    </>
  )
}