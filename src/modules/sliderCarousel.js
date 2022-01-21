// Слайдер-карусель
const sliderCarousel = (sliderSectionClass, sliderWrapperClass, sliderBlockClass, slidesClass, navLeftId, navRightId) => {

    // Получаем элементы
    const sliderSection = document.querySelector(sliderSectionClass);
    const sliderWrap = sliderSection.querySelector(sliderWrapperClass);
    const sliderBlock = sliderWrap.querySelector(sliderBlockClass);
    const elements = sliderBlock.querySelectorAll(slidesClass);
    
    // Объявляем переменные
    let leftBtn, rightBtn;

    let width = elements[0].offsetWidth; // Узнаем ширину слайда
    let count = 3; // Количество отображаемых слайдов
    let position = 0; // Начальная позиция
    
    // Адаптив
    if (window.screen.width < 1024) {
        count = 1;
    }

    // Стрелка влево
    const prevSlide = (endPosition, navLeft, navRight) => {
        // сдвиг влево
        position += width * count;
        // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
        position = Math.min(position, 0);
        sliderBlock.style.marginLeft = position + 'px';

        // Скрываем и показываем стрелки в зависимости от позиции слайдов
        if (position > endPosition) {
            navRight.style.display = 'flex';
        }
        if (position === 0) {
            navLeft.style.display = '';
        }
    }

    // Стрелка вправо
    const nextSlide = (endPosition, navRight, navLeft) => {
        // сдвиг вправо
        position -= width * count;
        // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
        position = Math.max(position, -width * (elements.length - count));
        sliderBlock.style.marginLeft = position + 'px';

        // Скрываем и показываем стрелки в зависимости от позиции слайдов
        if (position < 0) {
            navLeft.style.display = 'flex';
            if (window.screen.width > 1024) {
                navRight.style.display = 'none';
            }
        }
        if (window.screen.width < 1024) {
            if (position === endPosition) {
                navRight.style.display = 'none';
            }
        }
    }

    // Отслеживаем клик по стрелкам
    sliderSection.addEventListener('click', (e) => {
        if (e.target.closest(navLeftId)) {
            leftBtn = e.target.closest(navLeftId);
            rightBtn = leftBtn.nextElementSibling;

            prevSlide(-1408, leftBtn, rightBtn);
        }

        if (e.target.closest(navRightId)) {
            rightBtn = e.target.closest(navRightId);
            leftBtn = rightBtn.previousElementSibling;

            nextSlide(-1408, rightBtn, leftBtn); 
        }
    })
}
export default sliderCarousel;