const accordeon = () => {
    const questions = document.querySelectorAll('.title_block');

    questions.forEach(question => {

        question.addEventListener('click', () => {
            question.classList.toggle('msg-active');
        })
    })

}

export default accordeon;