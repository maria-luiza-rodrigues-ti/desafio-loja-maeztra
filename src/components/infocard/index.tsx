import useMobile from "../../hooks/useMobile";

export default function Infocard() {
  const mobile = useMobile();

  return (
    <section className="flex justify-center items-center flex-wrap md:flex-nowrap md:gap-16 max-w-[1600px] w-full px-[30px] md:px-0 pt-[23px] pb-[39px] md:mx-auto md:my-[80px]">
      <div>
        <h3 className="text-black text-2xl font-bold mb-4">Lorem ipsum </h3>
        <p className="text-black text-sm mb-6 md:mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque placerat consequat. Neque arcu mi
          iaculis id. Vel vitae, pharetra, a nec tristique. Feugiat id tortor eu
          mauris pulvinar velit massa. Ut ornare augue eget convallis volutpat
          aliquet. Sed sed pellentesque porttitor phasellus donec condimentum
          sit sapien.
        </p>
      </div>
      {!mobile ? (
        <img src="src/assets/banner-2.png" alt="Banner" className="rounded" />
      ) : (
        <img
          src="src/assets/banner-2-mobile.png"
          alt="Banner"
          className="rounded"
        />
      )}
    </section>
  );
}
