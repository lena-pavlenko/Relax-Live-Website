const sliderRepair = () => {
    const sliderWrapper = document.querySelector('.repair-types-slider');
    const navList = document.querySelector('.nav-list-repair');
    const tabs = document.querySelectorAll('.repair-types-nav__item');
    const typesSliders = document.querySelectorAll('.types-repair');
    
    navList.addEventListener('click', (e) => {
        tabs.forEach((tab) => {
            if (tab.classList.contains('active')) {
                tab.classList.remove('active');
            }
        })

        if (e.target.closest('.repair-types-nav__item')) {
            const btn = e.target.closest('.repair-types-nav__item');
            btn.classList.add('active');
            const id = btn.dataset.slider;

            typesSliders.forEach(slider => {
                slider.classList.add('repair-hide');
                if (slider.classList.contains(id)) {
                    slider.classList.remove('repair-hide')
                }
            })
            
        }

        
    })
}

export default sliderRepair;