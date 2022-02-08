import React from 'react';
import Swiper from 'swiper';

import './AllReviews.css'
const AllReviews = () => {
    const swiper = new Swiper(".swiper-container", {
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: 1,
        loop: true,
        speed: 600,
    
     
    
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
        },
    
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            560: {
                slidesPerView: 2
            },
            990: {
                slidesPerView: 3
            }
        },
    
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
    
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });
    
    
  
    
    

    return (
      <div>
          <h1 className="text-center">User Reviews</h1>
          <div className="swiper-container">
	<div className="swiper-wrapper">
		<div className="swiper-slide"></div>
		<div className="swiper-slide"></div>
		<div className="swiper-slide"></div>
		<div className="swiper-slide"></div>
		<div className="swiper-slide"></div>
		<div className="swiper-slide"></div>
		<div className="swiper-slide"></div>
		<div className="swiper-slide"></div>
		<div className="swiper-slide"></div>
	</div>
	<div className="swiper-pagination"></div>
	<div className="swiper-button-prev"></div>
	<div className="swiper-button-next"></div>
</div>
      </div>
    );
};

export default AllReviews;