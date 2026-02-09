import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";

export default function Photography() {
  const images = [
    {
      src: "DSCF4839-3.jpg",
      alt: ""
    }, 
    {
      src: "_MG_5160-Edited-2.jpg",
      alt: ""
    }, 
    {
      src: "_MG_3850-1.jpg",
      alt: ""
    },
    {
      src: "_MG_4815-1_2-sharp-web.jpg",
      alt: ""
    }

  ];
  return (
    <>
      <section id="photographyPage">
        <Navbar/>
        <Gallery images={images}/>
      </section>
    </>
  )
}