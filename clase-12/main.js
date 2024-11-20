let nombre = 'luis'
console.log(nombre) // () paréntesis

// let luis = {} // llaves

// let array = [] // corchetes

// Objeto literal
let luis = {
    apellido: 'Pérez',
    aula: [9, 10],
    rol: 'Profesor'
}

let objeto = { num1: 1, num2: 2, num3: 3, num4: 4 }

let mascotas = ['sunny', 'juana', 'pelusa', 'bobby']


let alumnos = ['julian', 'mauri', 'agustin']

let aula9_10 = []

let mauricio = {
    apellido: 'Colombo',
    aula: 10,
    rol: 'alumno'
}

let julian = {
    apellido: 'Saccinelli',
    aula: 10,
    rol: 'alumno'
}

let agustin = {
    apellido: 'Barreira',
    aula: 9,
    rol: 'alumno'
}

console.log(agustin)

aula9_10.push(mauricio)
aula9_10.push(julian)
aula9_10.push(agustin)
aula9_10.push(luis)

console.log(aula9_10)


aula9_10.push({
    apellido: 'Almazan',
    aula: 9,
    rol: 'alumno'
})

console.log(aula9_10)


// Array
let letras = ["A", "B", "C"] // Array homogeneo -> Son todas letras mayúsculas

let lista = [10, 'algo', false, 'otra cosa'] // Array heterogeneo -> Almacena datos diferentes

// Ejemplo de array homogeneo
let productosFiambreria = [
    { nombre: "Jamón serrano", precio: 15.50 },
    { nombre: "Salame", precio: 12.30 },
    { nombre: "Chorizo", precio: 10.00 },
    { nombre: "Queso azul", precio: 20.00 },
    { nombre: "Mortadela", precio: 8.50 },
    { nombre: "Panceta", precio: 14.00 },
    { nombre: "queso de cabra", precio: 18.00 },
    { nombre: "Paleta", precio: 9.00 },
    { nombre: "Queso cremoso", precio: 6.50 },
    { nombre: "Salchichón", precio: 11.20 }
];

console.log(productosFiambreria);


let impresoras = [];

let impresoraEpson = {
    marca: 'Epson',
    nombe: 'Impresora multifunción a color Epson EcoTank L3250 con wifi 220V',
    precios: {
        unPago: 455500,
        enCuotas: 544554
    },
    modelo: 'L3210',
    calificacion: 4.7,
    descripcion: 'https://www.mercadolibre.com.ar/impresora-multifuncion-a-color-epson-ecotank-l3210-220v/p/MLA18352527#polycard_client=search-nordic&searchVariation=MLA18352527&position=29&search_layout=stack&type=product&tracking_id=ebc3e4de-8220-4c88-8fd7-684cc6f8682d&wid=MLA1455358499&sid=search',
    imagen: "https://http2.mlstatic.com/D_Q_NP_2X_891725-MLU77931384208_082024-V.webp"
}

// TEMAS QUE VEREMOS EN EL FUTURO
const container = document.createElement('div');

container.innerHTML = `<h2>${impresoraEpson.marca}<h2>
                        <h3>${impresoraEpson.nombe}</h3>
                        <h4 class="cuotas">${impresoraEpson.precios.enCuotas}</h4>
                        <h4>${impresoraEpson.precios.unPago}</h4>
                        <a href=${impresoraEpson.descripcion}>descripción</a>
                        <img src=${impresoraEpson.imagen}/>
                        `
document.body.append(container)