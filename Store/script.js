document.getElementById("return").onclick = function () {
    location.href = "../Store/Store.html"
}

const button = document.querySelector("add-btn")
button.addEventListener("click", ()=>{
    increment();
});

function increment(){
    let input = document.getElementById("num")
    input.stepUp;

}

