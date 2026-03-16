import { useRef, useEffect, useState } from "react";
import Image from "./Image.tsx";

interface GalleryImage {
  src: string;
  alt?: string; 
  caption?: string; 
}

interface GalleryProps {
  images: GalleryImage[];
}

export default function Gallery({ images }: GalleryProps) {
  const galleryRef = useRef<HTMLDivElement>(null); 
  // const [loaded, setLoaded] = useState(false); 
  const [loadedCount, setLoadedCount] = useState(0); 

  const handleImageLoad = () => {
    setLoadedCount((count) => count + 1);
  }

  // useEffect(() => {
  //   setLoaded(true); 
  // })

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    let animationFrame: number; 
    const speed = 0.5;

    const scroll = () => {
      gallery.scrollLeft += speed;

      if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
        gallery.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll); 

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return; 

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault(); 
        gallery.scrollLeft += e.deltaY * 1.2;
      }
    };

    gallery.addEventListener("wheel", onWheel, { passive: false });
    return () => gallery.removeEventListener("wheel", onWheel);
  }, []); 

  

  
  return (
    <>
      <div className={`gallery ${loadedCount >= 4 ? "slideIn" : ""}`} ref={galleryRef}>
        {/* {images.map((img, index) => ( */}
        {[...images, ...images].map((img, index) => (  // duplicates gallery
          <Image 
            key={index}
            src={img.src}
            alt={img.alt}
            onLoad={handleImageLoad}
            {...(img.caption ? { caption: img.caption } : {})}
          />
        ))}
      </div>
    </>
  );
}