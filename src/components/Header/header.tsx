import { useEffect, useState } from "react";
import MenuDesktop from "./menu-desktop";
import MenuMobile from "./menu-mobile";

export default function Header() {
  const [mobile, setMobile] = useState(false);

  function handleMobile() {
    const width = window.innerWidth;
    setMobile(width < 1024);
  }

  useEffect(() => {
    handleMobile();
    window.addEventListener("resize", handleMobile);

    return () => {
      window.removeEventListener("resize", handleMobile);
    };
  }, []);

  return <>{!mobile ? <MenuDesktop /> : <MenuMobile />}</>;
}
