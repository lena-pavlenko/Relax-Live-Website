import render from "./render";
import { validity } from "./helpers";

const addItems = () => {
    const btn = document.querySelector('.btn-addItem');
    const modal = document.getElementById('modal');

    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('.input');
    const inputType = form.querySelector('#type1');
    const inputName = form.querySelector('#name');
    const inputUnits = form.querySelector('#units');
    const inputCost = form.querySelector('#cost');

    const textError = form.querySelector('.errorText');

    btn.addEventListener('click', () => {
        modal.style.display = 'flex';
    })

    modal.addEventListener('click', (e) => {
        
        if (e.target.closest('.button__close') || e.target.closest('.cancel-button') || !e.target.closest('.modal')) {
            e.preventDefault();
            form.reset();
            modal.style.display = '';
            textError.style.opacity = '';
        }
    })

    validity(inputCost, /\D/g);
    
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

        if (!form.dataset.item && error !== true) {
            textError.style.opacity = '';
            // Создаем объект с необходимыми данными
            const item = {
                type: inputType.value.trim(),
                name: inputName.value.trim(),
                units: inputUnits.value.trim(),
                cost: +inputCost.value
            }

            // Вызываем метод, передаем создаваемый объект, перерисовываем таблицу
            itemService.addItems(item).then(() => {
                itemService.getItems().then(items => {
                    render(items);
                    // Чистка формы
                    form.reset();
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

export default addItems;