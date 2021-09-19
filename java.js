'use strict'

//Cambio de modo claro a oscuro

const bdark = document.querySelector('#bdark')
const darkBody = document.querySelector('body')
const darkHeader = document.querySelector('header')
const darkAside = document.querySelector('aside')
const darkUrl = document.querySelector('#url')


//Solucionar problemas con los buttons del header porque no cambian de color en modo oscuro
bdark.addEventListener('click', e =>{
    darkBody.classList.toggle('darkmode')
    darkHeader.classList.toggle('darkmode')
    darkAside.classList.toggle('darkmode')
   


})
//Cambio de Aside de imagen y Aside del texto

/*const botonImagen = document.getElementById('btn-img')

botonImagen.addEventListener('click', e =>{
    const panelImagen = document.querySelector('panel-img')
    panelImagen.classList.toggle('oculto')
})*/





//let asidePanel = document.querySelector('panel')

/*let ocultarPanel = document.querySelector('panel')

ocultarPanel.addEventListener('click', e =>{
    ocultarPanel.classList.toggle('oculto')
}
)*/

/* 
document.querySelector('panel').addEventListener("click", e =>{
    let asideImagen = document.querySelector('panel-img')
    let asideTexto = document.querySelector('panel-text')
    
    asideImagen.classList.toggle('oculto')
    asideTexto.classList.toggle('oculto')



})
*/
//funciones para la imagen 

// Agregar imagen
    document.getElementById('img-input').addEventListener('input',e =>{
    let imageInput=document.getElementById('img-input');
    let image= document.getElementById('image');
    
    
    image.src=imageInput.value;
    
    });



