// Класс для работы с юзерами
export class UserService {

    // Получаем данные из базы
    getUsers() {
        return fetch('http://localhost:4545/users').then(res => res.json())
    }

    // Добавляем юзеров, передаем объект
    addUser(userObj) {
        return fetch('http://localhost:4545/users', {
            method: 'POST',
            body: JSON.stringify(userObj),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    // Удаляем юзера, передаем id юзера
    removeUser(idUser) {
        return fetch(`http://localhost:4545/users/${idUser}`, {
            method: 'DELETE'
        }).then(res => res.json())
    }

    // Меняем значение для прав доступа, передаем id юзера и данные, которые заменяем
    changeUser(idUser, data) {
        return fetch(`http://localhost:4545/users/${idUser}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    // Получаем конкретного юзера
    getUser(idUser) {
        return fetch(`http://localhost:4545/users/${idUser}`).then(res => res.json())
    }

    // Редактируем юзера
    editUser(idUser, user) {
        return fetch(`http://localhost:4545/users/${idUser}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    // Фильтруем юзеров
    filterUsers(option) {
        return fetch(`http://localhost:4545/users/?${option}=true`).then(res => res.json())
    }

    // Сортируем юзеров
    sortUsers(option) {
        return fetch(`http://localhost:4545/users/?_sort=${option.name}&_order=${option.value}`).then(res => res.json())
    }

    // Поиск юзеров
    searchUsers(str) {
        return fetch(`http://localhost:4545/users/?name_like=${str}`).then(res => res.json())
    }

}