import { scrollSmooth } from "./helper";

// Кнопка наверх
const buttonUp = () => {
    // Получаем элементы со страницы
    const buttonUp = document.querySelector('.button-footer');
    const toMain = document.getElementById('main');

    // Обрабатываем клик по кнопке
    buttonUp.addEventListener('click', (e) => {
        e.preventDefault();
        scrollSmooth(toMain);
    })
}

export default buttonUp;