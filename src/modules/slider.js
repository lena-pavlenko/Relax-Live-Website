const slider = (
        sliderClass, 
        slidesClass, 
        arrowClass = '.slider-arrow', 
        activeClass = 'active', 
        navLeftId, 
        navRightId, 
        pagination = false,
        sliderCurrentClass,
        info = false,
        sliderIndex = 0
    ) => {

    // Получение элементов со страницы
    const sliderBlock = document.querySelector(sliderClass);
    const sliderCurrent = document.querySelector(sliderCurrentClass);
    const sliderItems = sliderCurrent.querySelectorAll(slidesClass);
    const modal = document.querySelector('.popup-portfolio');
    let pageAll, pageCurrent, sliderPage, texts, slideNumber;

    if (info == true) {
        texts = modal.querySelectorAll('.popup-portfolio-text');
    }

    if (pagination === true) {
        pageAll = sliderBlock.querySelector('.slider-counter-content__total');
        pageCurrent = sliderBlock.querySelector('.slider-counter-content__current');

        // Пагинация
        const sliderLength = sliderItems.length;
        if (sliderLength > 0) {
            pageAll.textContent = sliderLength;
            sliderPage = sliderIndex + 1;
            pageCurrent.textContent = sliderPage;
        } else {
            pageAll.textContent = '';
            pageCurrent.textContent = '';
        }
    }
   
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

            if (pagination === true) {
                sliderPage++;
                if (sliderPage > sliderItems.length) {
                    sliderPage = 1;
                }
                pageCurrent.textContent = sliderPage
            }

            if (info === true) {
                for (let i = 0; i < texts.length; i++){
                    texts[i].setAttribute('data-portfolio-text', i+1);
                    texts[i].style.display = 'none';
                    texts[i].classList.remove('portfolio-active');
                }
            }
            if (info === true) {
                slideNumber = pageCurrent.textContent
                texts[slideNumber-1].classList.add('portfolio-active');
            }

        } else if (e.target.closest(navLeftId)) {
            sliderIndex--;

            if (pagination === true) {
                sliderPage--;
                if (sliderPage <= 0) {
                    sliderPage = sliderItems.length;
                }
                pageCurrent.textContent = sliderPage;
            }

            if (info === true) {
                for (let i = 0; i < texts.length; i++){
                    texts[i].setAttribute('data-portfolio-text', i+1);
                    texts[i].style.display = 'none';
                    texts[i].classList.remove('portfolio-active');
                }
            }
            if (info === true) {
                slideNumber = pageCurrent.textContent
                texts[slideNumber-1].classList.add('portfolio-active');
            }
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