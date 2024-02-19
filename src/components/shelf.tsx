import items from "../data/products.json";
import { toast } from "sonner";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function Shelf() {
  const { products } = items;

  return (
    <section>
      <h2 className="text-center mb-6 font-bold text-[32px] text-lightBlack">
        As Mais Pedidas
      </h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={16}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="max-w-[1600px] flex gap-4 group"
      >
        {products.map((product, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={product.img} alt="Produto" />
              <div className="px-[27px] pb-4">
                <div className="flex gap-1.5 mt-1.5">
                  {product.colors.map((color, index) => {
                    return (
                      <div
                        className="w-[27px] h-[27px] rounded"
                        style={{ backgroundColor: color }}
                        key={index}
                      ></div>
                    );
                  })}
                </div>
                <span className="block mt-1.5 text-lightBlack text-xl/[1] font-bold">
                  {product.price}
                </span>
                <h3 className="mt-[2px] mb-1.5 text-black">{product.title}</h3>
                <p className="opacity-50 mb-1.5 text-xs max-w-[245px]">
                  {product.description}
                </p>

                <button
                  onClick={() =>
                    toast.success("Produto adicionado ao carrinho")
                  }
                  className="bg-yellow w-full max-w-[254px] h-[35px] text-white text-center rounded"
                >
                  Adicionar
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
