const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-mobile');

hamburger.addEventListener('click', handleClick);

function handleClick(){
    menu.classList.toggle('open');
}