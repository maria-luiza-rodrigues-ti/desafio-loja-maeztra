import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Menu } from "../../../types";

export default function FooterMenuItem({ menu }: { menu: Menu }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleTriggerClick() {
    setIsOpen(!isOpen);
  }

  return (
    <Accordion.Item value={menu.title} className="w-full">
      <Accordion.Header>
        <Accordion.Trigger
          className="flex justify-between w-full group"
          onClick={handleTriggerClick}
        >
          <span className="text-lightBlack font-bold text-base/[18px] group-data-[state='open']:mb-1">
            {menu.title}
          </span>

          {!isOpen ? (
            <Plus color="#353535" size={12} strokeWidth={5} />
          ) : (
            <Minus color="#353535" size={12} strokeWidth={5} />
          )}
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.AccordionContent className="flex flex-col">
        {menu.children.map((child, index) => {
          return (
            <a href={child.href} key={index}>
              <span>{child.name}</span>
            </a>
          );
        })}
      </Accordion.AccordionContent>
    </Accordion.Item>
  );
}
