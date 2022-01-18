// Добавление юзера
const getSelect = () => {

    const select = document.getElementById('typeItem');
    let option;
    let arr = [];
    
    itemService.getItems().then(data => {
        for (let i = 0; i < data.length; i++){
            if (i > 0){
                if (data[i].type !== data[i - 1].type){
                    arr.push(data[i]);
                }
            } else {
                arr.push(data[i]);
            }
        }
        arr.forEach((item, index) => {
            option = document.createElement('option');
            option.textContent = item.type;
            select.options[index].after(option)
        });
    })
}

export default getSelect;