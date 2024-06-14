import Image from "next/image";
import HomeIconSVG from "@/../public/images/svg/home.svg";
import OrderIconSvg from "@/../public/images/svg/order.svg";
import CartIconSvg from "@/../public/images/svg/cart.svg";
import CouponIconSvg from "@/../public/images/svg/coupon.svg";

export default function FooterNav() {
  return (
    <>
      <div className="flex flex-row space-x-10">
        <div className="flex flex-col w-1/4 place-items-center">
          <Image
            src={HomeIconSVG}
            alt={"home icon"}
            width={24}
            height={24}
            className=""
          />
          <span className="text-xs text-sd-white">Home</span>
        </div>
        <div className="flex flex-col w-1/4 place-items-center">
          <Image
            src={OrderIconSvg}
            alt={"order icon"}
            width={24}
            height={24}
            className=""
          />
          <span className="text-xs text-sd-menu-t-inactive-gray text-nowrap">
            Order Track
          </span>
        </div>
        <div className="flex flex-col w-1/4 place-items-center">
          <Image
            src={CartIconSvg}
            alt={"cart icon"}
            width={24}
            height={24}
            className=""
          />
          <span className="text-xs text-sd-menu-t-inactive-gray">Cart</span>
        </div>
        <div className="flex flex-col w-1/4 place-items-center">
          <Image
            src={CouponIconSvg}
            alt={"coupon icon"}
            width={24}
            height={24}
            className=""
          />
          <span className="text-xs text-sd-menu-t-inactive-gray">Others</span>
        </div>
      </div>
    </>
  );
}
