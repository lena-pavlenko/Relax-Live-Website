const reg = () => {
    
    const form = document.querySelector('form');
    let inputName = document.getElementById('name');
    let inputPass = document.getElementById('type');
    const textWarnings = form.querySelectorAll('.text-warning');

    inputPass.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[а-яА-я\-\ ]/g, '');
    })

    const getData = () => {
        return fetch('../db/dbUsers.json')
            .then(res => res.json())
    }

    function setCookie(name, value, options = {}) {

        options = {
            path: '/',
            // при необходимости добавьте другие значения по умолчанию
            ...options
        };
        
        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }
        
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        
        for (let optionKey in options) {
                updatedCookie += "; " + optionKey;
                let optionValue = options[optionKey];
                if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }
        
        document.cookie = updatedCookie;
    }

    const clearForm = () => {
        inputName = document.getElementById('name');
        inputPass = document.getElementById('type');
        inputName.value = '';
        inputPass.value = '';
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let valueName = inputName.value.trim();
        let valuePass = inputPass.value.trim();

        let newUser = {};
        newUser.name = valueName;
        newUser.password = valuePass;

        getData()
            .then(data => {
                data.forEach(user => {
                    if (newUser.name !== user.name) {
                        textWarnings[0].classList.add('active');
                        clearForm();
                    } else {
                        textWarnings[0].classList.remove('active');
                        if (newUser.password !== user.password) {
                            textWarnings[1].classList.add('active');
                            clearForm();
                        } else {
                            setCookie('userName', newUser.name, {secure: true, 'max-age': 3600 * 24});
                            setCookie('userPassword', newUser.password, {secure: true, 'max-age': 3600 * 24});
                            setTimeout(function(){
                                window.location.href = '/admin/table.html';
                            }, 500);
                            
                        }
                    } 
                });
                
                
            })
    })
    
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    let cookieName = getCookie('userName');
    getData().then(data => {
        
        data.forEach(user => {
            if (window.location.pathname === '/admin/table.html') {
                
                if (cookieName === user.name) {
                    return true
                } else {
                    window.location.href = '/admin/index.html';
                }
            
            }
        });
    })  
}

reg();