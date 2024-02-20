import Menu from "../../assets/icon-menu.svg";
import Logo from "../../assets/logo-maeztra-mobile.svg";
import SearchIcon from "../../assets/icon-search.svg";
import CartIcon from "../../assets/icon-shoppingbag-mobile.svg";

export default function MenuMobile() {
  return (
    <header>
      <div className="max-w-[1598px] mx-auto flex items-center justify-between py-8 px-4">
        <div className="flex gap-[19px]">
          <img src={Menu} alt="Menu" />
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
