export default function OrderSummary() {
  const Menucount = [1, 2, 3];

  return (
    <div className="border border-sd-bt-text-gray rounded-[10px] ml-6 mr-4 shadow-order_summary bg-sd-white  mt-[14px] mb-12">
      <h3 className="text-sd-red text-xl font-bold mx-[14px] mt-2">
        Order Summary
      </h3>

      {/* Food Items */}
      <div className="mb-[27px] mt-[22px]">
        {Menucount.map((items, ind) => (
          <div
            key={"food " + ind}
            className="flex flex-row mx-3 text-xs flex-grow py-1 font-medium text-sd-t-black"
          >
            <span className="w-1/12">2x</span>
            <span className="w-4/5 font-bold">Kacchi Basmati</span>
            <span className="flex w-2/12 justify-end">৳ 399/-</span>
          </div>
        ))}
      </div>

      <hr className="mx-2 border-solid border-sd-t-black " />

      <div className="my-2 text-xs mx-3 flex flex-col space-y-1.5">
        <div className="flex flex-row flex-grow">
          <span className="flex justify-start w-1/2 font-bold">Subtotal</span>
          <span className="flex justify-end w-1/2">৳ 1197/-</span>
        </div>
        <div className="flex flex-row flex-grow">
          <span className="flex justify-start w-1/2">Delivery Fee</span>
          <span className="flex justify-end w-1/2">৳ 30/-</span>
        </div>
        <div className="flex flex-row flex-grow">
          <span className="flex justify-start w-1/2">Discount</span>
          <span className="flex justify-end w-1/2">-৳ 100/-</span>
        </div>
        <div className="flex flex-row flex-grow">
          <span className="flex justify-start w-1/2">Voucher</span>
          <span className="flex justify-end w-1/2">-৳ 300/-</span>
        </div>
      </div>

      <hr className="mx-2 border-solid border-sd-t-black " />

      <div className="mx-3 flex flex-row font-bold mt-1 mb-5">
        <span className="flex justify-start w-1/2 text-md">Total</span>
        <span className="flex justify-end w-1/2 text-sm">৳ 827/-</span>
      </div>
    </div>
  );
}
