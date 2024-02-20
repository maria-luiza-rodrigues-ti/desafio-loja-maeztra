import useMobile from "../../hooks/useMobile";
import footer from "../../data/footer.json";
import FooterMenuDesktop from "./footer-menu-desktop";
import FooterMenuMobile from "./footer-menu-mobile";

export default function Footer() {
  const mobile = useMobile();
  const { socialmedia, creditcards, links } = footer;

  return (
    <footer>
      <section className="flex justify-between flex-wrap pt-10 px-[30px] pb-14 md:p-0 mx-auto md:mb-16 max-w-[937px]">
        {!mobile ? <FooterMenuDesktop /> : <FooterMenuMobile />}
      </section>

      <section className="bg-lightBlack pt-6 pb-8 md:py-5">
        <div className="flex justify-center md:justify-between flex-wrap gap-8 md:gap-0 max-w-[1600px] mx-auto">
          <ul className="flex items-center gap-6 md:gap-[22px]">
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
          <ul className="flex items-center gap-6 md:gap-[22px]">
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
