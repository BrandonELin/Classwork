let lightSwitch = document.querySelector("a");
let bulbLight = document.querySelector(".lightbulb")
let backLight = document.querySelector("body");
let head1 = document.querySelector('h1');
console.log(lightSwitch.innerText)
let switchOn = false;
lightSwitch.addEventListener("click", function(evt){
    if(switchOn!==true){
        lightSwitch.innerHTML = '<img class = "switchPic" src="switch.jpg"></img>';
        bulbLight.innerHTML = '<img class = "bulb" src="bulb on.png">';
        backLight.style.backgroundColor = "lightslategray"
        document.querySelector('.fire').style.opacity = '100%';
        head1.innerHTML = "Let Ther<br>e Be Light"
        head1.style.color = "black"
        switchOn = true;
    } else {
        lightSwitch.innerHTML = '<img class = "switchPic" src="switch 2.jpg"></img>';
        bulbLight.innerHTML = '<img class = "bulb" src="bulb off.png">';
        backLight.style.backgroundColor = "black"
        document.querySelector('.fire').style.opacity = '0%';
        head1.innerHTML = "Let The<br>re Be Dark"
        head1.style.color = "white"
        switchOn = false;
    }
    console.log(lightSwitch.innerHTML) 
})