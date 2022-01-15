const showHints = () => {
    const hintWrappers = document.querySelectorAll('.formula-item');

    hintWrappers.forEach (element => {
        
        element.addEventListener('mouseover', (e) => {
            if (e.target.closest('.formula-item__icon')) {
                const icon = e.target.closest('.formula-item__icon');
                const hint = icon.querySelector('.formula-item-popup');

                hint.style.visibility = 'visible';
                hint.style.opacity = '1';


                let coords = e.target.getBoundingClientRect();

                if (hint.offsetHeight > coords.top) {
                    hint.classList.add('rotate-hint');
                    hint.style.transform = `translate3d(0, ${hint.offsetHeight + e.target.offsetHeight + e.target.offsetHeight}px, 0)`;
                } else {
                    hint.classList.remove('rotate-hint');
                    hint.style.transform = ``;
                }
            }
        })

        element.addEventListener('mouseleave', (e) => {

            const icon = e.target.querySelector('.formula-item__icon');

            const hint = icon.querySelector('.formula-item-popup');

            hint.style.visibility = '';
            hint.style.opacity = '';
            
        })
    })
    

    // hintWrappers.forEach((element, index) => {
    //     element.addEventListener('mouseenter', (e) => {

    //        const hint = e.target.querySelector('.formula-item-popup');
    //        hint.style.visibility = 'visible';
    //        hint.style.opacity = '1';

    //        // спозиционируем его сверху от аннотируемого элемента (top-center)
    //         let coords = e.target.getBoundingClientRect();

    //         if (hint.offsetHeight > coords.top) {
    //             hint.classList.add('rotate-hint');
    //             hint.style.transform = `translate3d(0, ${hint.offsetHeight + e.target.offsetHeight + 80}px, 0)`
    //         } else {
    //             hint.classList.remove('rotate-hint');
    //             hint.style.transform = ``
    //         }
    //     })

    //     element.addEventListener('mouseleave', (e) => {

    //         const hint = e.target.querySelector('.formula-item-popup');
    //         hint.style.visibility = '';
    //         hint.style.opacity = '';
    //      })
    // })
}

export default showHints;