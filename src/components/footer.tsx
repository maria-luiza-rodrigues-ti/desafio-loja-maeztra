import footer from "../data/footer.json";

export default function Footer() {
  const { menus, socialmedia, creditcards, links } = footer;

  return (
    <footer>
      <section className="flex justify-between mx-auto max-w-[937px] mb-16">
        {menus.map((menu, index) => {
          return (
            <div key={index}>
              <h3 className="text-lightBlack font-bold mb-6">{menu.title}</h3>
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
      </section>

      <section className="bg-lightBlack py-5">
        <div className="flex justify-between max-w-[1600px] mx-auto">
          <ul className="flex items-center gap-[22px]">
            {socialmedia.map((link, index) => {
              return (
                <li key={index}>
                  <a href="">
                    <img src={link.img} alt={link.alt} />
                  </a>
                </li>
              );
            })}
          </ul>
          <ul className="flex items-center gap-[22px]">
            {creditcards.map((card, index) => {
              return (
                <li key={index}>
                  <img src={card.img} alt={card.alt} />
                </li>
              );
            })}
          </ul>
          <ul className="flex items-center gap-[22px]">
            {links.map((link, index) => {
              return (
                <li key={index} className="flex flex-col gap-1">
                  <h4 className=" text-white text-[10px] font-tercenary">
                    {link.title}
                  </h4>
                  <a href={link.url}>
                    <img src={link.img} alt={link.alt} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </footer>
  );
}
