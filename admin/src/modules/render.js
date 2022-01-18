// Отрисовка таблицы
const render = (items) => {
    // Получаем контентную часть таблицы
    const tBody = document.getElementById('tbody');

    // Очищаем таблицу
    tBody.innerHTML = '';

    // Проходимся циклом по полученным данным
    items.forEach(item => {
        // Вставляем в таблицу строки с юзерами
        tBody.insertAdjacentHTML('beforeend', `
            <tr class="table__row" data-key="${item.id}">
                <td class="table__id table__cell">${item.id}</td>
                <td class="table-type table__cell">${item.type}</td>
                <td class="table-name table__cell">${item.name}</td>
                <td class="table-units table__cell">${item.units}</td>
                <td class="table-cost table__cell">${item.cost}</td>
                <td>
                    <div class="table__actions table__cell">
                        <button class="button action-change"><span class="svg_ui"><svg class="action-icon_change"><use xlink:href="./img/sprite.svg#change"></use></svg></span><span>Изменить</span>
                        </button>
                        <button class="button action-remove"><span class="svg_ui"><svg class="action-icon_remove"><use xlink:href="./img/sprite.svg#remove"></use></svg></span><span>Удалить</span>
                        </button>
                    </div>
                </td>
            </tr> `)
    });
}

export default render;