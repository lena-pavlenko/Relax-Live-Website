const sendForm = (forms = document.querySelectorAll('form')) => {

    const modal = document.querySelector('.popup-thank');

    modal.addEventListener('click', (e) => {
        if (e.target.closest('.close') || !e.target.closest('.feedback-wrap')) {
            modal.style.visibility = 'hidden';
        }
    })

    const checkForm = (form) => {
        const inputs = form.querySelectorAll('input');
        const errors = {};

        inputs.forEach(input => {
            if (input.value === '' || (input.type == 'checkbox' && input.checked === false)) {
                errors[input.name] = true;

                if (input.type !== 'checkbox') {
                    input.classList.add('wrong');
                    
                }
                if (input.type === 'checkbox') {
                    input.labels[0].style.border = '1px solid red';
                }
            } else {
                errors[input.name] = false;

                if (input.type !== 'checkbox') {
                    input.classList.remove('wrong');
                }
                if (input.type === 'checkbox') {
                    input.labels[0].style.border = '1px solid #322823';
                }
            }
        })

        return errors;
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())
    }

    const sendingForm = (form) => {
        const formErrors = checkForm(form);

        for (let key in formErrors) {
            if (formErrors[key] === true){
                return false;
            }
        }

        const formData = new FormData(form);
        const userData = {};

        formData.forEach((val, key) => {
            userData[key] = val.trim();
        })


        sendData(userData).then(data => {
            modal.style.visibility = 'visible';
            setTimeout(() => {
                modal.style.visibility = 'hidden';
            }, 2000)
            form.reset();
        }).catch(error => {
            alert('Произошла ошибка. пока что тестовое окно')
        })
    }

    forms.forEach(form => {

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            sendingForm(form);
        })
    })
}

export default sendForm;