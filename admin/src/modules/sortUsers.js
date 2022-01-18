import { render } from "./render";

export const sortUsers = () => {
    const thChild = document.getElementById('sort-is-children');

    // Стилизация
    thChild.style.cursor = 'pointer';

    // Создание переменной для отслеживания состояния сортировки
    let isSort = false;

    // Оюработка клика
    thChild.addEventListener('click', () => {

        userService.sortUsers({
            name: 'children',
            value: isSort ? 'asc' : 'desc'
        }).then(users => {
            render(users);
        })

        isSort = !isSort;
    })
}