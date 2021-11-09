const menu = document.getElementById('menu');
const menuContent = document.querySelector('.navigation');
const menuClose = document.getElementById('menu-close');

menu.addEventListener('click', ()=>{
    menu.style.display = "none";
    menuClose.style.display = "block";
    menuContent.style.display = "flex"
})

menuClose.addEventListener('click', ()=>{
    menuClose.style.display = "none";
    menu.style.display = "block"
    menuContent.style.display = "none"
})