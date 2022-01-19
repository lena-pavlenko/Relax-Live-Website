import render from "./render";
import { debounce } from "./helpers";

// Поиск юзеров
const searchItems = () => {
    const input = document.getElementById('search-input');

    // Сохраняем функцию debounce в переменную, передаем запрос к бд как метод класса
    const debounceSearch = debounce(() => {
        itemService.searchItems(input.value.trim()).then(items => {
            render(items);
        }).catch(error => console.log(error.message))
    }, 800)

    // Вызываем функцию при каждом вводе
    input.addEventListener('input', debounceSearch)
}

export default searchItems;