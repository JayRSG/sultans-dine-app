import Image from "next/image";
import React from "react";
import AddBtn from "./AddBtn";

export default function PopularItemBox({ name, src, price }) {
  return (
    <>
      <div className="flex flex-col border border-sd-red w-[81px] place-items-center pt-1 px-[0.5px] rounded-[5px] shadow-popular bg-sd-white">
        <div className="relative">
          <Image
            src={src}
            width={70}
            height={56}
            alt={"image of " + name}
            className="h-14 rounded-md border border-[#201925]"
          />
          <span className="absolute left-[54px] top-11">
            <AddBtn />
          </span>
        </div>
        <div
          className={`max-w-20 h-[24px] mt-[6px] justify-start text-sd-red font-semibold leading-[10px] text-center tracking-[0px] ${
            name.length > 11 ? "text-[8px]" : "text-[12px]"
          }`}
        >
          {name}
        </div>

        <div className="text-[10px] mt-1 mb-1">৳ {price}/-</div>
      </div>
    </>
  );
}
