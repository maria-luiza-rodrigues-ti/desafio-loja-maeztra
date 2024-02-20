import items from "../../../data/menus.json";

import Logo from "../../../assets/logo-maeztra.svg";
import UserIcon from "../../../assets/icon-user.svg";
import WishlistIcon from "../../../assets/icon-heart.svg";
import CartIcon from "../../../assets/icon-shoppingbag.svg";

export default function MenuDesktop() {
  const { menus } = items;

  return (
    <header>
      <div className="shadow-header">
        <div className="max-w-[1598px] mx-auto flex items-center justify-between py-5">
          <img src={Logo} alt="Maeztra" />
          <div className="flex justify-between bg-grey w-full min-w-[500px] max-w-[791px] h-10 pl-6 rounded-[10px] overflow: hidden;">
            <input
              className="bg-grey w-3/4 placeholder:text-xs/[18px] placeholder:text-lightBlack"
              type="text"
              placeholder="O que você busca ?"
            />
            <button
              className="bg-yellow w-[119px] rounded-[10px] text-sm/[21px] text-white focus-visible:outline-none"
              type="button"
            >
              Buscar
            </button>
          </div>
          <nav className="flex ">
            <a
              className="flex gap-2 items-center text-sm/[21px] text-lightBlack"
              href="#"
            >
              <img src={UserIcon} className="max-h-4" />
              <span>Minha Conta</span>
            </a>
            <a
              className="flex gap-2 ml-10 items-center text-sm/[21px] text-lightBlack"
              href="#"
            >
              <img src={WishlistIcon} className="max-h-4" />
              <span>Favoritos</span>
            </a>
            <a
              className="flex items-center gap-2 ml-12 text-sm/[21px] text-lightBlack border border-yellow rounded-lg pt-3 pr-[14px] pb-[13px] pl-[17px]"
              href="#"
            >
              <img src={CartIcon} className="max-h-4" />
              <span>Meu Carrinho</span>
            </a>
          </nav>
        </div>
      </div>
      <div>
        <nav className="">
          <ul className="flex justify-between max-w-[1034px] w-full mx-auto my-[14px] text-sm/[21px] text-lightBlack">
            {menus &&
              menus.map((menu, index) => {
                return (
                  <li className="group" key={index}>
                    <a href={menu.href} className="flex gap-2">
                      <img
                        src={menu.icon ? menu.icon : ""}
                        alt={menu.title}
                        className={`${menu.icon ? "block" : "hidden"}`}
                      />
                      <span className="group-hover:text-yellow group-hover:font-bold">
                        {menu.title}
                      </span>
                    </a>
                  </li>
                );
              })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
