var swBtn = document.querySelector('label')
var body = document.querySelector('body')
var swiBg = document.querySelector('.switch-light')
var input = document.querySelector('input')

function init() {
    let mode = localStorage.getItem('mode') ? "dark" : ""
    body.setAttribute("class", mode)
}

init()

swBtn.addEventListener('click', function(e) {
    body.classList.toggle('dark')
    let mode = body.getAttribute("class") ? "dark" : ""
    localStorage.setItem('mode', mode)
})

