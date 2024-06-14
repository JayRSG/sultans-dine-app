import Image from "next/image";
import React from "react";
import AddBtn from "./AddBtn";

export default function MenuItemBox({ src, name, price }) {
  return (
    <>
      <div className="flex flex-row relative border border-sd-red rounded-[5px] w-item-width h-16 shadow-popular bg-sd-white">
        <Image
          className="h-full"
          src={src}
          alt={"image of " + name}
          width={75}
          height={62}
        />
        <span className="absolute -bottom-1 left-16">
          <AddBtn />
        </span>

        <div className="flex flex-col ml-1 text-sd-bt-text-gray">
          <div className="text-[12px] mt-[6px] text-sd-red font-semibold items-start text-wrap leading-[14px] tracking-[0px] ">
            {name}
          </div>
          
          <div className="flex flex-row space-x-3.5">
            <p className="relative text-[8px] justify-start align max-w-[212px]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.
              Lorem ipsum dolor sit amet consectetur adipiscing elit
              <span className="absolute text-nowrap -right-3 text-sd-red font-semibold">
                See More
              </span>
            </p>
            <div className="text-[10px] font-bold">৳ {price}/-</div>
          </div>
        </div>
      </div>
    </>
  );
}
