import render from "./render";
import { validity } from "./helpers";

// Редактируем юзера
const editItems = () => {

    // Получаем элементы
    const tBody = document.getElementById('tbody');
    const modal = document.getElementById('modal');
    const headerModal = modal.querySelector('.modal__header');

    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('.input');
    const inputType = form.querySelector('#type1');
    const inputName = form.querySelector('#name');
    const inputUnits = form.querySelector('#units');
    const inputCost = form.querySelector('#cost');

    const textError = form.querySelector('.errorText');

    validity(inputCost, /\D/g);

    // Через делегирование вешаем клик для кнопки
    tBody.addEventListener('click', (e) => {
        // Проверяем, содержит ли ближайший элемент нужный класс
        if (e.target.closest('.action-change')) {
            modal.style.display = 'flex';
            headerModal.textContent = 'Редактировать услугу';

            const tr = e.target.closest('tr'); // Получаем строку, по которой кликнули
            const id = tr.dataset.key; // Получаем ключ строки по дата-атрибуту

            // Вызываем метод класса для получения конкретной услуги
            itemService.getItem(id).then((item) => {
                inputType.value = item.type,
                inputName.value = item.name;
                inputUnits.value = item.units;
                inputCost.value = item.cost;
            });

            // Назначаем форме атрибут для отслеживания состояния редактирования
            form.dataset.item = id;
        }
    })

    // Обрабатываем сабмит на форме
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let error = false;

        inputs.forEach(input => {
            if (input.value === '') {
                textError.style.opacity = 1;
                error = true;
                return;
            } 
        });

        if (form.dataset.item && error !== true) {
            // Создаем переменную для хранения id
            const id = form.dataset.item;

            // Создаем объект с необходимыми данными
            const item = {
                type: inputType.value.trim(),
                name: inputName.value.trim(),
                units: inputUnits.value.trim(),
                cost: +inputCost.value
            }

            // Вызываем метод, передаем id, создаваемый объект
            itemService.editItem(id, item).then(() => {
                itemService.getItems().then(items => {
                    render(items); // отрисовка таблицы
                    form.reset(); // очистка формы
                    form.removeAttribute('data-item'); // удаление атрибута
                    setTimeout(() => {
                        modal.style.display = '';
                    }, 700)
                }).catch(error => {
                    console.log(error.message)
                })
            })
        }
    })
}

export default editItems;