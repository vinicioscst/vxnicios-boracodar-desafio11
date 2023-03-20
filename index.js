let view = document.querySelector('.change-view')
let password = document.querySelector('#password')


view.addEventListener('click', function() {

    if(password.type === 'password') {
        password.type = 'text'
        view.src = './assets/eye.png'
        view.alt = 'Ocultar senha'
    } else {
        password.type = 'password'
        view.src = './assets/eye-off.png'
        view.alt = 'Mostrar senha'
    }

})