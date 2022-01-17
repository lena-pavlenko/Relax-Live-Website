import {swiperRepairTypesSlider} from "./swiper";
import slider from "./slider";


const tabsRepair = () => {
    const navList = document.querySelector('.nav-list-repair');
    const tabs = document.querySelectorAll('.repair-types-nav__item');
    const typesSliders = document.querySelectorAll('.types-repair');

    slider('.repair-types-slider-wrap', '.repair-types-slider__slide', 
                            '.slider-arrow', 'active', '#repair-types-arrow_left', 
                            '#repair-types-arrow_right', true, `.types-repair1 `);

    if (window.screen.width < 1024) {
        swiperRepairTypesSlider('.repair-types-nav', '#nav-arrow-repair-right_base', '#nav-arrow-repair-left_base');
    }
    
    navList.addEventListener('click', (e) => {
        tabs.forEach((tab) => {
            if (tab.classList.contains('active')) {
                tab.classList.remove('active');
            }
        })

        if (e.target.closest('.repair-types-nav__item')) {
            const btn = e.target.closest('.repair-types-nav__item');
            btn.classList.add('active');
            const id = btn.dataset.slider;

            typesSliders.forEach(sliderEl => {
                sliderEl.classList.remove('repair-active');
                if (sliderEl.classList.contains(id)) {
                    sliderEl.classList.add('repair-active');
                    slider('.repair-types-slider-wrap', '.repair-types-slider__slide', 
                            '.slider-arrow', 'active', '#repair-types-arrow_left', 
                            '#repair-types-arrow_right', true, `.${id}`);
                }
            })
            
        }
    })
}

export default tabsRepair;