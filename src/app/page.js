import BranchInfo from "@/components/BranchInfo";
import Categories from "@/components/Categories";
import DeliveryOption from "@/components/DeliveryOption";
import MenuItems from "@/components/MenuItems";
import Offers from "@/components/Offers";
import PopularItems from "@/components/PopularItems";
import BurgerIcon from "@/components/svgs/BurgerIcon";
import LocationIcon from "@/components/svgs/LocationIcon";
import NotificationBell from "@/components/svgs/NotificationBell";
import NotificationCount from "@/components/svgs/NotificationCount";
import SearchBox from "@/components/ui/SearchBox";
import FooterNav from "@/components/FooterNav";

export default function Home() {
  return (
    <>
      <div className="max-h-[844px]">
        <section className="bg-sd-red text-sd-white rounded-b rounded-bl-[20px] rounded-br-[20px] pb-3 shadow-header">
          {/* Home page */}
          <div className="flex flex-row items-start">
            <div className="flex flex-row ml-2 place-items-center w-5/6">
              {/* Nav Button burger */}
              <div className="mt-2">
                <BurgerIcon />
              </div>
              {/* Current Location */}
              <div className="ml-3 mt-2">
                <LocationIcon />
              </div>
              <div className="flex flex-col ml-2 mt-2 -space-y-1">
                <h2 className="text-sd-menu-t-active-white text-xl font-bold">
                  Home
                </h2>
                <div className="text-sm">42 Jamal Khan</div>
              </div>
            </div>

            {/* Notification */}
            <div className="mt-4 ml-4 w-[11%]">
              <div className="flex flex-row relative">
                <div className="absolute">
                  <NotificationBell />
                </div>
                <div className="absolute left-4">
                  <NotificationCount number={10} />
                </div>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="mt-4 mx-6">
            {/* Search Button */}
            <SearchBox />
          </div>

          {/* Branch */}
          <div className="mt-2 ml-12 flex flex-row">
            <BranchInfo />
          </div>
        </section>

        {/* Delivery Option */}
        <section className="bg-sd-red rounded-15 w-[356px] mx-5 mt-3 h-10 shadow-delivery">
          <DeliveryOption />
        </section>

        {/* offers */}
        <section className="flex flex-row gap-2 flex-shrink-0 overflow-hidden shadow-offers mt-5 ml-5 bg-sd-white rounded-l-15 hover:overflow-x-scroll scroll-px-0">
          <Offers />
        </section>

        {/* Category Explorer */}
        <section className="ml-5 mt-3">
          <h2 className="text-sd-red font-bold text-sm mb-2">
            Explore by Category
          </h2>
          <div className="flex flex-row align-middle justify-center">
            <Categories />
          </div>
        </section>

        {/* Popular */}
        <section className="ml-5 mb-5">
          <h2 className="text-sd-red font-bold text-sm mb-4">Popular</h2>
          <div className="flex flex-row mx-1 space-x-2">
            <PopularItems />
          </div>
        </section>

        {/* Menu Items */}
        <section className="ml-2 mb-5">
          <h2 className="text-sd-red font-bold text-sm ml-2.5 mb-3">KACCHI</h2>
          <div className="flex items-center ml-3.5">
            <MenuItems />
          </div>
        </section>

        {/* Footer Nav menu */}
        <section className="sticky bottom-0 bg-sd-red rounded-tl-[10px] rounded-tr-[10px] w-mobile h-[55px] px-12 py-3">
          <FooterNav />
        </section>
      </div>
    </>
  );
}
