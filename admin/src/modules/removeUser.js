import { render } from "./render";

// Удаление юзера
export const removeUser = () => {
    // Получаем контентную часть таблицы
    const tBody = document.getElementById('table-body');

    // Через делегирование вешаем клик для кнопки удаления
    tBody.addEventListener('click', (e) => {
        // Проверяем, содержит ли ближайший элемент нужный класс
        if (e.target.closest('.btn-remove')) {
            const tr = e.target.closest('tr'); // Получаем строку, по которой кликнули
            const id = tr.dataset.key; // Получаем ключ строки по дата-атрибуту
            
            // Вызываем метод класса для удаления и происходит отрисовка таблицы
            userService.removeUser(id).then((res) => {
                userService.getUsers().then(users => {
                    render(users);
                })
            });
        }
    })
}