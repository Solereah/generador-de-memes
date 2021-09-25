//MODO OSCURO - MODO CLARO

const lightmode = document.querySelector('#lightmode');
const body = document.querySelector('body');
lightmode.addEventListener('click', e => {
    body.classList.toggle('lightmode');
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

//funciones de imagen

// agregar imagen 
const imageInput = document.getElementById('image-input')
const imagenCargada = document.getElementById('imagen-meme')
//const imgDescarga = document.querySelector.toString('')
document.getElementById('image-input').addEventListener('input',e=>{
    imagenCargada.src = imageInput.value;

});

//descargar imagen BTN funciona pero no logro descargue la imagen

const btn_descarga = document.getElementById('btn_descarga_img')
const boxImage = document.getElementById('box')
  
 
btn_descarga.onclick = () =>{ 
    domtoimage.toBlob(imagenCargada).then((blob) => {
        window.saveAs(blob, "imagen_descargada_personalizada.jpg");
    });
}

//funciones para el texto

const $=(id)=> document.getElementById(id)

const actualizarTextos=()=>{
$('top-text-parrafo').textContent=$('top-textarea').value
$('bottom-text-parrafo').textContent=$('bottom-textarea').value
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
}

const incializar=()=>{
    incializarTexto()
}
window.onload=incializar

