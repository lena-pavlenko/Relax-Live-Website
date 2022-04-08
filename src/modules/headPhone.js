// Показ второго номера по клику на стрелку
const headPhone = () => {
    // Получение элементов
    const wrapperPhones = document.querySelector('.header-contacts');
    const accordPhone = wrapperPhones.querySelector('.header-contacts__phone-number-accord');

    // Обработчик клика через делегирование
    wrapperPhones.addEventListener('click', (e) => {

        // Проверяем класс элемента, в котором содержится стрелка
        if (e.target.closest('.header-contacts__arrow')) {
            const arrow = e.target.closest('.header-contacts__arrow');

            // Добавляем/убираем класс для переворачивания стрелки
            arrow.classList.toggle('rotate');
            // Получаем блок со вторым номером
            const hidePhone = accordPhone.querySelector('a');

            // Если стрелка содержит класс, то показываем второй номер
            if (arrow.classList.contains('rotate')) {
                accordPhone.style.top = '25px';
                hidePhone.style.opacity = '1';
            } else {
                accordPhone.style.top = '0px';
                hidePhone.style.opacity = '0';
            }
        }
    })
}

export default headPhone;