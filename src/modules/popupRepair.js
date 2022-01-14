
// Открытие/закрытие модального окна Полный список услуг и цен
const popupRepair = () => {
    // Получаем элементы со страницы
    const links = document.querySelectorAll('.link-list');
    const popupRepair = document.querySelector('.popup-repair-types');
    const popupMenu = document.querySelector('.popup-menu');
    const hiddenMenu = popupMenu.querySelector('.popup-dialog-menu');
    
    // Проходим циклом по ссылкам
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Добавляем стили для открытия модального окна и закрытия меню
            popupRepair.classList.add('show-popup');
            popupMenu.classList.remove('show-popup');
            hiddenMenu.classList.remove('show-menu');

            // Закрываем модальное окно по клику на крестик и вне контента
            popupRepair.addEventListener('click', (e) => {
                if (e.target.closest('.close') || !e.target.closest('.popup-dialog-repair-types')) {
                    popupRepair.classList.remove('show-popup')
                }
            })
        })
    })
}

export default popupRepair;