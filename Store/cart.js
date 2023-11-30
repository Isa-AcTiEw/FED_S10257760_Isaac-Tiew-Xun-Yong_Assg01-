document.getElementById("return").onclick = function () {
    location.href = "../Store/Store.html"
}

var StoredJson = localStorage.getItem("cart-item");
var StoredCartItem = JSON.parse(StoredJson);
console.log(StoredCartItem.title)

