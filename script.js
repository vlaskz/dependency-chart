const name = 'Física Geral I'
const code = 'lap0015'



$(document).ready(getText)

function getText() {
    $(`#${code} > p.code`).text(`${code}`)
    $(`#${code} > p.name`).text(`${name}`)
}