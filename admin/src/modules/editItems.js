import { render } from "./render";

// Редактируем юзера
export const editUser = () => {

     // Получаем элементы
     const tBody = document.getElementById('table-body');
     const form = document.querySelector('form');
     const inputName = form.querySelector('#form-name');
     const inputEmail = form.querySelector('#form-email');
     const inputChildren = form.querySelector('#form-children');

    // Через делегирование вешаем клик для кнопки удаления
    tBody.addEventListener('click', (e) => {
        // Проверяем, содержит ли ближайший элемент нужный класс
        if (e.target.closest('.btn-edit')) {
            const tr = e.target.closest('tr'); // Получаем строку, по которой кликнули
            const id = tr.dataset.key; // Получаем ключ строки по дата-атрибуту
            
            // Вызываем метод класса для получения конкретного юзера
            userService.getUser(id).then((user) => {
                inputName.value = user.name;
                inputEmail.value = user.email;
                inputChildren.checked = user.children;
            });

            // Назначаем форме атрибут для отслеживания состояния редактирования
            form.dataset.user = id;
        }
    })

    // Обрабатываем сабмит на форме
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (form.dataset.user) {
            // Создаем переменную для хранения id юзера
            const id = form.dataset.user;

            // Создаем объект с необходимыми данными
            const user = {
                name: inputName.value.trim(),
                email: inputEmail.value.trim(),
                children: inputChildren.checked,
                permissions: false
            }

            // Вызываем метод, передаем id, создаваемый объект
            userService.editUser(id, user).then(() => {
                userService.getUsers().then(users => {
                    render(users); // отрисовка таблицы
                    form.reset(); // очистка формы
                    form.removeAttribute('data-user'); // удаление атрибута
                })
            })
        }
    })
}