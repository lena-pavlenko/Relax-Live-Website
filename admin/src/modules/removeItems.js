import render from "./render";

// Удаление юзера
const removeItems = () => {
    // Получаем контентную часть таблицы
    const tBody = document.getElementById('tbody');

    // Через делегирование вешаем клик для кнопки удаления
    tBody.addEventListener('click', (e) => {
        // Проверяем, содержит ли ближайший элемент нужный класс
        if (e.target.closest('.action-remove')) {
            const tr = e.target.closest('tr'); // Получаем строку, по которой кликнули
            const id = tr.dataset.key; // Получаем ключ строки по дата-атрибуту
            
            // Вызываем метод класса для удаления и происходит отрисовка таблицы
            itemService.removeItems(id).then((res) => {
                itemService.getItems().then(items => {
                    render(items);
                }).catch(error => console.log(error.message))
            }).catch(error => console.log(error.message));
        }
    })
}

export default removeItems;