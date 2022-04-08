
// Открытие/закрытие модального окна Полный список услуг и цен
const showPopup = (myLinks, myModal, content = '.popup-dialog') => {
    const links = document.querySelectorAll(myLinks);
    const modal = document.querySelector(myModal);
    
    const popupMenu = document.querySelector('.popup-menu');
    const hiddenMenu = popupMenu.querySelector('.popup-dialog-menu');
    
    // Проходим циклом по ссылкам
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Добавляем стили для открытия модального окна и закрытия меню
            modal.classList.add('show-popup');
            popupMenu.classList.remove('show-popup');
            hiddenMenu.classList.remove('show-menu');

            // Закрываем модальное окно по клику на крестик и вне контента
            modal.addEventListener('click', (e) => {
                if (e.target.closest('.close') || !e.target.closest(content)) {
                    modal.classList.remove('show-popup')
                }
            })
        })
    })
}

export default showPopup;