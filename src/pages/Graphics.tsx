import Navbar from "../components/Navbar";
import Gallery from "../components/Gallery";


export default function Graphics() {
  const images = [
    {
      src: "SR-vio-final2.jpg",
      alt: "graphic for 100th anniversary of Santa Rosa Symphony with violin"
    },
    {
      src: "SR-piano-final2.jpg",
      alt: "graphic for 100th anniversary of Santa Rosa Symphony with piano"
    }, 
    {
      src: "RC_LONG53-web.jpg",
      alt: "graphic for farro from Italian Harvest"
    },
    {
      src: "RC_LONG5-web.jpg",
      alt: "graphic for risotto from Italian Harvest"
    },
    {
      src: "RC_LONG55-web.jpg",
      alt: "graphic for fagioli from Italian Harvest"
    },
    {
      src: "Jersey-front-portfolio-web.jpg",
      alt: "graphic for Asti Tour de Vine"
    }
  ];
  
  return (
    <>
      <section id="graphicsPage">
        <Navbar/>
        <Gallery images={images}/>

      </section>
    </>
  )
}