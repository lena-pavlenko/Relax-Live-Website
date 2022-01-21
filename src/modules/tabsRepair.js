import {swiperRepairTypesSlider} from "./swiper";
import slider from "./slider";

// Табы для выбора слайдера
const tabsRepair = () => {
    // Получаем элементы
    const navList = document.querySelector('.nav-list-repair');
    const tabs = document.querySelectorAll('.repair-types-nav__item');
    const typesSliders = document.querySelectorAll('.types-repair');

    // Вызываем слайдер первый
    slider('.repair-types-slider-wrap', '.repair-types-slider__slide', 
                            '.slider-arrow', 'active', '#repair-types-arrow_left', 
                            '#repair-types-arrow_right', true, `.types-repair1 `);

    // Для мобилок - свайпер
    if (window.screen.width < 1024) {
        swiperRepairTypesSlider('.repair-types-nav', '#nav-arrow-repair-right_base', '#nav-arrow-repair-left_base');
    }
    
    // Отслеживаем клик по табу
    navList.addEventListener('click', (e) => {

        // Цикл по табам
        tabs.forEach((tab) => {
            // Удаляем классы активности
            if (tab.classList.contains('active')) {
                tab.classList.remove('active');
            }
        })

        // Проверяем клик и добавляем класс активности
        if (e.target.closest('.repair-types-nav__item')) {
            const btn = e.target.closest('.repair-types-nav__item');
            btn.classList.add('active');
            const id = btn.dataset.slider; // Сохраняем дата-атрибут в id

            // Цикл по слайдерам
            typesSliders.forEach(sliderEl => {
                // Удаляем класс активности
                sliderEl.classList.remove('repair-active');

                // Проверяем, содержит ли класс слайдера нужное значение
                if (sliderEl.classList.contains(id)) {

                    // Добавляем класс активности и вызываем соответствующий слайдер
                    sliderEl.classList.add('repair-active');
                    slider('.repair-types-slider-wrap', '.repair-types-slider__slide', 
                            '.slider-arrow', 'active', '#repair-types-arrow_left', 
                            '#repair-types-arrow_right', true, `.${id}`, false);
                }
            }) 
        }
    })
}

export default tabsRepair;