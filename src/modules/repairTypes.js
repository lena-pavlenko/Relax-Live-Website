import { swiperRepairTypes } from "./swiper";

// Функционал для отображения всех услуг в модалке
const repairTypes = () => {

    // Получаем элементы
    const buttonWrapper = document.querySelector('.nav-list-popup-repair');
    const contentTitle = document.querySelector('.popup-repair-types-content__head-title');
    const tBody = document.querySelector('.repair-tbody');

    // Объявляем переменные
    let buttons;
    let arr = [];

    // Функция получения и обработки данных из json
    const getData = (url, withButtons = false) => {
        return fetch(url)
        .then(res => res.json(url))
        .then(data => {
            let myArr = data['items']; // Получаем массив из объекта json
            const arrTypes = []; // Переменная для хранения массива

            // Цикл по массиву из Json, добавляем в него элементы
            myArr.forEach(element => {
                arrTypes.push(element)
                
            });
            // Проверяем, получены ли кнопки
            if (withButtons){
                renderBtn(arrTypes);
            }
            return arrTypes;
        })
    }
    
    // Отрисовка кнопок
    const renderBtn = (arrBtns) => {
        // Цикл по массиву json
        for (let i = 0; i < arrBtns.length; i++){
            let flag = false;
            if (arr.length > 0) {
                //Цикл по массиву с сохраненными объектами
                for (let j = 0; j < arr.length; j++) {
                    if (arrBtns[i].type === arr[j].type) {
                        flag = true;
                        break;
                    }
                }
            }
            // Сохраняем только те услуги, типы которых не повторяются
            if (flag === false) {
                arr.push(arrBtns[i]);
            }
        }

        // Очищаем верстку
        buttonWrapper.innerHTML = '';

        // Цикл по сгенерированному массиву, добавляем кнопки
        arr.forEach((item) => {
            buttonWrapper.innerHTML += `<button class="button_o popup-repair-types-nav__item swiper-slide" value="${item.type}">${item.type}</button>`;
        });

        // Получаем кнопки
        buttons = buttonWrapper.querySelectorAll('.popup-repair-types-nav__item');

        // Адаптив для свайпера
        if (window.screen.width < 1200) {
            swiperRepairTypes('.nav-wrap-for-swiper', '.nav-arrow_right', '.nav-arrow_left');
        }
    }

    // Получаем инфу для таблицы
    getData('../db/db.json', true)
        .then(arrTypes => {
            const arrInfo = [];
            buttons[0].classList.add('active');
            
            // Цикл по кнопкам для сохранения услуг в новый массив
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

    // Отрисовка таблицы
    const render = (array) => {
        contentTitle.textContent = '';
        tBody.innerHTML = '';

        // Цикл по массиву
        array.forEach(data => {
            // Заголовок
            contentTitle.textContent = data.type;
            // Таблица
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

    // Обработчик по клику на кнопки
    buttonWrapper.addEventListener('click', (e) => {
        buttons.forEach(button => {
            if (button.classList.contains('active')) {
                button.classList.remove('active');
            }
        })
        
        if (e.target.closest('.popup-repair-types-nav__item')) {
           const tab = e.target.closest('.popup-repair-types-nav__item');
           
           tab.classList.add('active');
           
        // В зависимости от значения кнопки подгружаем нужную информацию
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