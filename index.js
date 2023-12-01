let popUp = document.getElementsByClassName("modal-hidden");
let overlay = document.getElementsByClassName("modal-container");
function openPopUp(){
    console.log("pop-up opened")
    popUp.display.style = "flex"
    overlay.display.style = "flex"
}

function closePopUp(){
    popUp.display.style = "none"
    popUp.overlay.style = "none"
}