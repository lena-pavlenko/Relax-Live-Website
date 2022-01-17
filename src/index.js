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
import sliderRepair from "./modules/sliderRepair";

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
slider('.reviews-slider-wrap', '.reviews-slider__slide', '.slider-arrow', 'active', '#reviews-arrow_left', '#reviews-arrow_right');
slider('.transparency-slider-wrap', '.transparency-item', '.slider-arrow', 'active', '#transparency-arrow_left', '#transparency-arrow_right');
sliderRepair();
