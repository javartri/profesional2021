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

