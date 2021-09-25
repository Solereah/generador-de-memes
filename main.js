//MODO OSCURO - MODO CLARO

const lightmode = document.querySelector('#lightmode');
const body = document.querySelector('body');
lightmode.addEventListener('click', e => {
    body.classList.toggle('lightmode');
})


