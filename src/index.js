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
import docModals from "./modules/docModals";
import { swiperServices } from "./modules/swiper";

headPhone();
menu();
buttonUp();
showPopup('.link-list', '.popup-repair-types');
showPopup('.link-privacy', '.popup-privacy');
showPopup('.button_wide', '.popup-consultation', '.feedback-wrap');
showPopup('.transparency-item__img', '.popup-transparency', '.popup-dialog-transparency');
formValidate();
showHints();
accordeon();
sendForm();
repairTypes();
slider('.reviews-slider-wrap', '.reviews-slider__slide', '.slider-arrow', 'active', 
       '#reviews-arrow_left', '#reviews-arrow_right', false, '.reviews-slider');

slider('.transparency-slider-wrap', '.transparency-item', '.slider-arrow', 'active', 
       '#transparency-arrow_left', '#transparency-arrow_right', false, '.transparency-slider');

slider('.popup-transparency-slider-wrap', '.popup-transparency-slider__slide', '.popup-arrow', 
       'active', '#transparency_left', '#transparency_right', true, '.popup-transparency-slider');


tabsRepair();
docModals();

if (window.screen.width < 575) {
    swiperServices('.services-slider-swipe');
}

if (window.screen.width < 575) {
    slider('.portfolio-slider-wrap-mob', '.portfolio-slider__slide-frame-mob', '.slider-arrow-tablet-mobile', 
       'active', '#portfolio-arrow-mobile_left', '#portfolio-arrow-mobile_right', true, '.portfolio-slider-mobile');
}

