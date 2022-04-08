import render from "./render";

const sortItems= () => {
    const thChild = document.querySelectorAll('.table-th');

    // Создание переменной для отслеживания состояния сортировки
    let isSort = false;

    const sortData = (title) => {

        itemService.sortItems({
            name: title,
            value: isSort ? 'asc' : 'desc'
        }).then(items => {
            render(items);
        }).catch(error => console.log(error.message))
    }


    // Обработка клика
    thChild.forEach(th => {
        th.addEventListener('click', (e) => {

            if (th.closest('.th-id')) {
                sortData('id');
                isSort = !isSort;
            }
            if (th.closest('.th-type')) {
                sortData('type');
                isSort = !isSort;
            }
            if (th.closest('.th-name')) {
                sortData('name');
                isSort = !isSort;
            }
            if (th.closest('.th-units')) {
                sortData('units');
                isSort = !isSort;
            }
            const arrow = th.querySelector('.icon-sort');
            arrow.classList.toggle('rotate');
        })
    })
}

export default sortItems;