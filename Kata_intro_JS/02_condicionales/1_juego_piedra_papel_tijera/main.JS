// juego piedra papel o tijera

var electionPlayerOne = prompt('JUGADOR 1 \n Vamos a jugar! Elije una opcion: \n 1: Piedra \n 2: Papel \n 3: Tijera')
var electionPlayerTwo = prompt('JUGADOR 2 \n Vamos a jugar! Elije una opcion: \n 1: Piedra \n 2: Papel \n 3: Tijera')
var valueElectionOne = Number(electionPlayerOne)
var valueElectionTwo = Number(electionPlayerTwo)

if (valueElectionOne == 1 || valueElectionOne == 2 || valueElectionOne == 3 || valueElectionTwo == 1 || valueElectionTwo == 2 || valueElectionTwo == 3) {
    
    if (valueElectionOne == 1 && valueElectionTwo == 2) {
        console.log('Jugador 1 eligio Piedra y jugador 2 eligio Papel. Ganador jugador 2, perdedor jugador 1')
    } else if (valueElectionOne == 1 && valueElectionTwo == 3) {
        console.log('Jugador 1 eligio Piedra y jugador 2 eligio Tijera. Ganador jugador 1, perdedor jugador 2')
    } else if (valueElectionOne == 2 && valueElectionTwo == 1) {
        console.log('Jugador 1 eligio Papel y jugador 2 eligio Piedra. Ganador jugador 1, perdedor jugador 2')
    } else if (valueElectionOne == 2 && valueElectionTwo == 3) {
        console.log('Jugador 1 eligio Papel y jugador 2 eligio Tijera. Ganador jugador 2, perdedor jugador 1')
    } else if (valueElectionOne == 3 && valueElectionTwo == 1) {
        console.log('Jugador 1 eligio Tijera y jugador 2 eligio Piedra. Ganador jugador 2, perdedor jugador 1')
    } else if (valueElectionOne == 3 && valueElectionTwo == 2) {
        console.log('Jugador 1 eligio Tijera y jugador 2 eligio Papel. Ganador jugador 1, perdedor jugador 2')
    } else {
        console.log('Elegiste la misma opcion de la maquina. Hay empate!!)')
    }
} 
else {
    console.log('Error. Vuelva a recargar y elija una opcion valida (numero)')
}

