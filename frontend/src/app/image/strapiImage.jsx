import Image from "next/image";
import { getStrapiMedia } from "../../utils/media";

function StrapiImage({ src, alt, height, width }) {
  if (!src) return null;
  const imageUrl = getStrapiMedia(src);
  console.log(imageUrl)
//   const imageFallback = `https://placehold.co/${width}x${height}`;

  return (
    <Image
      src={imageUrl}
      alt={alt}
      height={height}
      width={width}
    //   className={className}
    />
  );
}

export default StrapiImage;
