import {inputNameValidate} from "./helper";

// Отправка форм
const sendForm = (forms = document.querySelectorAll('form')) => {

    // Получение элементов
    const modal = document.querySelector('.popup-thank');
    const errorModal = document.querySelector('.popup-error');
    const inputs = document.querySelectorAll('input');

    // Клик по модалке
    modal.addEventListener('click', (e) => {
        if (e.target.closest('.close') || !e.target.closest('.feedback-wrap')) {
            modal.style.visibility = 'hidden';
        }
    })

    // Цикл по инпутам, чтобы вызвать функции валидации
    inputs.forEach(input => {
        if (input.name === 'name') {
            inputNameValidate(input, /[^а-яА-яa-z\-\ ]/gi)
        }
    })

    // Проверка форм
    const checkForm = (form) => {
        const inputs = form.querySelectorAll('input');
        const errors = {}; // объект ошибок

        // Цикл по инпутам
        inputs.forEach(input => {
            // Если инпуты пустые или чекбокс не выбран
            if (input.value === '' || (input.type == 'checkbox' && input.checked === false)) {
                // то записываем в объект ошибку
                errors[input.name] = true;

                // Имени и телефону добавляем класс для отображения соответствующего стиля
                if (input.type !== 'checkbox') {
                    input.classList.add('wrong');
                    
                }
                // Чекбоксу добавляем класс для отображения соответствующего стиля
                if (input.type === 'checkbox') {
                    input.labels[0].style.border = '1px solid red';
                }
            } else {
                // В другом случае в объекте нет ошибок и чистим стили
                errors[input.name] = false;

                if (input.type !== 'checkbox') {
                    input.classList.remove('wrong');
                }
                if (input.type === 'checkbox') {
                    input.labels[0].style.border = '1px solid #322823';
                }
            }
        })

        // Возвращаем объект
        return errors;
    }

    // Отправляем данные
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
    }

    // Функция отправки
    const sendingForm = (form) => {
        const formErrors = checkForm(form); // сохраняем объект с ошибками

        // Цикл по объекту, ищем ошибки
        for (let key in formErrors) {
            if (formErrors[key] === true){
                return false;
            }
        }

        // Экземпляр Формдаты для отправки данных
        const formData = new FormData(form);
        const userData = {};

        // Создаем объект с именами инпутов и значениями
        formData.forEach((val, key) => {
            userData[key] = val.trim();
        })

        // При успешной отправке вызываем модалку и чстим форму
        sendData(userData).then(data => {
            modal.style.visibility = 'visible';
            setTimeout(() => {
                modal.style.visibility = '';
            }, 2000)
            form.reset();
        }).catch(error => {
            // Иначе модалка с информированием об ошибке
            errorModal.style.visibility = 'visible';
            setTimeout(() => {
                errorModal.style.visibility = '';
            }, 2000)
        })
    }

    // Цикл по всем формам и вызов функции отправки
    forms.forEach(form => {

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            sendingForm(form);
        })
    })
}

export default sendForm;