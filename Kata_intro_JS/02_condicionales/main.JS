// Estructura

//var numero = 10

//if (numero !== '10') {
  //  console.log('Es verdadero')
//} else {
  //  console.log('Es falso')
//}

// Modulo -> residuo de la división

// --------- Challenge 1 -----------
// van a preguntar al usuario un numero y van a poner en la consola
// el numero y si es par o impar
// 1: impar
// 2: par
// Que pasa si el usuario pone letra x error

//var numero_usuario = prompt('Ingresa un numero')

//var valor_numero = Number(numero_usuario)

//if (numero_usuario % 2 === 0) {
 //   console.log(numero_usuario + ': par' )
//} else if (numero_usuario % 2 === 1){
  //  console.log(numero_usuario + ': impar' )
//} else {
   // console.log('Error. La entrada no es numero. Intenta de nuevo')
//}

// juego piedra papel o tijera

var election = prompt('Vamos a jugar! Elije una opcion: \n 1: Piedra \n 2: Papel \n 3: Tijera')

var valueElection = Number(election)

var num = Math.floor((Math.random() * 3) + 1); 
console.log('Eleccion maquina: ' + num);

if (valueElection == 1 || valueElection == 2 || valueElection == 3) {
    
    if (valueElection == 1 && num == 2) {
        console.log('Elegiste Piedra y la maquina Papel. Has Perdido :(')
    } else if (valueElection == 1 && num == 3) {
        console.log('Elegiste Piedra y la maquina Tijera. Has Ganado :)')
    } else if (valueElection == 2 && num == 1) {
        console.log('Elegiste Papel y la maquina Piedra. Has Ganado :)')
    } else if (valueElection == 2 && num == 3) {
        console.log('Elegiste Papel y la maquina Tijera. Has Perdido :(')
    } else if (valueElection == 3 && num == 1) {
        console.log('Elegiste Tijera y la maquina Piedra. Has Perdido :(')
    } else if (valueElection == 3 && num == 2) {
        console.log('Elegiste Tijera y la maquina Papel. Has Ganado :)')
    } else {
        console.log('Elegiste la misma opcion de la maquina. Hay empate!!)')
    }
} 
else {
    console.log('Error. Vuelva a recargar y elija una opcion valida (numero)')
}