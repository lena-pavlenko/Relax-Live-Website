import headPhone from "./modules/headPhone";
import menu from "./modules/menu";
import buttonUp from "./modules/buttonUp"
import showPopup from "./modules/showPopup";
import formValidate from "./modules/formValidate";
import showHints from "./modules/hints";
import accordeon from "./modules/accordeon";
import sendForm from "./modules/sendForm";
import repairTypes from "./modules/repairTypes";
import slider from "./modules/slider";
import tabsRepair from "./modules/tabsRepair";
import modalTargetSlide from "./modules/modalTargetSlide";
import { swiperServices } from "./modules/swiper";
import sliderCarousel from "./modules/sliderCarousel";

headPhone();
menu();
buttonUp();
showPopup('.link-list', '.popup-repair-types');
showPopup('.link-privacy', '.popup-privacy');
showPopup('.button_wide', '.popup-consultation', '.feedback-wrap');
formValidate();
showHints();
accordeon();
sendForm();
repairTypes();
tabsRepair();

modalTargetSlide(
       '.popup-portfolio', 
       '.portfolio-slider-wrap', 
       '.portfolio-slider__wrapper-slider', 
       '.portfolio-slider__slide-frame', 
       '.popup-portfolio-slider__slide',
       true,
       '.popup-portfolio-slider-wrap',
       '.popup-portfolio-slider',
       '.popup-arrow',
       '#popup_portfolio_left', 
       '#popup_portfolio_right'
       );

modalTargetSlide(
       '.popup-transparency', 
       '.transparency-slider-wrap', 
       '.transparency-slider', 
       '.transparency-item__img', 
       '.popup-transparency-slider__slide',
      false,
       '.popup-transparency-slider-wrap',
       '.popup-transparency-slider',
       '.popup-arrow',
       '#transparency_left', 
       '#transparency_right',
       '.popup-portfolio-slider'
       );

slider(
       '.reviews-slider-wrap', 
       '.reviews-slider__slide', 
       '.slider-arrow', 
       'active', 
       '#reviews-arrow_left', 
       '#reviews-arrow_right', 
       false,
       '.reviews-slider',
       false);

slider(
       '.transparency-slider-wrap', 
       '.transparency-item', 
       '.slider-arrow', 
       'active', 
       '#transparency-arrow_left', 
       '#transparency-arrow_right', 
       false, 
       '.transparency-slider',
       false);
       

sliderCarousel(
       '.portfolio-slider-wrap', 
       '.portfolio-slider__wrapper-slider', 
       '.portfolio-slider', 
       '.portfolio-slider__slide', 
       '#portfolio-arrow_left', 
       '#portfolio-arrow_right');

if (window.screen.width < 575) {
    swiperServices('.services-slider-swipe');
}

if (window.screen.width < 575) {
    slider(
           '.portfolio-slider-wrap-mob', 
           '.portfolio-slider__slide-frame-mob', 
           '.slider-arrow-tablet-mobile', 
           'active', 
           '#portfolio-arrow-mobile_left', 
           '#portfolio-arrow-mobile_right', 
           true, 
           '.portfolio-slider-mobile',
           false);

           modalTargetSlide(
              '.popup-portfolio', 
              '.portfolio-slider-wrap', 
              '.portfolio-slider-mobile', 
              '.portfolio-slider__slide-frame-mob', 
              '.popup-portfolio-slider__slide',
              true,
              '.popup-portfolio-slider-wrap',
              '.popup-portfolio-slider',
              '.popup-arrow',
              '#popup_portfolio_left', 
              '#popup_portfolio_right'
              );
}

