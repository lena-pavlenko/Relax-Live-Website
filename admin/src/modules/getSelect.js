// Добавление юзера
const getSelect = () => {

    const select = document.getElementById('typeItem');
    let option;
    let arr = [];

    itemService.getItems().then(data => {
        for (let i = 0; i < data.length; i++){
            let flag = false;
            if (arr.length > 0) {
                for (let j = 0; j < arr.length; j++) {
                    if (data[i].type === arr[j].type) {
                        flag = true;
                        break;
                    }
                }
            }

            if (flag === false) {
                arr.push(data[i]);
            }
        }
        arr.forEach((item, index) => {
            option = document.createElement('option');
            option.textContent = item.type;
            select.options[index].after(option)
        });
    }).catch(error => console.log(error.message))
}

export default getSelect;