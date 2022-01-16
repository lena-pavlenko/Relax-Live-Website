import { scrollSmooth } from "./helper";

// Функционал главного меню
const menu = () => {
    // Получаем элементы
    const menuBtns = document.querySelectorAll('.menu__icon');
    const popup = document.querySelector('.popup-menu');
    const hiddenMenu = popup.querySelector('.popup-dialog-menu');

    // Функция для показа/скрытия меню
    const toggleMenu = () => {
        popup.classList.toggle('show-popup');
        hiddenMenu.classList.toggle('show-menu');
    }

    // Обработчик клика по бургер-меню
    menuBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleMenu();
        })
    })

    // Обработчик клика внутри меню через делегирование
    popup.addEventListener('click', (e) => {

        // Если кликнули по крестику или вне меню, то закрываем его
        if (e.target.closest('.close-menu') || !e.target.closest('.popup-dialog-menu')) {
            toggleMenu();
        }

        // Плавный скролл для пунктов меню
        if (e.target.closest('.popup-menu-nav__item')) {
            e.preventDefault(); // Отключаем стандартное поведение
            toggleMenu();

            // Получаем значение тега href
            let anchorTarget = document.querySelector(e.target.getAttribute('href'));
            // Запускаем функцию плавной прокрутки до блока с нужным id
            scrollSmooth(anchorTarget);
        }
    })
}

export default menu;