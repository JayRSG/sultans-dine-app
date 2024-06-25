import OrderSummary from "@/components/OrderSummary";
import BackButton from "@/components/svgs/BackButton";
import DeliveryManSVG from "@/components/svgs/DeliveryMan";
import React from "react";

export default function page() {
  return (
    <div className="flex flex-col max-h-[932px]">
      <div className="ml-5 mt-8">
        <BackButton />
      </div>
      <div className="m-8 flex flex-row place-items-center justify-center">
        <DeliveryManSVG />
      </div>
      <div className="flex flex-row place-items-center justify-center">
        <h2 className="text-[32px] text-sd-red font-extrabold mx-5 text-center leading-normal">
          The food has been Delivered
        </h2>
      </div>

      {/* order Summary */}
      <OrderSummary />

      <div className="flex flex-row justify-center mb-10">
        <button className="bg-sd-red shadow-button rounded-[10px] w-24 h-9 text-sd-white">
          Back
        </button>
      </div>
    </div>
  );
}
