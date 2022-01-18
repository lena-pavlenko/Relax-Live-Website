import { render } from "./render";

// Изменение значения для прав доступа
export const changePermissions = () => {
    // Получаем блок со строками таблицы
    const tBody = document.getElementById('table-body');

    // Через делигирование вешаем обработчик события на переключатель прав
    tBody.addEventListener('click', (e) => {
        // Проверяем, является ли ближайший элемент инпутом с типом чекбокс
        if (e.target.closest('input[type="checkbox"]')) {
            const tr = e.target.closest('tr'); // Получаем строку, по которой кликнули
            const id = tr.dataset.key; // Получаем ключ строки по дата-атрибуту
            const input = tr.querySelector('input[type="checkbox"]'); // получаем инпут-чекбокс
            
            // Вызываем метод из класса, передаем id юзера и объект для замены свойства
            userService.changeUser(id, {permissions: input.checked}).then((res) => {
                // Получаем юзеров и перерисовываем таблицу
                userService.getUsers().then(users => {
                    render(users);
                })
            });
        }
    })
}