"use client";
import React from "react";
import OfferImage from "./ui/OfferImage";

export default function Offers() {
  const offerData = [
    { name: "kacchi-20-off", img: "/images/offers/ctg-kacchi-20.png" },
    { name: "polaw-for-250", img: "/images/offers/polaw-250.png" },
  ];

  return (
    <>
      {offerData?.map((offer, ind) => (
        <OfferImage
          key={"img" + offer.name + "_" + ind}
          alt={"image for " + offer.name}
          src={offer.img}
          lastImg={ind == offerData?.length - 1}
        />
      ))}
    </>
  );
}
