import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  const slides = [
    {
      id: 1,
      img: "https://i.ibb.co.com/sgRFjGY/pexels-sabel-blanco-662810-2615031.jpg",
      alt: "Australia",
    },
    {
      id: 2,
      img: "https://i.ibb.co.com/10rB7Zj/pexels-eclipse-chasers-716719984-18285370.jpg",
      alt: "Sydney, NSW, Australia",
    },

    {
      id: 3,
      img: "https://i.ibb.co.com/MsTDV3j/pexels-quang-nguyen-vinh-222549-2132003.jpg",
      alt: "Sơn Trà, Đà Nẵng, Vietnam",
    },
    {
      id: 4,
      img: "https://i.ibb.co.com/68HGVsd/pexels-roodzn-12026138.jpg",
      alt: "Tulum, Q.R., México",
    },
  ];

  return (
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-[35rem]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center bg"
              style={{
                backgroundImage: `url(${slide.img})`,
              }}
            >
              <div className="bg-black/40 w-full h-full flex justify-center items-center">
                <h2 className="text-white text-4xl font-bold">{slide.alt}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
