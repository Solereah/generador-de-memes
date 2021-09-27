//MODO OSCURO - MODO CLARO

const lightmode = document.querySelector('#lightmode');
const body = document.querySelector('body');
const textoClaroOscuro = document.getElementById('text-b-w')

lightmode.addEventListener('click',e => {
  body.classList.toggle('lightmode');
/* no funciona el cambio de texto todavia
    if(textoClaroOscuro.innerHTML === "Modo claro"){
      textoClaroOscuro.innerHTML = "Modo ocuro";
     
    } else {
      textoClaroOscuro.innerHTML = "Modo Claro";
    
    }   
    
})*/




  



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
const meme = document.getElementById('box')

urlInput.oninput = () => {
  imagenCargada.style.backgroundImage = `url("${urlInput.value}")`
}

//Funcion descarga del meme

btnImgCargada.onclick = () => {
    domtoimage.toBlob(meme).then((blob) => {
        window.saveAs(blob, "meme_descarga.jpg");
    });
};

//funcion para el blend entre color y los filtros del fondo de la imagen
const blendFondo=()=>{

  //const colorBlend = document.getElementById('blend-mode-effect')
    $('blend-mode-effect').style.backgroundBlendMode = evento.target.value

  
  }

 
/*
 agregar imagen 
const imageInput = document.getElementById('image-input')
const imagenCargada = document.getElementById('imagen-meme')
const imgDescarga = document.querySelector.toString('')
document.getElementById('image-input').addEventListener('input',e=>{
    imagenCargada.src = imageInput.value;

});*/


//funciones para el texto

const $=(id)=> document.getElementById(id)

const actualizarTextos=()=>{
$('top-text-parrafo').textContent=$('top-textarea').value
$('bottom-text-parrafo').textContent=$('bottom-textarea').value
}

//const actualizarContorno = () =>{
//    const contFuente = $(contorno)
//    $('top-text-parrafo').style.textShadow = '5px 5px 1px #000'
//    $('bottom-text-parrafo').style.textShadow ='5px 5px 1px #000'


//}

const actualizarContorno = (contorno) => {
 // const grosor = '2px'

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
//$('contorno_oscuro').addEventListener('click',actualizarContorno('oscuro'))
 $('contorno_ninguno').addEventListener('click', () => {
    actualizarContorno('ninguno')
  })

  $('contorno_claro').addEventListener('click', () => {
    actualizarContorno('claro')
  })
 $('contorno_oscuro').addEventListener('click', () => {
    actualizarContorno('oscuro')
  })
}

const incializar=()=>{
    incializarTexto()
   
    //$('btn_descarga_img').addEventListener('click', descargarMeme)
    
    
}
window.onload=incializar

