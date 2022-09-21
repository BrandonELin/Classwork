let newButton = document.querySelector(".new-button");
let grey = document.querySelector(".gray-box")
let popOut = document.querySelector(".pop-out")
let popped = false;
newButton.addEventListener("click", function(){
    grey.style.opacity = "60%";
    grey.style.zIndex = "2";
    popOut.style.zIndex = "3";
})