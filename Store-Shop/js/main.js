// DesktopMenu
//Seleccionamos los valores del desktop-menu
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
navEmail.addEventListener('click', toggleDesktopMenu);
// Remueve o agrega la clase inactive del menu-desktop para mostrar o no el menu.
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
// DesktopMenu