import Image from "next/image";
import { getStrapiMedia } from "../../../utils/StrapiMedia";

function StrapiImage({ src, alt, height, width }) {
  if (!src) return null;

  const imageUrl = getStrapiMedia(src);

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
