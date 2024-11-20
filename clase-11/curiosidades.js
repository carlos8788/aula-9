const titulo = document.querySelector('h1');

titulo.textContent = 'Chau mundo'
titulo.classList.add('azul')

const ul = document.createElement('ul')

const li = document.createElement('li')

li.textContent = 'Esto puede ser cualquier cosa'
li.classList.add('azul')

ul.append(li)

document.querySelector('#agregar').addEventListener('click', () => {
    document.body.append(ul)
})

document.querySelector('#quitar').addEventListener('click', () => {
    ul.remove()
})