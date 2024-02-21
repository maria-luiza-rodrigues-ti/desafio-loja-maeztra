import useMobile from "../../hooks/useMobile";
import MenuDesktop from "./menu-desktop";
import MenuMobile from "./menu-mobile";

export default function Header() {
  const mobile = useMobile();

  return <>{!mobile ? <MenuDesktop /> : <MenuMobile />}</>;
}
