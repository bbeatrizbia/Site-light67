//------Inicio mobile------
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
//------Fim mobile------


//------Inicio slides------

document.addEventListener('DOMContentLoaded', () => {

  const CaroS = document.querySelector('.carousel-slider');
  const CaroSlider = new MicroSlider(CaroS, {indicators: true, indicatorsText: ''});
  const hammer = new Hammer(CaroS);
  const CaroSTimer = 2000;
  let CaroAutoplay = setInterval(() => CaroSlider.next, CaroSTimer);

  CaroS.onmouseenter = function(e){
    clearInterval(CaroAutoplay);
    console.log(e.type + 'mouse detected');
  }
  
  CaroS.onmouseenter = function(e){
    clearInterval(CaroAutoplay);
    CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
    console.log(e.type + 'mouse detected');
  }
  
  CaroS.onclick = function(e){
    clearInterval(CaroAutoplay);
    console.log(e.type + 'mouse detected');
  }

  hammer.on('tap', function(e){
    clearInterval(CaroAutoplay);
    console.log(e.type + 'gesture detected');
  });

  hammer.on('swipe', function(e){
    clearInterval(CaroAutoplay);
    CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
    console.log(e.type) + 'gesture detected'
  });
  
  let slideLink = document.querySelectorAll('.slider-item');
  if(slideLink && slideLink !== null && slideLink.length > 0){
    slideLink.forEach(el => el.addEventListener('click', e => {
      let href = el.dataset.href;
      let target = el.dataset.target;
      if (href !== '#') window.open(href, target)
    }))
  }
})
//------Fim slides------

//------Início animação scroll------
const myObserver = new IntersectionObserver((entries) =>{
    entries.forEach((entra) =>{
        if(entra.isIntersecting){
           entra.target.classList.add('show') 
        } else{
            entra.target.classList.remove('show') 
        }
            
    })
})

const elemento = document.querySelectorAll('.animacao')

elemento.forEach((elemento) => myObserver.observe(elemento))
//------Fim animação scroll------