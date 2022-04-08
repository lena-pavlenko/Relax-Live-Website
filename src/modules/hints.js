import { swiperFormula } from "./swiper";

// Показ подсказок
const showHints = () => {
    // Получаем элементы
    const hintWrappers = document.querySelectorAll('.formula-item');

    // Цикл по массиву
    hintWrappers.forEach (element => {
        
        // Вешаем обработчик по наведению мыши на элемент
        element.addEventListener('mouseover', (e) => {
            if (e.target.closest('.formula-item__icon')) {
                const icon = e.target.closest('.formula-item__icon');
                const hint = icon.querySelector('.formula-item-popup'); // Получаем элемент подсказки

                // Показываем подсказку
                hint.style.visibility = 'visible';
                hint.style.opacity = '1';

                // Получаем координаты текущего элемента
                let coords = e.target.getBoundingClientRect();

                // Если высота подсказки больше расстояния до верха окна, то показываем ее снизу
                if (hint.offsetHeight > coords.top) {
                    hint.classList.add('rotate-hint');
                    hint.style.transform = `translate3d(0, ${hint.offsetHeight + e.target.offsetHeight + e.target.offsetHeight}px, 0)`;
                } else {
                    // Иначе - снизу(чистим стили)
                    hint.classList.remove('rotate-hint');
                    hint.style.transform = ``;
                }
            }
        })

        // Вешаем обработчик по уведению мыши с элемента
        element.addEventListener('mouseleave', (e) => {

            const icon = e.target.querySelector('.formula-item__icon');
            const hint = icon.querySelector('.formula-item-popup');

            // Скрываем подсказку
            hint.style.visibility = '';
            hint.style.opacity = '';
            
        })

        // Подключаем свайпер-слайдер
        swiperFormula('.formula-slider-wrap', '.slider-arrow_right-formula', '.slider-arrow_left-formula');
    })
}

export default showHints;