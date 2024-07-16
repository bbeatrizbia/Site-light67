
let btnMenu = document.getElementById('abrir')
let menu = document.getElementById('mobile')
let base = document.getElementById('base')

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('open')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('open')
})

base.addEventListener('click', ()=>{
    menu.classList.remove('open')
})