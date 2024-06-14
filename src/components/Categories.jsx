import Image from "next/image";
import React from "react";

export default function Categories() {
  const categories_data = [
    { name: "KACCHI", img: "/images/categories/kacchi.png" },
    { name: "MORAG POLAO", img: "/images/categories/morog-polao.png" },
    { name: "WEDDING BONANZA", img: "/images/categories/kacchi-platter.png" },
    { name: "DESSERTS", img: "/images/categories/firni.png" },
  ];

  return (
    <>
      {categories_data?.map((category, ind) => (
        <div
          key={"category" + ind}
          className="flex flex-col w-1/4 place-items-center"
        >
          <div className="rounded-[70px] shadow-offers border-[0.25px] border-sd-red flex flex-shrink-0 items-center">
            <Image
              className="rounded-[70px] h-[70px]"
              src={category.img}
              width={70}
              height={70}
              alt={"image of " + category.name}
            />
          </div>
          <div className="text-[12px] mt-[6px] text-sd-red font-semibold text-center text-wrap max-w-16 leading-[14px] tracking-[0px] ">
            {category.name}
          </div>
        </div>
      ))}
    </>
  );
}
