// Аккордеон
const accordeon = () => {
    // Получаем элементы
    const questions = document.querySelectorAll('.title_block');

    // Перебираем массив элементов
    questions.forEach(question => {

        // Назначем обработчик на каждый элемент и добавляем/удаляем класс по клику
        question.addEventListener('click', () => {
            question.classList.toggle('msg-active');
        })
    })
}

export default accordeon;