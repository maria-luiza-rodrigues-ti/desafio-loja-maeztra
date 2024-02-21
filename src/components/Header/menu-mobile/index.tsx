import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import items from "../../../data/menus.json";

import Menu from "/assets/icon-menu.svg";
import Logo from "/assets/logo-maeztra-mobile.svg";
import SearchIcon from "/assets/icon-search.svg";
import CartIcon from "/assets/icon-shoppingbag-mobile.svg";

export default function MenuMobile() {
  const { menus, account } = items;

  return (
    <header>
      <div className="max-w-[1598px] mx-auto flex items-center justify-between py-8 px-4">
        <div className="flex gap-[19px]">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button className="focus-visible:outline-none">
                <img src={Menu} alt="Menu" />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className="z-50 py-[32px] px-10 bg-zinc-50 flex flex-col gap-1 md:gap-0 w-screen will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade">
                {menus &&
                  menus.map((menu, index) => {
                    return (
                      <DropdownMenu.Item key={index} className="pl-3">
                        <a href={menu.href} className="text-sm">
                          {menu.title}
                        </a>
                      </DropdownMenu.Item>
                    );
                  })}
                <DropdownMenu.Separator className="h-[1px] bg-yellow my-[5px]" />
                {account &&
                  account.map((link, index) => {
                    return (
                      <DropdownMenu.Item key={index} className="pl-3">
                        <a href={link.href} className="text-sm flex gap-2">
                          <img
                            src={link.icon}
                            alt={link.title}
                            className=" w-3.5"
                          />{" "}
                          {link.title}
                        </a>
                      </DropdownMenu.Item>
                    );
                  })}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <img src={Logo} alt="Maeztra" />
        </div>
        <nav className="flex gap-[40px]">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <a className="flex gap-2 items-center" href="#">
                <img src={SearchIcon} />
              </a>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className="z-50 py-[32px] px-10 bg-zinc-50 flex flex-col gap-1 md:gap-0 w-screen will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade">
                <div className="flex justify-between bg-grey w-full max-w-[791px] h-10 pl-6 rounded-[10px] overflow: hidden;">
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
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <a className="flex items-center gap-2" href="#">
            <img src={CartIcon} />
          </a>
        </nav>
      </div>
    </header>
  );
}
