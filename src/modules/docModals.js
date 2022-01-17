import slider from "./slider"
const docModals = () => {
    const sliderSection = document.querySelector('.portfolio-slider-wrap');
    const sliderWrap = sliderSection.querySelector('.portfolio-slider__wrapper-slider');
    const sliderBlock = sliderWrap.querySelector('.portfolio-slider');
    const elements = sliderBlock.querySelectorAll('.portfolio-slider__slide');
    const modal = document.querySelector('.popup-portfolio');
    let sliderStart = false;


    let leftBtn, rightBtn;

    //config data
    let width = elements[0].offsetWidth;
    let count = 3;
    let position = 0;
    
    if (window.screen.width < 1024) {
        count = 1;
    }

    sliderSection.addEventListener('click', (e) => {

        if (e.target.closest('#portfolio-arrow_left')) {
            leftBtn = e.target.closest('#portfolio-arrow_left');
            rightBtn = leftBtn.nextElementSibling;
            

            // сдвиг влево
            position += width * count;
            // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
            position = Math.min(position, 0);
            sliderBlock.style.marginLeft = position + 'px';
            
            if (position === 0) {
                leftBtn.style.display = '';
                rightBtn.style.display = 'flex';
            }
        }
        if (e.target.closest('#portfolio-arrow_right')) {
            rightBtn = e.target.closest('#portfolio-arrow_right');
            leftBtn = rightBtn.previousElementSibling;
            // сдвиг вправо
            position -= width * count;
            // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
            position = Math.max(position, -width * (elements.length - count));
            sliderBlock.style.marginLeft = position + 'px';
            if (position < 0) {
                leftBtn.style.display = 'flex';
                if (window.screen.width > 1024) {
                    rightBtn.style.display = 'none';
                }
            }
            if (window.screen.width < 1024) {
                if (position === -1408) {
                    rightBtn.style.display = 'none';
                }
            }
            
        }
    })

    sliderWrap.addEventListener('click', (e) => {
        if (e.target.closest('.portfolio-slider__slide-frame')) {
            if (sliderStart === false) {
                const current = e.target.closest('.portfolio-slider__slide-frame');

                const slides = sliderWrap.querySelectorAll('.portfolio-slider__slide-frame');
                const photos = modal.querySelectorAll('.popup-portfolio-slider__slide');
                const texts =  modal.querySelectorAll('.popup-portfolio-text');
    
                for (let i = 0; i < slides.length; i++){
                    slides[i].setAttribute('data-portfolio-slide', i+1);
                }
                for (let i = 0; i < photos.length; i++){
                    photos[i].setAttribute('data-portfolio-photo', i+1);
                    photos[i].style.display = 'none';
                    photos[i].classList.remove('portfolio-active');
                }
                for (let i = 0; i < texts.length; i++){
                    texts[i].setAttribute('data-portfolio-text', i+1);
                    texts[i].style.display = 'none';
                    photos[i].classList.remove('portfolio-active');
                }
    
                let slideNumber = current.dataset.portfolioSlide;
                
                photos[slideNumber-1].classList.add('portfolio-active');
                texts[slideNumber-1].classList.add('portfolio-active');

                slider(
                    '.popup-portfolio-slider-wrap', 
                    '.popup-portfolio-slider__slide', 
                    '.popup-arrow', 
                    'portfolio-active', 
                    '#popup_portfolio_left', 
                    '#popup_portfolio_right', 
                    true, 
                    '.popup-portfolio-slider',
                    slideNumber-1);
                    sliderStart = true;
            }
            
            modal.classList.add('show-popup');
        }
    })

    modal.addEventListener('click', (e) => {
        if (e.target.closest('.close') || !e.target.closest('.popup-dialog-portfolio')) {
            modal.classList.remove('show-popup');
        }
    })
}

export default docModals;