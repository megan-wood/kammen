import { useState } from "react";

interface ImageProps {
  src: string;
  alt?: string;
  onLoad?: () => void;
}

export default function Image( { src, alt = "", onLoad }: ImageProps) {
  const [loaded, setLoaded] = useState(false); 

  const handleLoad = () => {
    setLoaded(true); 
    onLoad?.(); 
  }

  return (
    <>
      <img 
        src={src}
        alt={alt}
        style={{
          // width: "50%",
          // width: "100%",  // fix so each image takes up as much space as it needs, doesn't shrink it
          width: "auto",
          // height: "100%",
          display: "block",
        }}
        onLoad={handleLoad}
      />
    </>
  )
}
