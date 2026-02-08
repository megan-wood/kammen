
import Image from "./Image.tsx";

interface GalleryProps {
  images: typeof Image[]
}

export default function Gallery({ images }: GalleryProps) {
  return (
    <>
      <div className="gallery">
        <Image src="SR-vio-final2.jpg" alt="graphic for 100th anniversary of Santa Rosa Symphony with violin"/>
        <Image src="SR-piano-final2.jpg" alt="graphic for 100th anniversary of Santa Rosa Symphony with piano"/>
        <Image src="RC_LONG53-web.jpg" alt="graphic for farro from Italian Harvest"/>
        <Image src="RC_LONG53-web.jpg" alt="graphic for farro from Italian Harvest"/>
        <Image src="RC_LONG53-web.jpg" alt="graphic for farro from Italian Harvest"/>
      </div>
    </>
  )
}