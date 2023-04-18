const caracteristicas = document.getElementById('caracteristicas')
const agregar = document.getElementById('agregar')

let total = 2

agregar.addEventListener('click', e => {
    let div = document.createElement('div')
    div.innerHTML = `<span>Característica ${total++}</span> <input type='text' placeholder="Característica">`
    caracteristicas.appendChild(div)
})