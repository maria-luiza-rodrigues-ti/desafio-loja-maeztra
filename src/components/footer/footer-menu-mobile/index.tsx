import footer from "../../../data/footer.json";
import * as Accordion from "@radix-ui/react-accordion";
import FooterMenuItem from "../footer-menu-item";
import { FooterMenu } from "../../../types";

export default function FooterMenuMobile() {
  const { menus } = footer as FooterMenu;

  return (
    <Accordion.Root
      type="single"
      collapsible
      className="flex flex-col gap-[17px] w-full "
    >
      {menus &&
        menus.map((menu, index) => {
          return <FooterMenuItem key={index} menu={menu} />;
        })}
    </Accordion.Root>
  );
}
