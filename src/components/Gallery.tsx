import { useRef, useEffect } from "react";
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
      <div className="gallery" ref={galleryRef}>
        {images.map((img, index) => (
          <Image 
            key={index}
            src={img.src}
            alt={img.alt}
            {...(img.caption ? { caption: img.caption } : {})}
          />
        ))}
      </div>
    </>
  );
}