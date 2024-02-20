import items from "../../data/products.json";
import { toast } from "sonner";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useState } from "react";

interface Product {
  img: string;
  colors: string[];
  price: string;
  title: string;
  description: string;
}

export default function Shelf() {
  const { products } = items;
  const [selectedButtonIndex, setSelectedButtonIndex] = useState<number | null>(
    null
  );

  function handleSelectButton(index: number) {
    setSelectedButtonIndex(index);
  }

  return (
    <section>
      <h2 className="text-center mb-4 md:mb-6 font-bold text-2xl md:text-[32px] text-lightBlack">
        As Mais Pedidas
      </h2>
      <Swiper
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 16,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 16,
            navigation: true,
          },
        }}
        modules={[Navigation]}
        className="max-w-[1600px] px-4 md:px-0 flex md:gap-4 group "
      >
        {products.map((product: Product, index: number) => {
          return (
            <SwiperSlide key={index}>
              <img src={product.img} alt="Produto" />
              <div className="px-[27px]">
                <div className="flex gap-1.5 mt-1.5">
                  {product.colors.map((color, colorIndex) => {
                    return (
                      <button
                        className={`w-[27px] h-[27px] rounded focus-visible:outline-none ${
                          selectedButtonIndex === colorIndex
                            ? "border-2 border-lightBlack"
                            : ""
                        }`}
                        style={{ backgroundColor: color }}
                        key={colorIndex}
                        onClick={() => handleSelectButton(colorIndex)}
                      ></button>
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
                  className="bg-yellow w-full max-w-[254px] h-[35px] text-white text-center rounded focus-visible:outline-none"
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
