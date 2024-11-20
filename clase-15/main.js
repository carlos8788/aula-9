// const formulario = {
//     nombre: 'Luis',
//     email: 'email@example.com',
//     edad: '36',
//     mensaje: 'lorem ipsum dolor sit amet, consectet'
// }

const NOMBRE_PROMPT = prompt('Ingresá el nombre')
const emailPrompt = prompt('Ingresá el email')
const edadPrompt = prompt('Ingresá la edad')
const mensajePrompt = prompt('Ingresá el mensaje')

const formulario = {}

// if(NOMBRE_PROMPT.length > 0){
//     formulario.nombre = NOMBRE_PROMPT
// }

// if(emailPrompt.length > 0){
//     formulario.email = emailPrompt
// }

// if(mensajePrompt.length > 0){
//     formulario.mensajePrompt = mensajePrompt
// }

function checkString(str, propiedad){
    if(str.length > 0){
        formulario[propiedad] = str
    }else{
        console.log(`El prompt ${propiedad} vino vacío`)
    }
}

checkString(NOMBRE_PROMPT, "nombre")
checkString(emailPrompt, "email")
checkString(mensajePrompt, "mensaje")

function isNumber(valor){
    return !isNaN(valor)
}

console.log(isNumber(edadPrompt))
// const formulario = {
//     nombre: NOMBRE_PROMPT,
//     email: emailPrompt,
//     edad: edadPrompt,
//     mensaje: mensajePrompt
// }

console.log(formulario)