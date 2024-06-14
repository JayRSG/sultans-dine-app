import MenuItemBox from "./ui/MenuItemBox";

export default function MenuItems() {
  const menuItems = [
    {
      name: "Kacchi Bashmati",
      price: "399",
      src: "/images/menu_items/kacchi.png",
    },
    {
      name: "Morog Polao",
      price: "190",
      src: "/images/menu_items/morog_polao.png",
    },
    {
      name: "Kacchi Bashmati",
      price: "399",
      src: "/images/menu_items/kacchi.png",
    },
    {
      name: "Morog Polao",
      price: "190",
      src: "/images/menu_items/morog_polao.png",
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-3">
        {menuItems.map((item, ind) => (
          <MenuItemBox
            key={"menuitem" + ind}
            name={item.name}
            price={item.price}
            src={item.src}
          />
        ))}
      </div>
    </>
  );
}
