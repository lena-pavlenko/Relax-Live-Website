import Swiper from 'swiper';

const swiperFormula = (sliderBox, arrowRight, arrowLeft) => {
    const slider = document.querySelector('.swiper');

    if (slider) {
       const swiper = new Swiper(sliderBox, {
            // Optional parameters
            slidesPerView: 1,
            centeredSlides: true,
            breakpoints: {
                576: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  loop: true
                },
            },
          
            // Navigation arrows
            navigation: {
              nextEl: arrowRight,
              prevEl: arrowLeft,
            },
        });
    }
    
}


const swiperRepairTypes = (sliderBox, arrowRight, arrowLeft) => {
    const slider = document.querySelector('.swiper');

    if (slider) {
       const swiper = new Swiper(sliderBox, {
            // Optional parameters
            slidesPerView: 1,
            spaceBetween: 20,
            breakpoints: {
                576: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  loop: true
                },
            },
          
            // Navigation arrows
            navigation: {
              nextEl: arrowRight,
              prevEl: arrowLeft,
            },
        });
    }
    
}

export { swiperFormula, swiperRepairTypes }