import render from "./render";

// Фильтрация юзеров
const filterItems = () => {
    const select = document.getElementById('typeItem');

    select.addEventListener('change', () => {

        itemService.getItems().then(items => {
            if (select.options[0]) {
                render(items)
            }
            
            items.forEach(item => {
                if (select.options[select.selectedIndex].textContent === item.type) {
                    itemService.filterItems(item.type).then(items => {
                        render(items);
                    })
                }
            });
            
        }).catch(error => console.log(error.message))
    }) 
}

export default filterItems;