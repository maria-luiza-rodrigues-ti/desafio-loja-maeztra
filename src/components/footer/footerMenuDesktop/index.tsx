import footer from "../../../data/footer.json";

export default function FooterMenuDesktop() {
  const { menus } = footer;

  return (
    <>
      {menus &&
        menus.map((menu, index) => {
          return (
            <div key={index}>
              <h3 className="text-lightBlack font-bold mb-6 text-base/[18px]">
                {menu.title}
              </h3>
              <ul className="flex flex-col gap-6">
                {menu.children.map((child, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={child.href}
                        className="text-xs/[18px] text-black"
                      >
                        {child.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
    </>
  );
}
