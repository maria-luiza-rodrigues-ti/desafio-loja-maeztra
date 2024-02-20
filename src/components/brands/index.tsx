import items from "../../data/brands.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Brands() {
  const { brands } = items;

  return (
    <section className="mb-10 md:mb-[80px] pl-[31px]">
      <h2 className="text-center mb-6 md:mb-[17px] font-bold text-2xl md:text-[32px] text-lightBlack">
        Marcas Parceiras
      </h2>
      <Swiper
        className="flex gap-4 max-w-[1600px] w-full"
        breakpoints={{
          640: {
            slidesPerView: 2,
            centeredSlides: true,
            loop: true,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
            centeredSlides: true,
            loop: true,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 16,
          },
        }}
      >
        {brands.map((brand, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={brand.img} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
