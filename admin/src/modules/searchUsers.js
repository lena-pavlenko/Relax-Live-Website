import { render } from "./render";
import { debounce } from "./helpers";

// Поиск юзеров
export const searchUsers = () => {
    const input = document.getElementById('search-input');

    // Сохраняем функцию debounce в переменную, передаем запрос к бд как метод класса
    const debounceSearch = debounce(() => {
        userService.searchUsers(input.value.trim()).then(users => {
            render(users);
        })
    }, 800)

    // Вызываем функцию при каждом вводе
    input.addEventListener('input', debounceSearch)
}