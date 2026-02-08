
import Navbar from "../components/Navbar";
import Image from "../components/Image";
import Gallery from "../components/Gallery";

export default function Home() {
  const images = [
    {
      src: "SR-vio-final2.jpg",
      alt: "graphic for 100th anniversary of Santa Rosa Symphony with violin"
    },
    {
      src: "RC_LONG53-web.jpg",
      alt: "graphic for risotto from Italian Harvest"
    },
    {
      src: "Jersey-front-portfolio-web.jpg",
      alt: "graphic for Asti Tour de Vine"
    },
    {
      src: "final_3_violin_x-web.jpg",
      alt: "graphic for LHASA Concert with violin"
    },
    {
      src: "MM_ALT_postcard_front_2_Artboard_4_copy-web.jpg",
      alt: "graphic for market match"
    }, 
    {
      src: "Final_Snellen_RATS_hirez-art.png", 
      alt: "graphic for Year of the Rat 2020"
    }
  ]


  return (
    <>
      <section id="homePage">
        <Navbar/>
        <Gallery images={images}/>
        {/* <div className="galleryWrapper"> */}
          {/* <div className="gallery">
            <Image src="SR-vio-final2.jpg" alt="graphic for 100th anniversary of Santa Rosa Symphony with violin"/>
            <Image src="SR-piano-final2.jpg" alt="graphic for 100th anniversary of Santa Rosa Symphony with piano"/>
            <Image src="RC_LONG53-web.jpg" alt="graphic for risotto from Italian Harvest"/>
            <Image src="RC_LONG53-web.jpg" alt="graphic for farro from Italian Harvest"/>
            <Image src="RC_LONG53-web.jpg" alt="graphic for farro from Italian Harvest"/>
          </div> */}
        {/* </div> */}
      </section>
    </>
  );
}