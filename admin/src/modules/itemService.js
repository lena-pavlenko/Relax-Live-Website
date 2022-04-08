// Класс для работы с юзерами
export class ItemService {

    // Получаем данные из базы
    getItems() {
        return fetch('http://localhost:4545/items').then(res => res.json())
    }
    
    // Добавляем данные, передаем объект
    addItems(itemObj) {
        return fetch('http://localhost:4545/items', {
            method: 'POST',
            body: JSON.stringify(itemObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    // Удаляем услугу, передаем id
    removeItems(idItem) {
        return fetch(`http://localhost:4545/items/${idItem}`, {
            method: 'DELETE'
        }).then(res => res.json())
    }

    // Редактируем данные
    editItem(idItem, data) {
        return fetch(`http://localhost:4545/items/${idItem}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    // Получаем конкретную услугу
    getItem(idItem) {
        return fetch(`http://localhost:4545/items/${idItem}`).then(res => res.json())
    }

    // Фильтруем данные
    filterItems(value) {
        return fetch(`http://localhost:4545/items/?type=${value}`).then(res => res.json())
    }

    // Сортируем данные
    sortItems(option) {
        return fetch(`http://localhost:4545/items/?_sort=${option.name}&_order=${option.value}`).then(res => res.json())
    }

    // Поиск данных
    searchItems(str) {
        return fetch(`http://localhost:4545/items/?q=${str}`).then(res => res.json())
    }

}