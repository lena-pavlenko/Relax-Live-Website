const slider = (sliderClass, slidesClass, arrowClass, activeClass = 'active', navLeftId, navRightId) => {

   // Получение элементов со страницы
   const sliderBlock = document.querySelector(sliderClass);
   const sliderItems = document.querySelectorAll(slidesClass);

    // Счетчик для смены слайдов
    let sliderIndex = 0;

    // Функция для удаления активного класса
    const prevSlide = (elems, index, elemClass) => {
        elems[index].classList.remove(elemClass);
    }

    // Функция для добавления активного класса
    const nextSlide = (elems, index, elemClass) => {
        elems[index].classList.add(elemClass);
    }

    // Событие клика по стрелкам и точкам
    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        // Если блок не содержит данных классов, то ничего не делаем
        if (!e.target.closest(arrowClass)) {
            return;
        }

        // Удаляем активные классы
        prevSlide(sliderItems, sliderIndex, activeClass);

        // Проверяем клик
        if (e.target.closest(navRightId)) {
            sliderIndex++;
        } else if (e.target.closest(navLeftId)) {
            sliderIndex--;
        }

        // Обнуляем счетчик
        if (sliderIndex >= sliderItems.length) {
            sliderIndex = 0;
        }

        // Или возвращаем на последний слайд
        if (sliderIndex < 0) {
            sliderIndex = sliderItems.length - 1;
        }

        // Добавляем активные классы
        nextSlide(sliderItems, sliderIndex, activeClass);
    })


    
}

export default slider;