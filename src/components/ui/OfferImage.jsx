import Image from "next/image";
import React from "react";

export default function OfferImage({ alt, src, lastImg }) {
  return (
    <Image
      src={src}
      className={`border ${
        lastImg ? "rounded-l-15 rounded-r-none" : "rounded-15"
      }`}
      height={115}
      width={207}
      alt={alt}
    />
  );
}
