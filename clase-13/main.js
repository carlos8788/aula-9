// const numeros = [5, 9, -10, 3]
// console.log(numeros)
// console.log(numeros.sort().reverse())

// const divRojo = document.querySelector('.rojo')

// let clase = prompt('Indique la clase de CSS que quiere')

// if (divRojo.classList.contains(clase)){
//     divRojo.style.backgroundColor = 'red'
//     divRojo.innerText = 'texto rojo'
// }else{
//     divRojo.innerText = 'Este div no contiene la clase indicada'
// }

// let edad = 10

// // Condicionales
// if (edad > 18) {
//     console.log('es mayor de edad')
// } else {
//     console.log('no es mayor de edad')
// }

// Operaciones lógicas

// AND

// es de noche y está lloviendo --> true (Salta)
// es de noche y está lloviendo --> false (México)
// tiene 8 años y es el mayor de sus hnos ---> false (Juan, 12 años)

// console.log((2 < 3) && (20 > 16))

// OR

// es de noche o está despejado --> true 
// console.log((2 > 3) || (20 < 16))

// NOT !

// console.log(!(2<3))


// let edad = prompt('Ingrese su edad')

// edad = Number(edad)
// console.log(`Tu edad es: ${edad}`)

// if (edad > 18) {
//     console.log('sos mayor de edad')
// } else {
//     console.log('no sos mayor de edad')
// }

// let cantidadDePuertas = prompt('Indique la cantidad de puertas de su auto')

// if (Number(cantidadDePuertas) === 4){
//     console.log('el auto es apto para taxi')
// }else{
//     console.log('no es apto para taxi')
// }



// switch 
// let dia = prompt('Indique un día de la semana')

// switch (dia) {
//     case 'lunes':
//         console.log('Monday')
//         break
//     case 'martes':
//         console.log('Tuesday')
//         break
//     case 'miercoles':
//         console.log('Wednesday')
//         break
//     case 'jueves':
//         console.log('Thursday')
//         break
//     case 'viernes':
//         console.log('Friday')
//         break
//     case 'sabado':
//         console.log('Saturday')
//         break
//     case 'domingo':
//         console.log('Sunday')
//         break
//     default:
//         console.log('No indicaste un día válido')
// }

for (let i = 0 ; i <= 10 ; i++) {
    console.log(`El valor de i es: ${i}`)
}
