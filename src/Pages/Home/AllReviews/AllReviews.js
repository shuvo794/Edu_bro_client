import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import './AllReviews.css'
const AllReviews = () => {
 
    return (
      <div>
          <h1 data-text="User Reviews" className="text-center my-3 user-reviews">Important Book</h1>
          <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        // centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            loop: true,
	speed: 600,
  autoplay: {
		delay: 3000,
 	},
            slideShadows: true
        }
    }

    
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://images-na.ssl-images-amazon.com/images/I/41VFNO6C4HL.jpg" width="1024" height="1024" />
    </SwiperSlide>
        <SwiperSlide>
          <img src="https://tutorialzine.com/media/2018/01/NodeJs_Succinctly2.jpg"width="1024" height="1024" />
        </SwiperSlide>
      
        <SwiperSlide>
          <img src="https://i0.wp.com/www.rankred.com/wp-content/uploads/2020/12/C-Programming.jpg?resize=338%2C400&ssl=1" width="1024" height="1024"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://pmem.io/images/programming_pmem_book_420x350px.png" width="1024" height="1024"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images-na.ssl-images-amazon.com/images/I/41VFNO6C4HL.jpg" width="1024" height="1024" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://tutorialzine.com/media/2018/01/NodeJs_Succinctly2.jpg"width="1024" height="1024" />
        </SwiperSlide>
        
      </Swiper>
    </>
      </div>
    );
};

export default AllReviews;