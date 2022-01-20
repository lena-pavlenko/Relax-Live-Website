import { swiperRepairTypes } from "./swiper";

const repairTypes = () => {
    const buttonWrapper = document.querySelector('.nav-list-popup-repair');
    const contentTitle = document.querySelector('.popup-repair-types-content__head-title');
    const tBody = document.querySelector('.repair-tbody');
    let buttons;

    const getData = (url, withButtons = false) => {
        return fetch(url)
        .then(res => res.json(url))
        .then(data => {
            let myArr = data['items'];
            const arrTypes = [];

            myArr.forEach(element => {
                arrTypes.push(element)
                
            });
            if (withButtons){
                renderBtn(arrTypes);
            }
            return arrTypes;
        })
    }
    let arr = [];
    
    const renderBtn = (arrBtns) => {
        // buttonWrapper.innerHTML = '';
        
        // arrBtns.forEach((data, index) => {
        //     if (index > 0){
        //         if (arrBtns[index-1].type === data.type){
        //             return;
        //         }
        //     }
        //     buttonWrapper.innerHTML += `<button class="button_o popup-repair-types-nav__item swiper-slide" value="${data.type}">${data.type}</button>`;
        // })
        
        for (let i = 0; i < arrBtns.length; i++){
            let flag = false;
            if (arr.length > 0) {
                for (let j = 0; j < arr.length; j++) {
                    if (arrBtns[i].type === arr[j].type) {
                        flag = true;
                        break;
                    }
                }
            }

            if (flag === false) {
                arr.push(arrBtns[i]);
            }
        }
        buttonWrapper.innerHTML = '';
        arr.forEach((item) => {
            buttonWrapper.innerHTML += `<button class="button_o popup-repair-types-nav__item swiper-slide" value="${item.type}">${item.type}</button>`;
        });
        buttons = buttonWrapper.querySelectorAll('.popup-repair-types-nav__item');

        if (window.screen.width < 1200) {
            swiperRepairTypes('.nav-wrap-for-swiper', '.nav-arrow_right', '.nav-arrow_left');
        }
    }

    getData('../db/db.json', true)
        .then(arrTypes => {
            const arrInfo = [];
            buttons[0].classList.add('active');
            
            
            buttons.forEach(button => {
                if (button.classList.contains('active')) {
                    arrTypes.forEach(element => {
                        if (button.value === element.type) {
                            arrInfo.push(element);
                        }
                    })
                }
            })
            render(arrInfo);
        })
        .catch(error => console.log(error.message))

    const render = (array) => {
        contentTitle.textContent = '';
        tBody.innerHTML = '';
        array.forEach(data => {
            
            contentTitle.textContent = data.type;

            tBody.innerHTML += `
                <tr class="mobile-row showHide">
                    <td class="repair-types-name">${data.name}</td>
                    <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                    <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                    <td class="repair-types-value">${data.units === 'м2' ? data.units.replace('2', '<sup>2</sup>') : data.units}</td>
                    <td class="repair-types-value">${data.cost} руб.</td>
                </tr> `;
        })
    }

    buttonWrapper.addEventListener('click', (e) => {
        buttons.forEach(button => {
            if (button.classList.contains('active')) {
                button.classList.remove('active');
            }
        })
        
        if (e.target.closest('.popup-repair-types-nav__item')) {
           const tab = e.target.closest('.popup-repair-types-nav__item');
           
           tab.classList.add('active');
           
           
           getData('../db/db.json') 
            .then(arrTypes => {
                const arrInfo = [];

                arrTypes.forEach(element => {
                    if (tab.value === element.type) {
                        arrInfo.push(element);
                    }
                })
                render(arrInfo);
            })
            .catch(error => console.log(error.message))
            
        }
    })


}

export default repairTypes;