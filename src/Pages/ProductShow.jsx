import { ArrowRight } from "lucide-react";
import TextPressure from "../TextPressure/TextPressure";
import Card from "../Components/Card";
import { allProductData } from "../assets/assets";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const ProductShow = () => {
  return (
    <div className="my-10">
      <div className="flex items-center gap-3 p-10 justify-center">
        <ArrowRight className="h-14 w-14" />
        <div className="w-[40%]">
          <TextPressure
            text="NEW ARRIVALS!"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#000000"
            strokeColor="#ff0000"
            minFontSize={46}
          />
        </div>
        
      </div>
      <Swiper
        loop={true}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 30
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 50
          }
        }}
      >
        {allProductData.map((product) => (
          <SwiperSlide key={product.id}>
            <Card 
              name={product.name} 
              price={product.price} 
              image={product.images[0]} 
              sizes={product.sizes}
              id={product.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductShow;
