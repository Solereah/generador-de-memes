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

let btnImage = document.getElementById('btn-img')
let btnText = document.getElementById('btn-text')
let panelImage = document.getElementById('panel-img')
let panelText = document.getElementById('panel-text')

btnImage.addEventListener('click', () =>{

  if(panelImage.style.display ='block'){
      panelText.style.display ='none'
  }
 
})

btnText.addEventListener('click', () =>{
if(panelImage.style.display ='block'){
    panelImage.style.display ='none'
    panelText.style.display = 'block'
}
   
})


//funciones para la imagen 

// Agregar imagen

let imageInput=document.getElementById('img-input');
let imagenCargada= document.getElementById('image');

document.getElementById('img-input').addEventListener('input',e =>{
    imagenCargada.src=imageInput.value;
    
    });
 

//descargar imagen BTN funciona pero no logro descargue la imagen

const btn_descarga = document.getElementById('btn_descarga_img')
let boxImage = document.getElementById('box')
  
 
btn_descarga.onclick = () =>{ 
    domtoimage.toBlob(boxImage).then((blob) => {
        window.saveAs(blob, "imagen_descargada_personalizada.jpg");
    });
}

    

const $=(id)=> document.getElementById(id)

const actualizarTextos=()=>{
$('top-text-parrafo').textContent=$('top-text').value
$('bottom-text-parrafo').textContent=$('bottom-text').value
}

const actualizarFuente=()=>{
   const fuente = $('font-family').value
    $('top-text-parrafo').style.fontFamily= fuente
    $('bottom-text-parrafo').style.fontFamily= fuente
}

const incializarTexto=()=>{
$('top-text').addEventListener('input',actualizarTextos)
$('bottom-text').addEventListener('input',actualizarTextos)
$('font-family').addEventListener('change',actualizarFuente)
}

const incializar=()=>{
    incializarTexto()
}
window.onload=incializar

// Funciones para el modo de mezcla de fondo de imagen
/* -------------------Todavia no funciona ---------------
document.getElementById('color').addEventListener('input', e =>{
    const inputColor = document.getElementById('color')
    inputColor.style.backgroundColor = e.target.value;

})


const backBlendMode = (event) =>{
    let efectoFondo = $('effect').value
    efectoFondo.style.backgroundBlendMode = event.target.value
}

*/


//Alinear texto 

/* ----------------No funciona todavia----------------------
const btnLeft = document.getElementById('aling_left')
const btnRight = document.getElementById('aling_right')
const btnCenter = document.getElementById('aling-center')

btnAlinearLeft.addEventListener('click', ()=>{
    
    document.getElementById('top-text').style.textAlign = 'left'
    document.getElementById('bottom-text').style.textAlign = 'left'


})*/
