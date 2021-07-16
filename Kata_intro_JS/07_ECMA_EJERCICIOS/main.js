// funcion palindromo
const palindrome = (oracion) => {
    let texto = oracion.split('').reverse().join('').replaceAll(' ','')
    let sinEspacio = oracion.replaceAll(' ','').toLowerCase()
    console.log(sinEspacio)
    console.log(texto)

    if (sinEspacio === texto) {
        return true
    } else {
        return false
    }
}
console.log(palindrome('oso baboso'))
console.log(palindrome('holaaa sdfsfd'))
//


// funcion pais
const longestCountry = () => {
    let countries = ["Mexico", "Panama", "Guatemala", "El Salvador", "Estados Unidos de America"]
    let theLongest = countries[0].replaceAll(' ','');

    for (let country of countries) {
        let valueCountry = country.replaceAll(' ','')
        // console.log(country)
        if (valueCountry.length > theLongest.length) {
            theLongest = country;
        } else {
            theLongest = theLongest
        }
    }
    return theLongest
}

console.log(longestCountry())

// cambio de grados

const farenheitToCelsius = (farenheit) => {
    let valueFarenheit = Number(farenheit)
    let celsius = (valueFarenheit-32)*(5/9)
    return `${valueFarenheit} grados farenheit valen: ${celsius} grados celsius`
} 
console.log(farenheitToCelsius(72))

// imprima numeros

const numberParams = (...params) => {
    return `recibi ${params.length} parametros`
}
console.log(numberParams(10,20,'xd','javier'))