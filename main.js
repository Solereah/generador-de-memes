'use strict'

//MODO OSCURO - MODO CLARO

const lightmode = document.querySelector('#lightmode');
const body = document.querySelector('body');

lightmode.onclick =()=> {
  body.classList.toggle('lightmode');

  let textoClaroOscuro = document.querySelector(".text-claro-oscuro");
  if (textoClaroOscuro.textContent === "Modo Claro"){
      textoClaroOscuro.textContent = "Modo Oscuro"
  } else {
    textoClaroOscuro.textContent = "Modo Claro"
  }
}


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

//funciones de carga de imagen

const imagenCargada = document.getElementById("imagen-meme")
const btnImgCargada = document.getElementById("btn_descarga_img")
const urlInput = document.getElementById("image-input")
const meme = document.getElementById("box")

urlInput.oninput = () => {
  imagenCargada.style.backgroundImage = `url("${urlInput.value}")`
}

//Funcion descarga del meme

btnImgCargada.onclick = () => {
    domtoimage.toBlob(meme).then((blob) =>{
        window.saveAs(blob, "meme_descarga.jpg");
    });
    
};



//funcion para el blend entre color y los filtros del fondo de la imagen

document.getElementById('blend-mode-effect').onchange = (event) =>{

imagenCargada.style.backgroundBlendMode = event.target.value
}

/*
const modoBlend =(event) => {
  imagenCargada.style.backgroundBlendMode = 
  document.getElementById('blend-mode-effect').selectedOptions[0].innerHTML;
}


const textoModoBlend = (event) => {
    $('texto-color').innerText = event.target.value.upperCase()
    imagenCargada.style.backgroundColor = event.target.value
}



*/




   // este es el id de la etiqueta select $('blend-mode-effect').style.backgroundBlendMode = evento.target.value
   //id del div donde se carga la imagen $('imagen-meme').style.backgroundBlendMode = evento.target.value

  


 
/*
 agregar imagen 
const imageInput = document.getElementById('image-input')
const imagenCargada = document.getElementById('imagen-meme')
const imgDescarga = document.querySelector.toString('')
document.getElementById('image-input').addEventListener('input',e=>{
    imagenCargada.src = imageInput.value;

});*/

// Filtros para la imagen no funcionan todavia
/* 
let escalaGrises = document.getElementById('grises').value

escalaGrises.addEventListener('input',e=>{
  imagenCargada.style.filter = "greyscale("+ escalaGrises * 10 +"%)"
})
*/


//funciones para el texto

const $=(id)=> document.getElementById(id)

const actualizarTextos=()=>{
$('top-text-parrafo').textContent=$('top-textarea').value
$('bottom-text-parrafo').textContent=$('bottom-textarea').value
}


const actualizarContorno = (contorno) => {
 

  if (contorno === 'ninguno') {
    $('top-text-parrafo').style.textShadow = 'none'
    $('bottom-text-parrafo').style.textShadow = 'none'
  } else if (contorno === 'claro') {
    $('top-text-parrafo').style.textShadow = `1px 1px 2px #9b9b9b, 0 0 1em #9b9b9b, 0 0 0.2em #9b9b9b`
    $('bottom-text-parrafo').style.textShadow = `1px 1px 2px #9b9b9b, 0 0 1em #9b9b9b, 0 0 0.2em #9b9b9b`
  } else if (contorno === 'oscuro') {
    $('top-text-parrafo').style.textShadow = `1px 1px 2px #000, 0 0 1em #000, 0 0 0.2em #000`
    $('bottom-text-parrafo').style.textShadow = `1px 1px 2px #000, 0 0 1em #000, 0 0 0.2em #000`
  }
}

const actualizarFuente=()=>{
   const fuente = $('font-family').value
    $('top-text-parrafo').style.fontFamily= fuente
    $('bottom-text-parrafo').style.fontFamily= fuente
}

const incializarTexto=()=>{
$('top-textarea').addEventListener('input',actualizarTextos)
$('bottom-textarea').addEventListener('input',actualizarTextos)
$('font-family').addEventListener('change',actualizarFuente)

 $('contorno_ninguno').addEventListener('click', () => {
    actualizarContorno('ninguno')
  })

  $('contorno_claro').addEventListener('click', () => {
    actualizarContorno('claro')
  })
 $('contorno_oscuro').addEventListener('click', () => {
    actualizarContorno('oscuro')
  })
  $('size_left').addEventListener('click', () => {
    alinearTextos('left')
  })

  $('size_center').addEventListener('click', () => {
    alinearTextos('center')
  })
 $('size_right').addEventListener('click', () => {
    alinearTextos('right')
  })
}

const alinearTextos = (alineacion) => {
  $('top-text-parrafo').style.textAlign = alineacion
  $('bottom-text-parrafo').style.textAlign = alineacion
}

  const checkboxSup = document.getElementById('top')
  const box_text_sup = document.getElementById('top-text-parrafo')
  const checkboxInf = document.getElementById('bot')
  const box_text_inf = document.getElementById('bottom-text-parrafo')
  const checkboxSup_Inf = document.getElementById('bot_transp')
  

  checkboxSup.addEventListener('change', function(){
    box_text_sup.classList.toggle('ocultar-sup')

  });
  checkboxInf.addEventListener('change', function(){
    box_text_inf.classList.toggle('ocultar-inf') 
  });
  checkboxSup_Inf.addEventListener('change', function(){
    box_text_inf.classList.toggle('transparente')
    box_text_sup.classList.toggle('transparente')
    
  });




const incializar=()=>{
    incializarTexto()
      
}
window.onload=incializar

