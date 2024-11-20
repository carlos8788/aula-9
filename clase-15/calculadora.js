const form = document.querySelector('form');
const h2 = document.querySelector('h2');
// PROMPT
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target))
// PROMPT
    data.primerNumero = Number(data.primerNumero)
    data.segundoNumero = Number(data.segundoNumero)
    console.log(data)
    let resultado = 0
    switch (data.operacion) {
        case 'sumar':
            resultado = sumar(data.primerNumero, data.segundoNumero)
            break
        case 'restar':
            resultado = restar(data.primerNumero, data.segundoNumero)
            break
        case 'multiplicar':
            resultado = multiplicar(data.primerNumero, data.segundoNumero)
            break
        case 'dividir':
            resultado = dividir(data.primerNumero, data.segundoNumero)
            break
        default:
            resultado = 'No se puede realizar la operación'
            break
    }

    h2.innerText = resultado
    // console.log(resultado)
})

function sumar(a, b) {
    return a + b
}

function restar(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    return a / b
}