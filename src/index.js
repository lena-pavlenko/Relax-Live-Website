import headPhone from "./modules/headPhone";
import menu from "./modules/menu";
import buttonUp from "./modules/buttonUp"
import showPopup from "./modules/showPopup";
import formValidate from "./modules/formValidate";
import showHints from "./modules/hints";

headPhone();
menu();
buttonUp();
showPopup('.link-list', '.popup-repair-types');
showPopup('.link-privacy', '.popup-privacy');
showPopup('.button_wide', '.popup-consultation', '.feedback-wrap');
formValidate();
showHints();