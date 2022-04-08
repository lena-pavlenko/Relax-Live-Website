import { ItemService } from "../admin/src/modules/itemService";
import getSelect from "../admin/src/modules/getSelect";
import filterItems from "../admin/src/modules/filterItems";
import addItems from "../admin/src/modules/addItems";
import editItems from "../admin/src/modules/editItems";
import removeItems from "../admin/src/modules/removeItems";
import render from "../admin/src/modules/render";
import sortItems from "../admin/src/modules/sortItems";
import searchItems from "../admin/src/modules/searchItems";

// Назначаем экземпляр класса как свойство window
window.itemService = new ItemService;

// Получаем данные из базы и отрисовываем таблицу
itemService.getItems().then(data => {
    render(data);
})

getSelect()
filterItems();
addItems();
editItems();
removeItems();
sortItems();
searchItems();

        


