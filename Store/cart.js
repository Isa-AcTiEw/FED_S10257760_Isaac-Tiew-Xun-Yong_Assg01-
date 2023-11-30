document.getElementById("return").onclick = function () {
    location.href = "../Store/Store.html"
}

var StoredJson = localStorage.getItem("cart-item");
var StoredCartItem = JSON.parse(StoredJson);
let item = document.getElementsByClassName("item");
console.log(item);
let generateCart = () =>{
    return (item.innerHTML = StoredCartItem.map((x)=>{
        return `
        <div class = "item">
                <div class = "item-img">
                    <img src="../Assets/Images/loki.png">
                </div>
                <div class = "item-desc">
                    <span>Loki Max <br> $555.00 </span>
                </div>
                <div class = "quantity">
                    <button class = "add-btn" type = "button" name ="button">
                        <img src="../Assets/Images/add.png">
                    </button>
                    <input type = "number" min="0" data-target="num-1" step="1" id="num">
                    <button class = "subt-btn" type = "button" name ="button">
                       <img src = "../Assets/Images/minus.png">
                    </button>
                        

                </div>
`;
    }).join(""));
};


