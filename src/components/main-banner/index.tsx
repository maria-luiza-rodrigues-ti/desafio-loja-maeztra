import items from "../../data/banners.json";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper/modules";
import useMobile from "../../hooks/useMobile";

export default function MainBanner() {
  const { banners } = items;
  const mobile = useMobile();

  return (
    <section>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Navigation, Pagination]}
      >
        {banners &&
          banners.map((banner, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className={`bg-no-repeat bg-cover pt-[63px] pl-[63px] pb-[64px] md:pt-[151px] md:pb-[232px] md:pl-[323px] md:pr-0 font-secondary`}
                  style={
                    !mobile
                      ? { backgroundImage: banner.img }
                      : { backgroundImage: banner.imgMobile }
                  }
                >
                  <h2 className="text-white font-bold mb-6 md:mb-10 max-w-56 md:max-w-full text-[30px] md:text-[40px]">
                    {banner.title}
                  </h2>
                  <p className="text-white text-sm md:text-xl mb-4 md:mb-8 max-w-60 md:max-w-[471px]">
                    {banner.description}
                  </p>
                  <a
                    href="#"
                    className=" h-7 md:h-12 w-[76px] md:w-32 flex justify-center items-center md:px-[30px] bg-yellow rounded md:rounded-[10px] text-sm md:text-base text-white font-bold"
                  >
                    Conferir
                  </a>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </section>
  );
}
