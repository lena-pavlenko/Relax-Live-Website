const sliderPagination = (sliderClass) => {
    // Получение элементов со страницы
   const sliderBlock = document.querySelector('.repair-types-slider-wrap');
   const sliderCurrent = sliderBlock.querySelector(sliderClass);
   const sliderItems = sliderCurrent.querySelectorAll('.repair-types-slider__slide');
   const pageAll = document.querySelector('.slider-counter-content__total');
   const pageCurrent = document.querySelector('.slider-counter-content__current');

    // Счетчик для смены слайдов
    let sliderIndex = 0;

    let sliderLength = sliderItems.length;
    pageAll.textContent = sliderLength;

    let sliderPage = 1;

    pageCurrent.textContent = sliderPage;

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
        if (!e.target.closest('.slider-arrow')) {
            return;
        }

        // Удаляем активные классы
        prevSlide(sliderItems, sliderIndex, 'active');

        // Проверяем клик
        if (e.target.closest('#repair-types-arrow_right')) {
            sliderIndex++;
            sliderPage++;
            if (sliderPage > sliderItems.length) {
                sliderPage = 1;
            }
            pageCurrent.textContent = sliderPage
        } else if (e.target.closest('#repair-types-arrow_left')) {
            sliderIndex--;
            sliderPage--;
            if (sliderPage <= 0) {
                sliderPage = sliderItems.length;
            }
            pageCurrent.textContent = sliderPage;
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
        nextSlide(sliderItems, sliderIndex, 'active');
    })
}

export default sliderPagination;
