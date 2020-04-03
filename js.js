window.onscroll = function() {scrollActivate()};

var navbar = document.getElementById("header__nav");
var sticky = header__nav.offsetTop;

function scrollActivate() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("fixed-nav")
  } else {
    navbar.classList.remove("fixed-nav");
  }
}

//Botones tooltips

const btns = document.querySelectorAll('.experience_list__btn');
const tooltips = document.querySelectorAll('.experience_list__tooltip');
const closeElements = document.querySelector('.experience_list__tooltip--close');

btns.forEach(btn => {
  btn.addEventListener('click', openTooltip);
   const closeElement = btn.parentElement.querySelector('.experience_list__tooltip--close');
   closeElement.addEventListener('click', closeTooltip);
  
});
  



//Funcion para abrir
function openTooltip() {
  const btn = event.currentTarget;
  const tooltip = btn.parentElement.querySelector('.experience_list__tooltip');
  tooltip.classList.add('open-tooltip');
}

//Funcion para cerrar
function closeTooltip() {
  const close = event.currentTarget;
  close.parentElement.classList.remove('open-tooltip');
  
}








