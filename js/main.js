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
    const productDetailAsideClose = document.querySelector('.mainContainerAsideDetail');

    if(productDetailAsideClose){
        productDetailAsideClose.classList.add('inactive');
    }else{
        productDetailAsideClose.classList.remove('inactive');
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

    const productDetailAsideClose = document.querySelector('.mainContainerAsideDetail');

    if(productDetailAsideClose){
        productDetailAsideClose.classList.add('inactive');
        aside.classList.add('inactive');
    }
    
}

/*Aside */
const navBarShop = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail-inactive');

navBarShop.addEventListener('click',toggleShoppingCart);

function toggleShoppingCart(){
    const MobileMenuClose = mobileMenu.classList.contains('inactive');
   // const productDetailInfo = document.querySelector('.product-detail-info');

    if(!MobileMenuClose){
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive'); 
    const productDetailAsideClose = document.querySelector('.mainContainerAsideDetail');

    if(productDetailAsideClose){
        productDetailAsideClose.classList.add('inactive');
    }
    //const productDetailAsideClose = document.querySelector('.mainContainerAsideDetail');    

}

/*Products  */

const productCardContainers = document.querySelector('.cards-containers');

const productList=[];
productList.push({
    name:'Bike',
    price:120,
    image: 'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=360&h=420&dpr=1',
    description:'asddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddasddsasadadsadsadslkadsadslkdkajshasdhshakdasdasdsadasdasdas1'
});
productList.push({
    name:'Mouse',
    price:250,
    image: 'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=360&h=420&dpr=1',
    description:'asddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddasddsasadadsadsadslkadsadslkdkajshasdhshakdasdasdsadasdasdas2'
});
productList.push({
    name:'Notebook',
    price:1200,
    image: 'https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&w=360&h=420&dpr=1',
    description:'asddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddasddsasadadsadsadslkadsadslkdkajshasdhshakdasdasdsadasdasdas3'
});


// Insertar dentro del html
         
function renderProducts (arr){
for (product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productImg = document.createElement('img');
    productImg.setAttribute('src',product.image);
    productImg.addEventListener('click',openProductDetail);

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

function openProductDetail(){
    statusMainContainerAsideDetail.classList.remove('inactive');
}


/*Build product info aside */

/*<aside class="product-detail-info ">
            <img src="https://img.freepik.com/free-psd/furniture-sale-social-media-banner-template_120329-2260.jpg?w=826&t=st=1678314659~exp=1678315259~hmac=7e5ed58c8f7400ef2d50f916a40845a4ca67341aad843d320e417c5420738e1a" alt="">
            <div class="product-info">
                <p> $35,00</p>
                <p>Name product</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur veniam numquam nesciunt tempora necessitatibus sit ut expedita perspiciatis praesentium sapiente nobis sequi repellat, architecto commodi ab tempore voluptatem magnam explicabo?</p>
                <button class="primary-button add-to-card-button">
                    <img src="./icons/bt_add_to_cart.svg" alt="Add to cart" srcset="">
                    Add to card
                </button>
            </div>
        </aside>*/
/*
function openProductDetail(img,name,description,price){
    const productDetailMain = document.querySelector('.mainContainerAsideDetail');
    
    const productDetailAsideMain = document.createElement('div');
    productDetailAsideMain.classList.add('.mainContainerAsideDetail');

    const productDetailAside = document.createElement('aside');
    productDetailAside.classList.add('product-detail-info');

    const productDetailClose = document.createElement('div');
    productDetailClose.classList.add('product-detail-close');

    const productDetailCloseImg = document.createElement('img');
    productDetailCloseImg.setAttribute('src','./icons/icon_close.png')
    productDetailClose.appendChild(productDetailCloseImg);

    //Product img
    const productImgDetail = document.createElement('img');
    productImgDetail.setAttribute('src',img);
    
    const productDetailDots = document.createElement('div');
    productDetailDots.classList.add('dots');

    const productDetailDots1 = document.createElement('span');
    productDetailDots1.classList.add('dot');
    const productDetailDots2 = document.createElement('span');
    productDetailDots2.classList.add('dot');
    const productDetailDots3 = document.createElement('span');
    productDetailDots3.classList.add('dot');

    productDetailDots.appendChild(productDetailDots1)
    productDetailDots.appendChild(productDetailDots2)
    productDetailDots.appendChild(productDetailDots3)


    const productInfoDetail = document.createElement('div');
    productInfoDetail.classList.add('product-info');

    const productInfoDetailPrice = document.createElement('p');
    productInfoDetailPrice.innerText= '$' + price;
    const productInfoDetailName = document.createElement('p');
    productInfoDetailName.innerText= name;
    const productInfoDetailDescription = document.createElement('p');
    productInfoDetailDescription.innerText= description;
    productInfoDetail.appendChild(productInfoDetailPrice);
    productInfoDetail.appendChild(productInfoDetailName);
    productInfoDetail.appendChild(productInfoDetailDescription);
    
    const productInfoDetailButton = document.createElement('button');
    productInfoDetailButton.classList.add('primary-button');
    productInfoDetailButton.classList.add('add-to-card-button');
    
    const productInfoDetailButtonImg = document.createElement('img');
    productInfoDetailButtonImg.setAttribute('src','./icons/bt_add_to_cart.svg');
    productInfoDetailButton.appendChild(productInfoDetailButtonImg)
    
    productInfoDetail.appendChild(productInfoDetailButton);

    //Add everything to the aside
    productDetailAside.appendChild(productDetailClose);
    productDetailAside.appendChild(productImgDetail);
    productDetailAside.appendChild(productDetailDots);
    productDetailAside.appendChild(productInfoDetail);

    productDetailAsideMain.appendChild(productDetailAside);
    
    productDetailMain.appendChild(productDetailAside);
    //productCardContainers.appendChild(productCard);

}*/