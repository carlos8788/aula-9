const formulario = document.querySelector('form')
const contenedor = document.querySelector('.container')

let contenido = ''

formulario.addEventListener('submit', function (event) {
    event.preventDefault()

    const data = Object.fromEntries(new FormData(event.target))
    // contenido = contenido + 'algo'
    contenido += `
                    <div class="contacto" id="${data.nombre} ">
                        <h2>${data.nombre}</h2>
                        <h2>${data.apellido}</h2>
                        <button class="eliminar" data-id="${data.nombre}" id="${data.apellido}">Eliminar</button>
                    </div>

                 `

    contenedor.innerHTML = contenido

    let botones = document.querySelectorAll(`.eliminar`)

    for (let boton of botones) {
        const dataId = boton.getAttribute('data-id')
        boton.addEventListener('click', function (event) {
            console.log(dataId)
            let elemento = document.querySelector(`#${dataId}`)
            if (elemento) {
                elemento.remove();
            }
        })
    }
})

