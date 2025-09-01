import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

// import required modules
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

const ImageSlider = ({ images }) => {
  return (
    <div>
      <Swiper
        effect={"fade"}
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
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
