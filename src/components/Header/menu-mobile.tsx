import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

import Menu from "../../assets/icon-menu.svg";
import Logo from "../../assets/logo-maeztra-mobile.svg";
import SearchIcon from "../../assets/icon-search.svg";
import CartIcon from "../../assets/icon-shoppingbag-mobile.svg";

export default function MenuMobile() {
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
              <DropdownMenu.Content className="z-50 w-full">
                <DropdownMenu.Item>
                  <a href="#">Novidades</a>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <a href="#">Vestidos</a>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <a href="#">Roupas</a>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <a href="#">Sapatos</a>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <a href="#">Lingerie</a>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <a href="#">Acessórios</a>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <a href="#">OUTLET</a>
                </DropdownMenu.Item>
                <DropdownMenu.Separator />
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <img src={Logo} alt="Maeztra" />
        </div>
        <nav className="flex gap-[40px]">
          <a
            className="flex gap-2 items-center text-sm/[21px] text-lightBlack"
            href="#"
          >
            <img src={SearchIcon} className="max-h-4" />
          </a>
          <a
            className="flex items-center gap-2 text-sm/[21px] text-lightBlack "
            href="#"
          >
            <img src={CartIcon} className="max-h-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
