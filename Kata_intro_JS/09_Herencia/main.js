// clase padre o superclase
class Mascota {
    constructor(nombre, patas){
        this.nombre = nombre
        this.patas = patas
    }

    comer(){
        return `${this.nombre}, esta comiendo`
    }

}

// clase hija o subclase

// extends es decir que forma parde de 
class Michi extends Mascota {
    constructor (nombre, patas, raza){
        // super -> hace referencia a la clase padre o super clase
        super(nombre, patas)
        this.raza = raza
    }

    ronronear(){
        return `${this.nombre} esta hacinendo: grrrrrrr awa`
    }
}

class LomitoSuabe extends Mascota {
    constructor (nombre, patas, raza){
        // super -> hace referencia a la clase padre o super clase
        super(nombre, patas)
        this.raza = raza
    }

    ammsiedad(){
        return `${this.nombre}: boooooooiggg`
    }
}

const gatitoPerruno = new Michi('Michito uwu', 4, 'persa')
const lomitoAmsioso = new LomitoSuabe('Chemmss', 4, 'perrito panzon y sentado')
console.log(gatitoPerruno)
console.log(gatitoPerruno.comer())
console.log(gatitoPerruno.ronronear())
console.log(gatitoPerruno.nombre)
console.log(gatitoPerruno.patas)


console.log(lomitoAmsioso.nombre)
console.log(lomitoAmsioso.ammsiedad())
console.log(lomitoAmsioso.raza)
console.log(lomitoAmsioso.comer())


// ---------------> Challenge <----------------
// 1. Hacer superclase Maestro y subclases Maestro de Física y 
//    Maestro de Música y a cada uno asignarle su materia y 
//    calcular su promedio de grupo a partir de calificaciones   
//    (puedes usar arreglos). El maestro de física tiene un 
//    atributo "antigüedad" que guarda un valor numérico, 
//    mientras que el maestro de música tiene un atributo "edad"
//    también guardando un valor numérico.

class Maestro {
    constructor(materia) {
        this.materia = materia
    }

    promedioGrupo(calificaciones) {
        let suma = 0
        for (let i=0; i < calificaciones.length; i++) {
            suma = suma + calificaciones[i]
        }
        return `El promedio del grupo ${this.materia} es: ${suma/calificaciones.length}`
    }
}

class MaestroFisica extends Maestro {
    constructor(materia, antiguedad) {
        super(materia)
        this.antiguedad = antiguedad
    }
}

class MaestroMusica extends Maestro {
    constructor(materia, edad) {
        super(materia)
        this.edad = edad
    }
}

const profesor1 = new MaestroFisica('Fisica',2)
const profesor2 = new MaestroMusica('Violin',23)
console.log(profesor1.promedioGrupo([1,2,3]))
console.log(profesor2.promedioGrupo([2,1,4]))

// 2.- Crear la clase construcción que hereda a otras dos 
//     clases "casa" y "edificio". 
//     a. Sus atributos son: numPuertas, numVentanas, numPisos,
//        direccion, altura, largo y ancho del terreno.
//     b. Cada uno tiene un método que regresa los metros 
//        cuadrados
//     c. Un método debe regresar la direccion
//     d. Un método debe permitir modificar la direccion
//     e. Buscar la mejor manera de aprovechar la herencia

class construccion {
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho) {
        this.numPuertas = numPuertas
        this.numVentanas = numVentanas
        this.numPisos = numPisos
        this.direccion = direccion
        this.altura = altura
        this.largo = largo
        this.ancho = ancho
    }

    metrosCuadrados() {
        return `Tiene ${this.largo*this.ancho} metros cuadrados`
    }

    devolverDireccion() {
        return `La direccion es: ${this.direccion}`
    }

    modificarDireccion(nuevaDireccion) {
        this.direccion = nuevaDireccion
        return `La nueva direccion es: ${this.direccion}`
    }
}

class casa extends construccion {
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho) {
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho)
    }
}

class edificio extends construccion {
    constructor(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho) {
        super(numPuertas, numVentanas, numPisos, direccion, altura, largo, ancho)
    }
}

const casita = new casa(4, 8, 1, 'cra 12', 3, 25, 20)
const edificioNuevo = new edificio(50, 140, 120, 'calle 98A', 150, 140, 80)

console.log(casita)
console.log(casita.metrosCuadrados())
console.log(edificioNuevo.devolverDireccion())
console.log(casita.modificarDireccion('calla 12123'))