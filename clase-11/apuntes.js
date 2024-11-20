// MOSTRAR DATOS EN LA CONSOLA

console.log('Mi primer JS') // Este es un comentario de linea

/**
 * Este es un comentario multilinea
 */

// console.log que este nos va a servir para mostrar 
// variables o datos en la consola del navegador

console.info('Estoy informando')
console.error('Esto informa un error')
console.warn('No llega a ser un error, mas bién, una advertencia')
// console.table(['hola', 'mundo'])


// TIPOS DE DATOS PRIMITIVOS
const CONSTANTE = 3.14 //Number

let edad = 36 //Number

const NOMBRE = 'Luis' //string

let casado = true // booleano

// TIPOS DE DATOS QUE AYUDAN A MANEJAR ALGUNOS ERRORES
let indefinido = undefined 

let nulo = null

// ENTRADA DE DATOS

// let input = prompt('Ingrese algún dato')
// console.log(input)
// console.log(50)

// OPERACIONES CON DIFERENTES DATOS

let num1 = prompt('Ingrese un número')
let num2 = prompt('Ingrese otro número')

console.log(`num1: ${num1} y num2: ${num2}`)

// Parseo (No es otra cosa que convertir un dato en otro dato)
let suma = Number(num1) + Number(num2) //Esta es una forma
let resto = Number(num1) % Number(num2)

let num3 = Number(prompt('Ingrese un tercer número')) //Esta es otra forma
// De convertir un string a número

console.log(`La suma entre num1 y num2 es: ${suma}`)
console.log(`El resto entre num1 y num2 es: ${resto}`)
console.log(`El número 3 es: ${num3}`)
console.log('El número 3 es: ${num3}') // Esto muestra que debemos usar comillas invertidas
console.log("El número 3 es: ${num3}") // Esto muestra que debemos usar comillas invertidas


