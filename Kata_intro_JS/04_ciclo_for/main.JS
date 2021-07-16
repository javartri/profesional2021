// ciclo for

//for ( i=1; i<=100; i++ ){
  //  console.log(i)
//}

// 100 -> 0 de 1 en 1
//for (i = 100; i >= 0; i=i-1){
 //   console.log(i)
//}

// 0 -> 500 de 50 en 50
//for (j = 0; j <= 500; j=j+50) {
//    console.log(i)
//}

// 100 -> -100 de 10 en 10
//for (k = 100; k >= -100; k=k-10) {
//    console.log(i)
//}

// 1. recorrer los numeros de 1 - 100
// y decir si son pares o impares

for (j = 1; j <= 100; j=j+1) {
    if (j % 2 === 0) {
        console.log(j + ': par')
    } else {
        console.log(j + ': impar')
    }    
}

// ------> Fizz Buzz <------
//  recorrer de 1 -> 100
// si el numero es divisible entre 3 --> numero + 'fizz'
// si el numero es divisible entre 5  --> numero + 'buzz'
// si el numero es divisible entre 3 y 5  --> numero + 'fizzbuzz'
// 1
// 2
// 3 fizz
// 4
// 5 buzz
// ...
// 15 fizzbuzz
// :no_entry_sign:No se hace:no_entry_sign:
// 15 fizz
// 15 buzz
// 15 fizzbuzz

for (k = 1; k <= 100; k++) {
    if ( (k % 3 === 0) && (k % 5 === 0)) {
        console.log(k + ' fizzbuzz')
    } else if (k % 3 === 0) {
        console.log(k + ' fizz')
    } else if (k % 5 === 0) {
        console.log(k + ' buzz')
    } else {
        console.log(k)
    }
}



