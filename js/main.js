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

/*Products  */

const productCardContainers = document.querySelector('.cards-containers');

const productList=[];
productList.push({
    name:'Bike',
    price:120,
    image: 'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=360&h=420&dpr=1'
});
productList.push({
    name:'Mouse',
    price:250,
    image: 'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=360&h=420&dpr=1'
});
productList.push({
    name:'Notebook',
    price:1200,
    image: 'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=360&h=420&dpr=1'
});


// Insertar dentro del html
         
function renderProducts (arr){
for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-details');

    const productInfoDiv = document.createElement('div');

    const productInfoPrice = document.createElement('p');
    productInfoPrice.innerText= '$' + product.price;
    const productInfoName = document.createElement('p');
    productInfoName.innerText= product.name;
    productInfoDiv.appendChild(productInfoPrice)
    productInfoDiv.appendChild(productInfoName)

    const productInfoFigure = document.createElement('figure');
    const productImgCard = document.createElement('img');
    productImgCard.setAttribute('src','./icons/bt_add_to_cart.svg')
    productInfoFigure.appendChild(productImgCard)

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    productCardContainers.appendChild(productCard);
} 
}
renderProducts(productList);

/*Product detail */
const closeProductDetail = document.querySelector('.product-detail-close');
closeProductDetail.addEventListener('click',toggleCloseProductDetail);
const statusMainContainerAsideDetail = document.querySelector('.mainContainerAsideDetail');

function toggleCloseProductDetail(){
    const statusCloseProductDetail = statusMainContainerAsideDetail.classList.contains('inactive');

    if(statusCloseProductDetail){
        statusMainContainerAsideDetail.classList.add('inactive');
    }
    statusMainContainerAsideDetail.classList.toggle('inactive');
}