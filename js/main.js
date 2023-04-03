// DesktopMenu
//Seleccionamos los valores del desktop-menu
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
navEmail.addEventListener('click', toggleDesktopMenu);
// Remueve o agrega la clase inactive del menu-desktop para mostrar o no el menu.
function toggleDesktopMenu(){
    const asideClose = aside.classList.contains('inactive');
    const desktopMenuOpen = desktopMenu.classList.contains('inactive');
    if(!asideClose){
        aside.classList.add('inactive');
    }

    if(desktopMenuOpen){
        desktopMenu.classList.toggle('inactive');
    }else{
        desktopMenu.classList.add('inactive')
    }
}
// DesktopMenu

/*mobileMenu */
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu')
burguerMenu.addEventListener('click',toggleMobileMenu);

function toggleMobileMenu(){
    const asideClose = aside.classList.contains('inactive');
    if(!asideClose){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
    
}

/*Aside */
const navBarShop = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail-inactive');

navBarShop.addEventListener('click',toggleShoppingCart);

function toggleShoppingCart(){
    const MobileMenuClose = mobileMenu.classList.contains('inactive');

    if(!MobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');

    
}