

interface ImageProps {
  src: string;
  alt?: string;
}

export default function Image( { src, alt = "" }: ImageProps) {

  return (
    <>
      <img 
        src={src}
        alt={alt}
        style={{
          // width: "50%",
          width: "25%",  // fix so each image takes up as much space as it needs, doesn't shrink it
          // height: "100%",
          display: "block",
        }}
      />
    </>
  )
}
