const cartButtons = document.getElementsByClassName("buttn");

for (var i = 0; i < cartButtons.length; i++) {
    var button = cartButtons[i];
    button.addEventListener("click", addToCartClicked);
}

function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement.parentElement;
    var title = shopItem.getElementsByClassName("product-text")[0].innerText;
    var price = shopItem.getElementsByClassName("price")[0].innerText;
    var imagesrc = shopItem.getElementsByClassName("item-img")[0].src;

    console.log(title, price, imagesrc);
    var cart = createCart(title,price,imagesrc);
    storeCartData(cart);
}

function createCart(title,price,imagesrc){
    return{
        image:imagesrc,
        title:title,
        price:price,

    }
}

function storeCartData(cart){
    var jsonCart = JSON.stringify(cart);
    localStorage.setItem("cart-item", jsonCart)
}





