import React from "react";
import PopularItemBox from "./ui/PopularItemBox";

export default function PopularItems() {
  const popular_data = [
    { name: "KACCHI", price: 399, src: "/images/popular/kacchi.png" },
    {
      name: "Kacchi (Basmati, Borhani, Firni/Doi)",
      price: 450,
      src: "/images/popular/kacchi-package.png",
    },
    { name: "Morog Polao", price: 190, src: "/images/popular/morog-polao.png" },
    { name: "KACCHI", price: 399, src: "/images/popular/kacchi.png" },
  ];
  return (
    <>
      {popular_data?.map((popular, ind) => (
        <PopularItemBox
          key={"popular_" + ind}
          name={popular.name}
          src={popular.src}
          price={popular.price}
        />
      ))}
    </>
  );
}
