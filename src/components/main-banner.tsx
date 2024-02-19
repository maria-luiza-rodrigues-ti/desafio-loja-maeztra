// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

export default function MainBanner() {
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
        <SwiperSlide>
          {" "}
          <div className="bg-[url('./src/assets/full-banner.png')] bg-no-repeat bg-cover pt-[151px] pb-[232px] pl-[323px] font-secondary">
            <h2 className="text-white font-bold mb-10 text-[40px]">
              Promoções de Outono
            </h2>
            <p className="text-white text-xl mb-8 max-w-[471px]">
              Confiras os melhores looks para combinar com você nesse Outono
            </p>
            <a
              href="#"
              className="py-3.5 px-[30px] bg-yellow rounded-[10px] text-base text-white font-bold"
            >
              Conferir
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('./src/assets/full-banner.png')] bg-no-repeat bg-cover pt-[151px] pb-[232px] pl-[323px] font-secondary">
            <h2 className="text-white font-bold mb-10 text-[40px]">
              Promoções de Outono
            </h2>
            <p className="text-white text-xl mb-8 max-w-[471px]">
              Confiras os melhores looks para combinar com você nesse Outono
            </p>
            <a
              href="#"
              className="py-3.5 px-[30px] bg-yellow rounded-[10px] text-base text-white font-bold"
            >
              Conferir
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('./src/assets/full-banner.png')] bg-no-repeat bg-cover pt-[151px] pb-[232px] pl-[323px] font-secondary">
            <h2 className="text-white font-bold mb-10 text-[40px]">
              Promoções de Outono
            </h2>
            <p className="text-white text-xl mb-8 max-w-[471px]">
              Confiras os melhores looks para combinar com você nesse Outono
            </p>
            <a
              href="#"
              className="py-3.5 px-[30px] bg-yellow rounded-[10px] text-base text-white font-bold"
            >
              Conferir
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('./src/assets/full-banner.png')] bg-no-repeat bg-cover pt-[151px] pb-[232px] pl-[323px] font-secondary">
            <h2 className="text-white font-bold mb-10 text-[40px]">
              Promoções de Outono
            </h2>
            <p className="text-white text-xl mb-8 max-w-[471px]">
              Confiras os melhores looks para combinar com você nesse Outono
            </p>
            <a
              href="#"
              className="py-3.5 px-[30px] bg-yellow rounded-[10px] text-base text-white font-bold"
            >
              Conferir
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('./src/assets/full-banner.png')] bg-no-repeat bg-cover pt-[151px] pb-[232px] pl-[323px] font-secondary">
            <h2 className="text-white font-bold mb-10 text-[40px]">
              Promoções de Outono
            </h2>
            <p className="text-white text-xl mb-8 max-w-[471px]">
              Confiras os melhores looks para combinar com você nesse Outono
            </p>
            <a
              href="#"
              className="py-3.5 px-[30px] bg-yellow rounded-[10px] text-base text-white font-bold"
            >
              Conferir
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
