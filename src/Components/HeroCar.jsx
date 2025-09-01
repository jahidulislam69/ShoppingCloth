import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade"; // ✅ fade effect styles


// import required modules
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { SwiperImages } from "../assets/Banner/imagearray";

const HeroCar = () => {
  return (
    <div className="w-full">
      <Swiper
        effect="fade" // ✅ fade transition
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper w-full h-[80vh]"
      >
       {SwiperImages.map((item, index) => (
  <SwiperSlide key={index} className="flex items-center justify-center">
    {/* Desktop image */}
    <img
      src={item.web}
      alt={`Slide ${index + 1} desktop`}
      className="hidden sm:block w-full h-full object-cover"
    />
    {/* Mobile image */}
    <img
      src={item.mobile}
      alt={`Slide ${index + 1} mobile`}
      className="block sm:hidden w-full h-full object-cover"
    />
  </SwiperSlide>
))}
      </Swiper>
    </div>
  );
};

export default HeroCar;
