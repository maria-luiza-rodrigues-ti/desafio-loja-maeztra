import items from "../../data/offers.json";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function Offers() {
  const { offers } = items;

  return (
    <section className="flex flex-col items-center mt-6 mb-10 md:mb-[74px]">
      <h4 className="text-base text-lightBlack font-bold">
        Por que comprar na Maeztra?
      </h4>
      <Swiper
        spaceBetween={16}
        breakpoints={{
          640: {
            slidesPerView: 1,
            centeredSlides: true,
            loop: true,
          },
          768: {
            slidesPerView: 3,
            centeredSlides: true,
            loop: true,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className="flex justify-between max-w-[1600px] w-full gap-[15px] mt-[21px] px-[31px]"
      >
        {offers.map((offer, index) => (
          <SwiperSlide
            className="flex bg-grey pt-[11px] px-[27px] pb-[14px] gap-x-[22px] rounded"
            key={index}
          >
            <img src={offer.icon} alt="" />
            <div className="flex flex-col justify-center">
              <h5 className="text-lightBlack font-bold text-sm">
                {offer.title}
              </h5>
              <p className="text-black text-xs whitespace-pre">
                {offer.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
