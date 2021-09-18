'use strict'

//Cambio de modo claro a oscuro

const bdark = document.querySelector('#bdark')
const darkBody = document.querySelector('body')
const darkHeader = document.querySelector('header')
const darkAside = document.querySelector('aside')


//Solucionar problemas con los buttons del header porque no cambian de color en modo oscuro
bdark.addEventListener('click', e =>{
    darkBody.classList.toggle('darkmode')
    darkHeader.classList.toggle('darkmode')
    darkAside.classList.toggle('darkmode')


})

