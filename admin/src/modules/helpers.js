// Функция для задержки отработки функции
const debounce = (func, ms = 300) => {

    // Идентификатор для setTimeout
    let timer;

    // Возвращаем функцию со всеми аргументами
    return (...args) => {
        // Очищаем таймер
        clearTimeout(timer);

        // Запускаем таймер и привязываем функцию к контексту вызова
        timer = setTimeout(() => {func.apply(this, args)}, ms);
    }
}

const validity = (input, reg) => {
    input.addEventListener('input', () => {
        input.value = input.value.replace(reg, '');
    })
}

export {validity};