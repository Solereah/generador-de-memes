const bdark = document.querySelector('#bdark')
const body = document.querySelector('body')
const header = document.querySelector('header')
const aside = document.querySelector('aside')
bdark.addEventListener('click', e =>{
    body.classList.toggle('darkmode')
    header.classList.toggle('darkmode')
    aside.classList.toggle('darkmode')

})

