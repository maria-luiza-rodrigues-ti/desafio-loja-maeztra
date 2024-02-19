import items from "../data/brands.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Brands() {
  const { brands } = items;

  return (
    <section className="mb-[80px]">
      <h2 className="text-center mb-[17px] font-bold text-[32px] text-lightBlack">
        Marcas Parceiras
      </h2>
      <Swiper
        slidesPerView={5}
        className="flex gap-[15px] max-w-[1600px] w-full"
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
