
// var titulo = document.getElementById('titulo')
// var parrafo = document.getElementById('parrafo')
// var boton = document.getElementById('boton')
// var input = document.getElementById('input')
// var respuesta = document.getElementById('respuesta')

// console.log(titulo)
// console.log(parrafo)




// function cambio () {
//     // pinta en el navegador 
//     titulo.innerHTML = 'Soy un nuevo titulo'
//     parrafo.innerHTML = 'Soy un nuevo parrafo'
//     respuesta.innerHTML = input.value
// }



var si = document.getElementById('si')
var no = document.getElementById('no')
var enviar = document.getElementById('enviar')
var imagen = document.getElementById('imagen')
var texto = document.getElementById('texto')

function cambio () {

    if (si.checked) {
        imagen.src = 'https://i.blogs.es/58a778/pizza-hawaiana3/840_560.jpg'
        texto.innerHTML = 'Deliciosa decisión. Tu pizza con piña ya fue tomada'
    } 
    else if (no.checked) {
        imagen.src = 'https://www.recetin.com/wp-content/uploads/2011/07/pizza_peperoni-598x400.jpg'
        texto.innerHTML = 'Tú te lo pierdes. Tu pizza sin piña ya fue tomada'
    }
}

enviar.addEventListener('click', cambio)

