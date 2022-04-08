import slider from "./slider";

// Функционал для связывания слайдера на странице и слайдера в модалке
const modalTargetSlide = (
    modalClass, 
    sliderWrapClass, 
    sliderClass,
    slideClass,
    slideModalClass,
    info = false,
    modalSliderWrapClass,
    modalSliderClass,
    navsClass,
    navLeftId,
    navRightId) => {

    // Получаем необходимые элементы
    const modal = document.querySelector(modalClass);
    const sliderSection = document.querySelector(sliderWrapClass);
    const sliderWrap = sliderSection.querySelector(sliderClass);

    // Объявляем переменные
    let sliderStart = false;
    let texts;
    let text = false;

    if (info === true) {
       text = true;
    }

    // Отслеживаем клик
    sliderWrap.addEventListener('click', (e) => {
        if (e.target.closest(slideClass)) {
            if (sliderStart === false) {
                const current = e.target.closest(slideClass); // Текущий слайд

                const slides = sliderWrap.querySelectorAll(slideClass); // Слайды со страницы
                const photos = modal.querySelectorAll(slideModalClass); // Слайды из модалки

                // Если есть текстовая информация, то получаем элементы с текстом
                if (info === true) {
                    texts = modal.querySelectorAll('.popup-portfolio-text');
                }
                
                // Перебираем массивы с даннымиб назначаем им дата-атрибуты для связывания
                // и добавляем класс активности
                for (let i = 0; i < slides.length; i++){
                    slides[i].setAttribute('data-portfolio-slide', i+1);
                }
                for (let i = 0; i < photos.length; i++){
                    photos[i].setAttribute('data-portfolio-photo', i+1);
                    photos[i].style.display = 'none';
                    photos[i].classList.remove('portfolio-active');
                }

                if (info === true) {
                    for (let i = 0; i < texts.length; i++){
                        texts[i].setAttribute('data-portfolio-text', i+1);
                        texts[i].style.display = 'none';
                        texts[i].classList.remove('portfolio-active');
                    }
                }
                
                // Определяем индекс по номеру текущего слайда
                let slideNumber = current.dataset.portfolioSlide;
                
                // Обращаемся к слайду в модалке и добавляем к нему класс активности
                photos[slideNumber - 1].classList.add('portfolio-active');

                if (info === true) {
                    texts[slideNumber-1].classList.add('portfolio-active');
                }
                // Вызываем слайдер для модалки
                slider(
                    modalSliderWrapClass, 
                    slideModalClass, 
                    navsClass, 
                    'portfolio-active', 
                    navLeftId, 
                    navRightId, 
                    true, 
                    modalSliderClass,
                    text,
                    slideNumber-1);
                    
                // sliderStart = true;
            }

            // Показываем модалку
            modal.classList.add('show-popup');
        }
    })

    // Отслеживаем клик по модалке для закрытия
    modal.addEventListener('click', (e) => {
        if (e.target.closest('.close') || !e.target.closest('.popup-dialog-slider')) {
            modal.classList.remove('show-popup');
        }
    })
}

export default modalTargetSlide;