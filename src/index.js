import headPhone from "./modules/headPhone";
import menu from "./modules/menu";
import buttonUp from "./modules/buttonUp"
import showPopup from "./modules/showPopup";
import formValidate from "./modules/formValidate";
import showHints from "./modules/hints";
import accordeon from "./modules/accordeon";
import sendForm from "./modules/sendForm";
import repairTypes from "./modules/repairTypes";
// import swiper from "./modules/swiper";

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
// swiper('.formula-slider-wrap', '.slider-arrow_right-formula', '.slider-arrow_left-formula');
