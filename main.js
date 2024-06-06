let tableContainer = document.querySelector(".tables")

let result = 0

// Tablas de multiplicar
for(let i = 1; i <= 25; i++){
    tableContainer.innerHTML += `
    <div class="tables__item">
        <h2 class="tables__title">
            Tabla del ${i}
        </h2>

        <ul class="tables__list tables__list--${i}">

        </ul>
    </div>
    `

    // Resultado de las tablas
    for(let n = 1; n <= 50; n++){
        result = i * n

        let list = document.querySelector(".tables__list--"+i)

        list.innerHTML += `
            <li class="list__item">${i + " x " + n + " = " + result}</li>
        `
    }
}