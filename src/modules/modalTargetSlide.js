import slider from "./slider";

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

    const modal = document.querySelector(modalClass);
    const sliderSection = document.querySelector(sliderWrapClass);
    const sliderWrap = sliderSection.querySelector(sliderClass);
    const slidesModal = modal.querySelectorAll(slideModalClass);

    let sliderStart = false;
    let texts;
    let text = false;
    if (info === true) {
       text = true;
    }

    

    sliderWrap.addEventListener('click', (e) => {
        if (e.target.closest(slideClass)) {
            if (sliderStart === false) {
                const current = e.target.closest(slideClass);

                const slides = sliderWrap.querySelectorAll(slideClass);
                const photos = modal.querySelectorAll(slideModalClass);

                if (info === true) {
                    texts = modal.querySelectorAll('.popup-portfolio-text');
                }
                
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
                // photos[i].classList.remove('portfolio-active');
    
                let slideNumber = current.dataset.portfolioSlide;
                
                photos[slideNumber-1].classList.add('portfolio-active');

                if (info === true) {
                    texts[slideNumber-1].classList.add('portfolio-active');
                }
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
            
            modal.classList.add('show-popup');
        }
    })

    modal.addEventListener('click', (e) => {
        if (e.target.closest('.close') || !e.target.closest('.popup-dialog-slider')) {
            modal.classList.remove('show-popup');
            
        }
    })
}

export default modalTargetSlide;